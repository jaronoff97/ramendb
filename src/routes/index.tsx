import { createFileRoute } from '@tanstack/react-router'
import type { LatLngTuple } from 'leaflet';
import { getSignInUrl } from '@/lib/workos/server-functions'
import LeafletMap from '@/components/leaflet/map';
import { FloatingSearchPanel } from '@/components/leaflet/search';

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
  const center: LatLngTuple = [40.71817164135247, -73.99294107683443];
  return (
    <LeafletMap center={center} zoom={13}>
      <FloatingSearchPanel center={{ lat: center[0], lon: center[1] }} />
    </LeafletMap>
  )
}
