import { useCallback, useState } from 'react'
import { useNavigate, useRouter } from '@tanstack/react-router'
import LeafletMap from './map'
import { FloatingSearchPanel } from './search'
import type { LatLngTuple } from 'leaflet'
import type { Place } from '@/hooks/usePlaceSearch'
import type { MapMarker } from './map'
import { useLocations } from '@/lib/queries/useLocations'
import { useCreateLocation } from '@/lib/mutations/useCreateLocation'

/**
 * The map and its search panel, in one module.
 *
 * They must load together. As two separate `React.lazy` components the panel
 * suspended after `MapContainer` had mounted, React hid the subtree to show
 * the fallback, and react-leaflet's cleanup removed the map underneath it.
 */
function toMarker(place: Place): MapMarker {
  return {
    id: place.id,
    position: [place.lat, place.lon],
    label: place.name,
    data: place,
  }
}

export default function MapView({
  center,
  signedIn,
  signInUrl,
}: {
  center: LatLngTuple
  signedIn: boolean
  signInUrl: string
}) {
  const navigate = useNavigate()
  const router = useRouter()
  const createLocation = useCreateLocation()
  const { data: locations } = useLocations()

  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null)
  const [candidates, setCandidates] = useState<Array<MapMarker>>([])

  const handleResults = useCallback((places: Array<Place>) => {
    setCandidates(places.map(toMarker))
  }, [])

  const handleSelectPlace = useCallback((place: Place) => {
    setSelectedMarker(toMarker(place))
  }, [])

  async function startReview(marker: MapMarker) {
    const place = marker.data
    if (!place) return

    // Signing in is the point of this click, so send them there and bring
    // them back. It used to call the API and show "Unauthorized, no token".
    if (!signedIn) {
      window.location.href = signInUrl || '/reviews/new'
      return
    }

    // `osmId` makes the server reuse the row if this pin is already in
    // RamenDB, instead of adding ramen-ya-2.
    const created = await createLocation.mutateAsync({
      osmId: String(place.id),
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
    })

    void router.invalidate()
    await navigate({ to: '/reviews/new', search: { location: created.slug } })
  }

  return (
    <LeafletMap
      center={center}
      zoom={13}
      locations={locations ?? []}
      candidates={candidates}
      selectedMarker={selectedMarker}
      onSelectMarker={setSelectedMarker}
      onStartReview={(m) => void startReview(m)}
      startingReview={createLocation.isPending}
      startReviewError={createLocation.error?.message ?? null}
    >
      <FloatingSearchPanel
        center={{ lat: center[0], lon: center[1] }}
        onSelectPlace={handleSelectPlace}
        onResults={handleResults}
      />
    </LeafletMap>
  )
}
