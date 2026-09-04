import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import type { LatLngTuple } from 'leaflet';
import type { MapMarker } from '@/components/leaflet/map';
import LeafletMap from '@/components/leaflet/map';
import { FloatingSearchPanel } from '@/components/leaflet/search';

export const Route = createFileRoute('/')({
  ssr: false,
  component: App,
})

function App() {
  const center: LatLngTuple = [40.71817, -73.99294];
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [markers] = useState<Array<MapMarker>>([]);

  return (
    <LeafletMap
      center={center}
      zoom={13}
      markers={markers}
      selectedMarker={selectedMarker}
    >
      <FloatingSearchPanel
        center={{ lat: center[0], lon: center[1] }}
        onSelectPlace={(place) => {
          setSelectedMarker({
            id: place.id,
            position: [place.lat, place.lon],
            label: place.name ?? "Unnamed",
            data: place,
          });
        }}
      />
    </LeafletMap>
  )
}
