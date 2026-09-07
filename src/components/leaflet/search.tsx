import { useEffect, useState } from 'react'
import { useMap, useMapEvents } from 'react-leaflet'
import type { OSMPlace } from '@/hooks/useOverpass'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useOverpassSearch } from '@/hooks/useOverpass'
import { useDebounce } from '@/hooks/useDebounce'

interface Props {
  center: { lat: number; lon: number }
  onSelectPlace?: (place: OSMPlace) => void
  onResults?: (places: Array<OSMPlace>) => void
}

/** Overpass gets slow over a huge bounding box, so cap what we ask for. */
const MAX_RADIUS_METERS = 20_000

export function FloatingSearchPanel({
  center: initialCenter,
  onSelectPlace,
  onResults,
}: Props) {
  const map = useMap()
  // Centre and search radius come from the map together. They used to live in
  // two states, one of them called `zoom` while it held metres, and the radius
  // stayed undefined until the first zoom.
  const [view, setView] = useState({
    center: initialCenter,
    radiusMeters: 2000,
  })

  const syncView = () => {
    const bounds = map.getBounds()
    const mapCenter = bounds.getCenter()
    setView({
      center: { lat: mapCenter.lat, lon: mapCenter.lng },
      radiusMeters: Math.min(
        Math.round(mapCenter.distanceTo(bounds.getNorthEast())),
        MAX_RADIUS_METERS,
      ),
    })
  }

  // `moveend` fires after a drag and after a zoom, so one handler covers both.
  useMapEvents({ moveend: syncView })

  const [type, setType] = useState<'restaurant' | 'bar'>('restaurant')
  const [name, setName] = useState('')
  const debouncedName = useDebounce(name, 500)

  const { data, isLoading, isError } = useOverpassSearch(
    type,
    debouncedName,
    view.center,
    view.radiusMeters,
  )

  // Hand the results up so the map can pin them.
  useEffect(() => {
    onResults?.(data ?? [])
  }, [data, onResults])

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

        {isError && (
          <div className="text-sm text-destructive">
            OpenStreetMap search is unavailable. Try again in a moment.
          </div>
        )}

        {!isLoading &&
          !isError &&
          data?.length === 0 &&
          name.trim().length > 1 && (
            <div className="text-sm text-muted-foreground">No results</div>
          )}

        <ul className="space-y-2">
          {data?.map((place) => (
            <li key={place.id}>
              <Button
                variant="ghost"
                className="w-full justify-start text-left"
                onClick={() => {
                  map.setView([place.lat, place.lon], 17)
                  onSelectPlace?.(place)
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
  )
}
