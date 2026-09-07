import { useQuery } from '@tanstack/react-query'

export function bboxFromCenter(
  lat: number,
  lon: number,
  distanceMeters: number = 2000, // default 2km radius
) {
  const earth = 6378137 // meters
  const dLat = distanceMeters / earth
  const dLon = distanceMeters / (earth * Math.cos((Math.PI * lat) / 180))

  const lat1 = lat - (dLat * 180) / Math.PI
  const lat2 = lat + (dLat * 180) / Math.PI
  const lon1 = lon - (dLon * 180) / Math.PI
  const lon2 = lon + (dLon * 180) / Math.PI

  // south, west, north, east
  return `${lat1},${lon1},${lat2},${lon2}`
}

export interface OSMPlace {
  id: number
  lat: number
  lon: number
  name: string
  type: string | null
  address: string | null
  city: string | null
  state: string | null
  country: string | null
  website: string | null
  hours: string | null
}

/**
 * Turns a search term into a literal for an Overpass QL regex filter.
 *
 * The term lands inside a double-quoted regex, so a bare `"` or `\` ends the
 * literal and rewrites the query. Regex metacharacters also let a caller send
 * a pattern that runs slowly against a shared public API. We escape both.
 */
export function escapeOverpassRegex(name: string) {
  // One pass, so an escape we add is never escaped again.
  return name.replace(/[\\"^$.*+?()[\]{}|/-]/g, '\\$&')
}

async function fetchOSMPlaces(
  type: 'restaurant' | 'bar',
  name: string,
  startLat: number,
  startLon: number,
  radiusMeters: number,
) {
  const bbox = bboxFromCenter(startLat, startLon, radiusMeters)
  const safeName = escapeOverpassRegex(name)

  const query = `
    [out:json][timeout:15];
    (
      node["amenity"="${type}"]["name"~"${safeName}", i](${bbox});
      way["amenity"="${type}"]["name"~"${safeName}", i](${bbox});
    );
    out center tags;
  `

  const res = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    body: query,
  })

  if (!res.ok) throw new Error('Overpass request failed')

  const data = await res.json()

  return (data.elements ?? [])
    .map((el: any): OSMPlace | null => {
      const lat = el.lat ?? el.center?.lat ?? startLat
      const lon = el.lon ?? el.center?.lon ?? startLon
      if (!lat || !lon) return null

      const tags = el.tags ?? {}

      return {
        id: el.id,
        name: tags.name,
        type: tags.amenity,
        address:
          tags['addr:housenumber'] && tags['addr:street']
            ? `${tags['addr:housenumber']} ${tags['addr:street']}`
            : null,
        city: tags['addr:city'] ?? null,
        state: tags['addr:state'] ?? null,
        country: tags['addr:country'] ?? null,
        lat: lat,
        lon: lon,
        website: tags.website ?? tags.url ?? null,
        hours: tags.opening_hours ?? null,
      }
    })
    .filter(Boolean) as Array<OSMPlace>
}

/**
 * Overpass is a volunteer-run shared service. It publishes a usage policy and
 * it rate-limits, so the cheapest request is the one we never send.
 *
 * A browser will not let us set the `User-Agent` the policy asks for, so the
 * only levers we have are fewer requests and longer caching. The caller
 * debounces the search box; these settings do the rest.
 */
const CACHE_MS = 10 * 60 * 1000

export function useOverpassSearch(
  type: 'restaurant' | 'bar',
  name: string,
  center: { lat: number; lon: number },
  radiusMeters = 2000,
) {
  // Round the centre to about 100 m. Every small pan would otherwise be a new
  // cache key and another request for the same shops.
  const lat = Math.round(center.lat * 1000) / 1000
  const lon = Math.round(center.lon * 1000) / 1000

  return useQuery({
    queryKey: ['osmSearch', type, name, lat, lon, radiusMeters],
    queryFn: () => fetchOSMPlaces(type, name, lat, lon, radiusMeters),
    enabled: name.trim().length > 1,
    staleTime: CACHE_MS,
    gcTime: CACHE_MS,
    // Overpass answers a rate limit with an error. Retrying would make that
    // worse, and refetching on focus would send the same query again.
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    // Keep the previous list on screen while the next one loads, so the panel
    // does not flash empty on every keystroke.
    placeholderData: (previous) => previous,
  })
}
