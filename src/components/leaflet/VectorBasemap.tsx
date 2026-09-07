import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import { setWorkerUrl } from 'maplibre-gl'
import { maplibreGL } from '@maplibre/maplibre-gl-leaflet'
// `?worker&url` and not `?url`: the shipped worker imports a sibling
// `maplibre-gl-shared.mjs`, and `?url` would copy the worker on its own and
// leave that import dangling in the production build.
import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'

// MapLibre works out its own worker URL from `import.meta.url`, which points
// at a bundler chunk once vite has rewritten the module. The worker is not
// beside that chunk, so the map never starts. Hand it the real URL instead.
// This has to run before the first map, so it sits at module scope.
setWorkerUrl(maplibreWorkerUrl)

/**
 * OpenFreeMap serves OpenStreetMap vector tiles under the MIT licence. There
 * is no API key, no signup and no request cap, so nothing here needs a secret
 * and nothing needs wiring into the image build.
 *
 * The other public styles are `bright`, `positron`, `fiord` and `dark`.
 */
const OPENFREEMAP_LIBERTY = 'https://tiles.openfreemap.org/styles/liberty'

/** OpenFreeMap asks for this line, and it has to stay visible. */
const ATTRIBUTION = [
  '<a href="https://openfreemap.org" target="_blank" rel="noreferrer">OpenFreeMap</a>',
  '&copy; <a href="https://www.openmaptiles.org/" target="_blank" rel="noreferrer">OpenMapTiles</a>',
  'Data from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>',
].join(' ')

/**
 * Renders the basemap. It draws nothing itself: it adds a MapLibre GL canvas
 * to the Leaflet map it sits inside, so every marker, popup and map event
 * around it keeps working the way it did with a raster `TileLayer`.
 */
export function VectorBasemap({ style = OPENFREEMAP_LIBERTY }: { style?: string }) {
  const map = useMap()

  useEffect(() => {
    const layer = maplibreGL({ style })
    // The attribution control reads this when the layer joins the map, so set
    // it before `addTo`. MapLibre's own option type does not carry it.
    layer.options.attribution = ATTRIBUTION
    layer.addTo(map)

    return () => {
      map.removeLayer(layer)
    }
  }, [map, style])

  return null
}
