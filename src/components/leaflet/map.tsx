import { MapContainer, Marker, Popup } from 'react-leaflet'
import { useNavigate } from '@tanstack/react-router'
import { useSetAtom } from 'jotai'
import { VectorBasemap } from './VectorBasemap'
import type { ReactNode } from 'react'
import type { LatLngTuple, MapOptions } from 'leaflet'
import type { OSMPlace } from '@/hooks/useOverpass'
import type { LocationCreateBody } from '@/lib/types'
import { useCreateLocation } from '@/lib/mutations/useCreateLocation'
import { locationIdAtom } from '@/data/atoms/review-wizard-atoms'
import { Button } from '@/components/ui/button'

// Marker type
export interface MapMarker {
  id: string | number
  position: LatLngTuple
  label?: string
  data?: OSMPlace
}

interface LeafletMapProps {
  children?: ReactNode
  zoom: number
  center: LatLngTuple
  markers?: Array<MapMarker>
  selectedMarker?: MapMarker | null
  onSelectMarker?: (marker: MapMarker) => void
}

export default function LeafletMap({
  children,
  markers = [],
  selectedMarker = null,
  onSelectMarker,
  ...options
}: LeafletMapProps & MapOptions) {
  const navigate = useNavigate()
  const createLocation = useCreateLocation()
  const setLocation = useSetAtom(locationIdAtom)

  const handleStartReview = async (marker: MapMarker) => {
    const place = marker.data
    if (!place) return

    // The server derives the slug, so nothing here has to guess at one.
    const newLocation: LocationCreateBody = {
      name: place.name,
      type: place.type || 'restaurant',
      address: place.address,
      city: place.city,
      state: place.state,
      country: place.country,
      website: place.website,
      hours: place.hours,
      latitude: marker.position[0],
      longitude: marker.position[1],
    }

    const created = await createLocation.mutateAsync(newLocation)
    setLocation(created.id)
    await navigate({ to: '/reviews/new/review' })
  }

  return (
    <MapContainer
      className="h-screen w-full relative"
      maxZoom={18}
      {...options}
    >
      <VectorBasemap />

      {/* Everything the search found */}
      {markers.map((m) => (
        <Marker
          key={m.id}
          position={m.position}
          eventHandlers={{ click: () => onSelectMarker?.(m) }}
        >
          {m.label && <Popup>{m.label}</Popup>}
        </Marker>
      ))}

      {/* Selected marker */}
      {selectedMarker && (
        <Marker position={selectedMarker.position}>
          <Popup>
            <div className="space-y-2">
              <div className="font-medium">{selectedMarker.label}</div>

              {createLocation.isError && (
                <p className="text-destructive text-xs">
                  Could not start the review: {createLocation.error.message}
                </p>
              )}

              <Button
                type="button"
                size="sm"
                disabled={createLocation.isPending}
                onClick={() => void handleStartReview(selectedMarker)}
              >
                {createLocation.isPending ? 'Starting…' : 'Start Review'}
              </Button>
            </div>
          </Popup>
        </Marker>
      )}

      {children}
    </MapContainer>
  )
}
