import { useState } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOverpassSearch } from "@/hooks/useOverpass";
import { useDebounce } from "@/hooks/useDebounce";

interface Props {
  center: { lat: number; lon: number };
  onSelectPlace?: (place: any) => void // callback for selected place
}

export function FloatingSearchPanel({ center: initialCenter, onSelectPlace }: Props) {
  const map = useMap();
  const [zoom, setZoom] = useState<number | undefined>(undefined);
  const [center, setCenter] = useState<{ lat: number; lon: number }>(initialCenter);
  useMapEvents({
    dragend: () => {
      const newCenter = map.getCenter()
      setCenter({
        lat: newCenter.lat,
        lon: newCenter.lng
      });
    },
    zoomend: () => {
      const bounds = map.getBounds();
      const mapCenter = bounds.getCenter(); // LatLng
      const northEast = bounds.getNorthEast(); // LatLng

      // Distance in meters
      const radius = mapCenter.distanceTo(northEast);
      setZoom(radius);
    },
  });
  const [type, setType] = useState<"restaurant" | "bar">("restaurant");
  const [name, setName] = useState("");
  const debouncedName = useDebounce(name, 500);

  const { data, isLoading } = useOverpassSearch(type, debouncedName, center, zoom);

  return (
    <div
      className="absolute top-4 right-4 z-[9999] bg-white shadow-lg rounded-lg p-4 w-80 space-y-3 pointer-events-auto"
      onMouseDown={(e) => e.stopPropagation()} // prevent Leaflet capturing clicks
      onClick={(e) => e.stopPropagation()}
      onDoubleClick={(e) => e.stopPropagation()}
    >
      {/* Type Selector */}
      <Select value={type} onValueChange={(v: any) => setType(v)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select type…" />
        </SelectTrigger>
        <SelectContent position="popper" className="z-[10000]">
          <SelectItem value="restaurant">Restaurants</SelectItem>
          <SelectItem value="bar">Bars</SelectItem>
        </SelectContent>
      </Select>

      {/* Search Input */}
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search by name…"
      />

      {/* Results */}
      <div
        className="max-h-64 overflow-y-auto border rounded-md p-2"
        onWheel={(e) => e.stopPropagation()}
        onMouseEnter={() => map.scrollWheelZoom.disable()}
        onMouseLeave={() => map.scrollWheelZoom.enable()}
      >
        {isLoading && (
          <div className="text-sm text-muted-foreground">Loading…</div>
        )}

        {!isLoading && data?.length === 0 && name.length > 1 && (
          <div className="text-sm text-muted-foreground">No results</div>
        )}

        <ul className="space-y-2">
          {data?.map((place) => (
            <li key={place.id}>
              <Button
                variant="ghost"
                className="w-full justify-start text-left"
                onClick={() => {
                  map.setView([place.lat, place.lon], 17);
                  onSelectPlace?.(place);
                }}
              >
                <div>
                  <div className="font-medium">{place.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {place.type}
                  </div>
                </div>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
