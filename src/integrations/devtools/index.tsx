import { Suspense, lazy } from 'react'

/**
 * Renders the devtools in development and nothing in production.
 *
 * `import.meta.env.DEV` is a literal by the time rollup sees it. In a
 * production build this folds to `null`, so the `import()` is unreachable and
 * rollup drops the panel module together with the three devtools packages.
 *
 * A plain `{import.meta.env.DEV && <Panel />}` also tree-shakes today, but
 * only while the static imports stay shakeable. This keeps the packages out
 * of the production module graph entirely.
 */
const Panel = import.meta.env.DEV ? lazy(() => import('./panel')) : null

export function Devtools() {
  if (!Panel) return null

  return (
    <Suspense fallback={null}>
      <Panel />
    </Suspense>
  )
}
