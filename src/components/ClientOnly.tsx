import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

/**
 * Renders `fallback` on the server and on the first client render, then
 * `children` once the browser has hydrated.
 *
 * Leaflet and MapLibre both touch `window` at construction, so the map cannot
 * render on the server. Marking the whole route `ssr: false` was the blunt
 * way to avoid that, and it cost the page every scrap of server-rendered HTML.
 * This keeps the shell on the server and holds back only the part that needs
 * a browser.
 */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: ReactNode
  fallback?: ReactNode
}) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => setHydrated(true), [])

  return <>{hydrated ? children : fallback}</>
}
