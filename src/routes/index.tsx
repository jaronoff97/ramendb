import { createFileRoute } from '@tanstack/react-router'
import { Suspense, lazy } from 'react'
import type { LatLngTuple } from 'leaflet'
import { ClientOnly } from '@/components/ClientOnly'

// One lazy boundary for the whole map. leaflet and maplibre touch `window`
// while their modules evaluate, so a static import here would break the
// server render. See MapView for why the search panel is not a second lazy.
const MapView = lazy(() => import('@/components/leaflet/MapView'))

export const Route = createFileRoute('/')({
  component: App,
})

const NEW_YORK: LatLngTuple = [40.71817, -73.99294]

/** What the server sends, and what the browser shows until the map arrives. */
function MapSkeleton() {
  return (
    <div
      className="h-screen w-full bg-muted animate-pulse"
      role="status"
      aria-label="Loading the map"
    />
  )
}

function App() {
  return (
    <ClientOnly fallback={<MapSkeleton />}>
      <Suspense fallback={<MapSkeleton />}>
        <MapView center={NEW_YORK} />
      </Suspense>
    </ClientOnly>
  )
}
