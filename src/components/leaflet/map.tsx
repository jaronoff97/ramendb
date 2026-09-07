import { MapContainer, Marker, Popup } from 'react-leaflet'
import { useNavigate } from '@tanstack/react-router'
import { useSetAtom } from 'jotai';
import type { ReactNode } from 'react'
import type { LatLngTuple, MapOptions } from 'leaflet'
import type { LocationInput } from '@/lib/mutations/useCreateLocation';
import type { OSMPlace } from '@/hooks/useOverpass';
import { VectorBasemap } from './VectorBasemap';
import { useCreateLocation } from '@/lib/mutations/useCreateLocation'
import { locationIdAtom } from '@/data/atoms/review-wizard-atoms';


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
}

export default function LeafletMap({ children, markers = [], selectedMarker = null, ...options }: LeafletMapProps & MapOptions) {
  const navigate = useNavigate();
  const createLocation = useCreateLocation();
  const setLocation = useSetAtom(locationIdAtom)

  const handleStartReview = (marker: MapMarker) => {
    if (!marker.data) return;
    console.log({ marker })
    const newLocation: LocationInput = {
      id: `osm:${marker.data.id}`,
      name: marker.data.name,
      city: marker.data.city,
      country: marker.data.country,
      type: marker.data.type || 'restaurant',
      slug: marker.data.name.toLowerCase().replace(/\s+/g, '-'),
      latitude: marker.position[0],
      longitude: marker.position[1],
      dishes: {},
      ratings: {},
      reviews: {},
      tags: {},
      pictures: {},
    }
    createLocation
      .mutateAsync(newLocation)
      .then((createdLocation) => {
        setLocation(createdLocation.id)
        navigate({ to: `/reviews/new/review` });
      })
      .catch((err) => {
        console.log({ msg: "failed", err })
      })
  };

  return (
    <MapContainer
      className="h-screen w-full relative"
      maxZoom={18}
      {...options}
    >
      <VectorBasemap />

      {/* Regular markers */}
      {markers.map((m) => (
        <Marker key={m.id} position={m.position}>
          {m.label && <Popup>{m.label}</Popup>}
        </Marker>
      ))}

      {/* Selected marker */}
      {selectedMarker && (
        <Marker position={selectedMarker.position}>
          <Popup>
            {selectedMarker.label}
            <br />
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
              onClick={() => handleStartReview(selectedMarker)}
            >
              Start Review
            </button>
          </Popup>
        </Marker>
      )}

      {children}
    </MapContainer>
  )
}
