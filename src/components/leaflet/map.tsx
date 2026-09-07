import { MapContainer, Marker, Popup } from 'react-leaflet'
import { Link } from '@tanstack/react-router'
import { VectorBasemap } from './VectorBasemap'
import { candidateIcon, ratedIcon } from './markers'
import type { ReactNode } from 'react'
import type { LatLngTuple, MapOptions } from 'leaflet'
import type { Place } from '@/hooks/usePlaceSearch'
import type { LocationSummary } from '@/lib/queries/useLocations'
import { Stars } from '@/components/ui/stars'
import { Button } from '@/components/ui/button'

export interface MapMarker {
  id: string | number
  position: LatLngTuple
  label?: string
  data?: Place
}

interface LeafletMapProps {
  children?: ReactNode
  zoom: number
  center: LatLngTuple
  /** Places RamenDB already knows, drawn with their score. */
  locations?: Array<LocationSummary>
  /** OpenStreetMap hits from the search box. */
  candidates?: Array<MapMarker>
  selectedMarker?: MapMarker | null
  onSelectMarker?: (marker: MapMarker) => void
  onStartReview?: (marker: MapMarker) => void
  startingReview?: boolean
  startReviewError?: string | null
}

export default function LeafletMap({
  children,
  locations = [],
  candidates = [],
  selectedMarker = null,
  onSelectMarker,
  onStartReview,
  startingReview,
  startReviewError,
  ...options
}: LeafletMapProps & MapOptions) {
  const known = new Set(locations.map((l) => l.osmId ?? '').filter(Boolean))

  return (
    <MapContainer className="h-full w-full" maxZoom={18} {...options}>
      <VectorBasemap />

      {/* Places with reviews. This is the point of the site. */}
      {locations
        .filter((l) => l.latitude != null && l.longitude != null)
        .map((location) => (
          <Marker
            key={location.id}
            position={[location.latitude!, location.longitude!]}
            icon={ratedIcon(location.averageRating)}
          >
            <Popup>
              <div className="min-w-48 space-y-2">
                <p className="text-sm font-semibold">{location.name}</p>
                {location.averageRating == null ? (
                  <p className="text-muted-foreground text-xs">
                    No ratings yet
                  </p>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <Stars value={location.averageRating} size="sm" />
                    <span className="text-muted-foreground text-xs">
                      {location.reviewCount}{' '}
                      {location.reviewCount === 1 ? 'review' : 'reviews'}
                    </span>
                  </div>
                )}
                <Button asChild size="sm" className="w-full">
                  <Link to="/locations/$slug" params={{ slug: location.slug }}>
                    See reviews
                  </Link>
                </Button>
              </div>
            </Popup>
          </Marker>
        ))}

      {/* Search hits that are not in RamenDB yet. */}
      {candidates
        .filter((m) => !known.has(String(m.data?.id ?? '')))
        .map((m) => (
          <Marker
            key={m.id}
            position={m.position}
            icon={candidateIcon()}
            eventHandlers={{ click: () => onSelectMarker?.(m) }}
          >
            {m.label && <Popup>{m.label}</Popup>}
          </Marker>
        ))}

      {selectedMarker && (
        <Marker position={selectedMarker.position} icon={candidateIcon()}>
          <Popup>
            <div className="min-w-52 space-y-2">
              <p className="text-sm font-semibold">{selectedMarker.label}</p>
              <p className="text-muted-foreground text-xs">
                Not in RamenDB yet.
              </p>
              {startReviewError && (
                <p className="text-destructive text-xs">{startReviewError}</p>
              )}
              <Button
                size="sm"
                className="w-full"
                disabled={startingReview}
                onClick={() => onStartReview?.(selectedMarker)}
              >
                {startingReview ? 'Opening…' : 'Add it and review'}
              </Button>
            </div>
          </Popup>
        </Marker>
      )}

      {children}
    </MapContainer>
  )
}
