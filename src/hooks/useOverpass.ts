import { useQuery } from "@tanstack/react-query";

export interface OSMPlace {
  id: number;
  name: string | null;
  lat: number;
  lon: number;
  amenity: string;
}

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


async function fetchOSMPlaces(
  type: "restaurant" | "bar",
  name: string,
  startLat: number,
  startLon: number,
  radiusMeters: number) {
  const bbox = bboxFromCenter(startLat, startLon, radiusMeters);

  const query = `
    [out:json][timeout:15];
    (
      node["amenity"="${type}"]["name"~"${name}", i](${bbox});
      way["amenity"="${type}"]["name"~"${name}", i](${bbox});
    );
    out center;
  `;

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query,
  });

  if (!res.ok) throw new Error("Overpass request failed");

  const data = await res.json();

  return (data.elements ?? [])
    .map((el: any): OSMPlace | null => {
      const lat = el.lat ?? el.center?.lat;
      const lon = el.lon ?? el.center?.lon;
      if (!lat || !lon) return null;

      return {
        id: el.id,
        name: el.tags?.name ?? null,
        lat,
        lon,
        amenity: el.tags?.amenity,
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
