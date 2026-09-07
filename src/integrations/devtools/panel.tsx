import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'

/**
 * The only file that imports a devtools package.
 *
 * Nothing imports this directly. `Devtools` next door loads it with a dynamic
 * import that the production build never reaches, so rollup drops this whole
 * module and its three dependencies. Keep the imports here and nowhere else.
 */
export default function DevtoolsPanel() {
  return (
    <TanStackDevtools
      config={{ position: 'bottom-right' }}
      plugins={[
        { name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> },
        { name: 'Tanstack Query', render: <ReactQueryDevtoolsPanel /> },
      ]}
    />
  )
}
