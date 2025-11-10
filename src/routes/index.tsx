import { createFileRoute } from '@tanstack/react-router'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { getSignInUrl } from '@/lib/workos/server-functions'

export const Route = createFileRoute('/')({
  ssr: false,
  component: App,
  loader: async ({ context }) => {
    const { user, accessToken } = context;
    const signInUrl = await getSignInUrl();

    return { user, accessToken, signInUrl };
  },
})

function App() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "600px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
