import { useCallback, useState } from 'react'
import LeafletMap from './map'
import { FloatingSearchPanel } from './search'
import type { LatLngTuple } from 'leaflet'
import type { OSMPlace } from '@/hooks/useOverpass'
import type { MapMarker } from './map'

/**
 * The map and its search panel, in one module.
 *
 * They must load together. When they were two separate `React.lazy`
 * components, the panel suspended *after* `MapContainer` had already mounted.
 * React hid the subtree to show the fallback, which disconnects passive
 * effects, and react-leaflet's cleanup calls `map.remove()`. The components
 * stayed mounted, so on reconnect the map context still pointed at a removed
 * map with no panes, and adding the basemap died on
 * `map.getPane(...) is undefined`.
 *
 * One lazy boundary means one suspension, before anything mounts.
 */
function toMarker(place: OSMPlace): MapMarker {
  return {
    id: place.id,
    position: [place.lat, place.lon],
    label: place.name,
    data: place,
  }
}

export default function MapView({ center }: { center: LatLngTuple }) {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null)
  const [markers, setMarkers] = useState<Array<MapMarker>>([])

  const handleResults = useCallback((places: Array<OSMPlace>) => {
    setMarkers(places.map(toMarker))
  }, [])

  const handleSelectPlace = useCallback((place: OSMPlace) => {
    setSelectedMarker(toMarker(place))
  }, [])

  return (
    <LeafletMap
      center={center}
      zoom={13}
      markers={markers}
      selectedMarker={selectedMarker}
      onSelectMarker={setSelectedMarker}
    >
      <FloatingSearchPanel
        center={{ lat: center[0], lon: center[1] }}
        onSelectPlace={handleSelectPlace}
        onResults={handleResults}
      />
    </LeafletMap>
  )
}
