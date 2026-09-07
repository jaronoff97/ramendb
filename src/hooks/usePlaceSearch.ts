import { useQuery } from '@tanstack/react-query'

/**
 * Place search, through Photon.
 *
 * This used to call Overpass. Overpass is a query engine, not a search
 * service, and `overpass-api.de` answered 6 of 8 identical requests with 429
 * or 504 while the successes took 6 to 18 seconds. That is what produced
 * "OpenStreetMap search is unavailable" on a normal search.
 *
 * Photon indexes the same OpenStreetMap data and exists for type-ahead. The
 * same searches answer in about 0.7 seconds. It needs no key.
 *
 * ponytail: the public instance is free with no availability guarantee, the
 * same footing Overpass was on. Photon is self-hostable if that stops being
 * good enough.
 */
const PHOTON_URL = 'https://photon.komoot.io/api/'

/** Photon indexes names and addresses. It carries no website or hours. */
export interface Place {
  /** `N123`, `W456`. Type and id together, because a node and a way can share a number. */
  id: string
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

interface PhotonFeature {
  geometry: { coordinates: [number, number] }
  properties: {
    osm_id: number
    osm_type: string
    osm_value?: string
    name?: string
    housenumber?: string
    street?: string
    city?: string
    state?: string
    country?: string
  }
}

/** A box around the centre, in the west,south,east,north order Photon wants. */
export function bboxAround(lat: number, lon: number, metres: number) {
  const dLat = metres / 111_320
  const dLon = metres / (111_320 * Math.cos((lat * Math.PI) / 180))
  return [lon - dLon, lat - dLat, lon + dLon, lat + dLat]
    .map((n) => n.toFixed(5))
    .join(',')
}

function toPlace(feature: PhotonFeature): Place | null {
  const { properties: p, geometry } = feature
  if (!p.name) return null

  const [lon, lat] = geometry.coordinates
  const street = [p.housenumber, p.street].filter(Boolean).join(' ')

  return {
    id: `${p.osm_type}${p.osm_id}`,
    lat,
    lon,
    name: p.name,
    type: p.osm_value ?? 'restaurant',
    address: street || null,
    city: p.city ?? null,
    state: p.state ?? null,
    country: p.country ?? null,
    // Photon does not index either. Nobody can add them from the map, so a
    // place created here starts without them.
    website: null,
    hours: null,
  }
}

async function search(
  query: string,
  lat: number,
  lon: number,
  radiusMetres: number,
): Promise<Array<Place>> {
  const params = new URLSearchParams({
    q: query,
    lat: String(lat),
    lon: String(lon),
    limit: '15',
    lang: 'en',
    osm_tag: 'amenity:restaurant',
    bbox: bboxAround(lat, lon, radiusMetres),
  })

  const response = await fetch(`${PHOTON_URL}?${params.toString()}`)
  if (!response.ok) {
    throw new Error(`Place search failed (${response.status})`)
  }

  const data = (await response.json()) as { features?: Array<PhotonFeature> }
  return (data.features ?? [])
    .map(toPlace)
    .filter((p): p is Place => p !== null)
}

const CACHE_MS = 10 * 60 * 1000

export function usePlaceSearch(
  query: string,
  center: { lat: number; lon: number },
  radiusMetres = 2000,
) {
  // Round the centre to about 100 m. Every small pan would otherwise be a new
  // cache key and another request for the same shops.
  const lat = Math.round(center.lat * 1000) / 1000
  const lon = Math.round(center.lon * 1000) / 1000

  return useQuery({
    queryKey: ['placeSearch', query, lat, lon, radiusMetres],
    queryFn: () => search(query, lat, lon, radiusMetres),
    enabled: query.trim().length > 1,
    staleTime: CACHE_MS,
    gcTime: CACHE_MS,
    // One retry. A single hiccup is common and recoverable; hammering a free
    // service is what got the old provider to rate-limit us.
    retry: 1,
    retryDelay: 700,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    // Keep the previous list on screen while the next one loads, so the panel
    // does not flash empty on every keystroke.
    placeholderData: (previous) => previous,
  })
}
