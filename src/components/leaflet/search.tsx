import { useEffect, useState } from 'react'
import { useMap, useMapEvents } from 'react-leaflet'
import { Search } from 'lucide-react'
import type { Place } from '@/hooks/usePlaceSearch'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { usePlaceSearch } from '@/hooks/usePlaceSearch'
import { useDebounce } from '@/hooks/useDebounce'

interface Props {
  center: { lat: number; lon: number }
  onSelectPlace?: (place: Place) => void
  onResults?: (places: Array<Place>) => void
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

  const [name, setName] = useState('')
  const debouncedName = useDebounce(name, 500)

  const searching = name.trim().length > 1
  const { data, isLoading, isError, refetch } = usePlaceSearch(
    debouncedName,
    view.center,
    view.radiusMeters,
  )

  const showResults = searching

  // Hand the results up so the map can pin them.
  useEffect(() => {
    onResults?.(data ?? [])
  }, [data, onResults])

  return (
    <div
      className="bg-background/95 ring-border pointer-events-auto absolute top-4 right-4 z-[9999] w-80 space-y-3 rounded-xl p-4 shadow-xl ring-1 backdrop-blur"
      onMouseDown={(e) => e.stopPropagation()} // prevent Leaflet capturing clicks
      onClick={(e) => e.stopPropagation()}
      onDoubleClick={(e) => e.stopPropagation()}
    >
      <div>
        <p className="mb-1.5 text-sm font-medium">Add a place</p>
        <p className="text-muted-foreground mb-2.5 text-xs leading-relaxed">
          Search OpenStreetMap for a restaurant that is not on the map yet.
        </p>
        <div className="relative">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2" />
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search by name…"
            className="pl-8"
          />
        </div>
      </div>

      {showResults && (
        <div
          className="max-h-64 overflow-y-auto rounded-md border p-1"
          onWheel={(e) => e.stopPropagation()}
          onMouseEnter={() => map.scrollWheelZoom.disable()}
          onMouseLeave={() => map.scrollWheelZoom.enable()}
        >
          {isLoading && (
            <div className="text-muted-foreground p-2 text-sm">Searching…</div>
          )}

          {isError && (
            <div className="space-y-2 p-2">
              <p className="text-destructive text-sm">
                Place search did not answer.
              </p>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => void refetch()}
              >
                Try again
              </Button>
            </div>
          )}

          {!isLoading &&
            !isError &&
            data?.length === 0 &&
            name.trim().length > 1 && (
              <div className="text-sm text-muted-foreground">No results</div>
            )}

          <ul>
            {data?.map((place) => (
              <li key={place.id}>
                <button
                  type="button"
                  className="hover:bg-accent w-full rounded-md px-2 py-2 text-left transition-colors"
                  onClick={() => {
                    map.setView([place.lat, place.lon], 17)
                    onSelectPlace?.(place)
                  }}
                >
                  <span className="block text-sm font-medium">
                    {place.name}
                  </span>
                  {place.address && (
                    <span className="text-muted-foreground block truncate text-xs">
                      {place.address}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
