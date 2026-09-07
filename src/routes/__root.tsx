import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import Header from '../components/Header'
import WorkOSProvider from '../integrations/workos/provider'
import { Devtools } from '../integrations/devtools'
import { RouteError, RouteNotFound } from '../components/RouteError'
import appCss from '../styles.css?url'
import type { QueryClient } from '@tanstack/react-query'
import type { User } from '@workos-inc/node'
import { getSession } from '@/lib/workos/server-functions'

interface RamenDBRouterContext {
  queryClient: QueryClient
  user?: User
  accessToken?: string
  signInUrl?: string
}

export const Route = createRootRouteWithContext<RamenDBRouterContext>()({
  // One server call, not two. `getSignInUrl` used to run in the loader below
  // and only joined two constants together.
  beforeLoad: async () => {
    const { user, accessToken, signInUrl } = await getSession()
    return { user, accessToken, signInUrl }
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'RamenDB',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  shellComponent: RootDocument,
  loader: ({ context }) => ({
    user: context.user,
    url: context.signInUrl,
  }),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { user, url } = Route.useLoaderData()

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <WorkOSProvider>
          <Header user={user} signInUrl={url} />
          {children}
          <Devtools />
        </WorkOSProvider>
        <Scripts />
      </body>
    </html>
  )
}
