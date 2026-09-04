import { useQuery } from "@tanstack/react-query";

export function bboxFromCenter(
  lat: number,
  lon: number,
  distanceMeters: number = 2000 // default 2km radius
) {
  const earth = 6378137; // meters
  const dLat = distanceMeters / earth;
  const dLon = distanceMeters / (earth * Math.cos(Math.PI * lat / 180));

  const lat1 = lat - dLat * 180 / Math.PI;
  const lat2 = lat + dLat * 180 / Math.PI;
  const lon1 = lon - dLon * 180 / Math.PI;
  const lon2 = lon + dLon * 180 / Math.PI;

  // south, west, north, east
  return `${lat1},${lon1},${lat2},${lon2}`;
}

export interface OSMPlace {
  id: number;
  lat: number;
  lon: number;
  name: string;
  type: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  website: string | null;
  hours: string | null;
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
  return name.replace(/[\\"^$.*+?()[\]{}|/-]/g, '\\$&');
}

async function fetchOSMPlaces(
  type: "restaurant" | "bar",
  name: string,
  startLat: number,
  startLon: number,
  radiusMeters: number
) {
  const bbox = bboxFromCenter(startLat, startLon, radiusMeters);
  const safeName = escapeOverpassRegex(name);

  const query = `
    [out:json][timeout:15];
    (
      node["amenity"="${type}"]["name"~"${safeName}", i](${bbox});
      way["amenity"="${type}"]["name"~"${safeName}", i](${bbox});
    );
    out center tags;
  `;

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query,
  });

  if (!res.ok) throw new Error("Overpass request failed");

  const data = await res.json();

  return (data.elements ?? [])
    .map((el: any): OSMPlace | null => {
      const lat = el.lat ?? el.center?.lat ?? startLat;
      const lon = el.lon ?? el.center?.lon ?? startLon;
      if (!lat || !lon) return null;

      const tags = el.tags ?? {};

      return {
        id: el.id,
        name: tags.name,
        type: tags.amenity,
        address: tags["addr:housenumber"] && tags["addr:street"]
          ? `${tags["addr:housenumber"]} ${tags["addr:street"]}`
          : null,
        city: tags["addr:city"] ?? null,
        state: tags["addr:state"] ?? null,
        country: tags["addr:country"] ?? null,
        lat: lat,
        lon: lon,
        website: tags.website ?? tags.url ?? null,
        hours: tags.opening_hours ?? null,
      };
    })
    .filter(Boolean) as Array<OSMPlace>;
}

export function useOverpassSearch(
  type: "restaurant" | "bar",
  name: string,
  center: { lat: number; lon: number },
  radiusMeters = 2000
) {
  return useQuery({
    queryKey: ["osmSearch", type, name, center, radiusMeters],
    queryFn: () =>
      fetchOSMPlaces(type, name, center.lat, center.lon, radiusMeters),
    enabled: name.length > 1,
  });
}
