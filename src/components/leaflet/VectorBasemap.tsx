import {
  createElementObject,
  createTileLayerComponent,
} from '@react-leaflet/core'
import { setWorkerUrl } from 'maplibre-gl'
import { maplibreGL } from '@maplibre/maplibre-gl-leaflet'
// `?worker&url` and not `?url`: the shipped worker imports a sibling
// `maplibre-gl-shared.mjs`, and `?url` would copy the worker on its own and
// leave that import dangling in the production build.
import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import type { LayerProps } from '@react-leaflet/core'
import type { MaplibreGL } from 'leaflet'

/**
 * OpenFreeMap serves OpenStreetMap vector tiles under the MIT licence. There
 * is no API key, no signup and no request cap, so nothing here needs a secret
 * and nothing needs wiring into the image build.
 *
 * The other public styles are `bright`, `positron`, `fiord` and `dark`.
 */
// MapLibre works out its own worker URL from `import.meta.url`, which points
// at a bundler chunk once vite has rewritten the module. The worker is not
// beside that chunk, so the map never starts. Hand it the real URL instead.
// This has to run before the first map, so it sits at module scope.
setWorkerUrl(maplibreWorkerUrl)

const OPENFREEMAP_LIBERTY = 'https://tiles.openfreemap.org/styles/liberty'

/** OpenFreeMap asks for this line, and it has to stay visible. */
const ATTRIBUTION = [
  '<a href="https://openfreemap.org" target="_blank" rel="noreferrer">OpenFreeMap</a>',
  '&copy; <a href="https://www.openmaptiles.org/" target="_blank" rel="noreferrer">OpenMapTiles</a>',
  'Data from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>',
].join(' ')

interface VectorBasemapProps extends LayerProps {
  style?: string
}

/**
 * The basemap. It draws nothing itself: it puts a MapLibre GL canvas into the
 * Leaflet map around it, so every marker, popup and map event keeps working
 * the way it did with a raster `TileLayer`.
 *
 * This is built with `createLayerComponent` rather than a `useEffect` that
 * calls `addTo`. Leaflet defers `addLayer` through `whenReady`, so a hand
 * rolled effect that adds a layer and then unmounts leaves a queued callback
 * that fires against a torn down map: "can't access property _leaflet_pos".
 * react-leaflet's own primitive sequences mount and unmount against the map
 * for us.
 */
export const VectorBasemap = createTileLayerComponent<
  MaplibreGL,
  VectorBasemapProps
>(
  ({ style = OPENFREEMAP_LIBERTY, ...options }, context) => {
    const layer = maplibreGL({ style, ...options })
    // The attribution control reads this when the layer joins the map, so it
    // has to be set before then. MapLibre's own option type does not carry it.
    layer.options.attribution = ATTRIBUTION
    // `createTileLayerComponent`, like react-leaflet's own TileLayer: this is
    // a base layer, not an overlay, and it holds no children.
    return createElementObject(layer, context)
  },
  (instance, props, prevProps) => {
    if (props.style !== prevProps.style && props.style) {
      instance.getMaplibreMap().setStyle(props.style)
    }
  },
)
