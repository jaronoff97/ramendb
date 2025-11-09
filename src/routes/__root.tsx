import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Header from '../components/Header'
import WorkOSProvider from '../integrations/workos/provider'
import StoreDevtools from '../lib/demo-store-devtools'
import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'
import appCss from '../styles.css?url'
import type { QueryClient } from '@tanstack/react-query'
import type { User } from '@workos-inc/node';
import { getAuth, getSignInUrl } from '@/lib/workos/server-functions'

interface RamenDBRouterContext {
  queryClient: QueryClient
  user?: User
}

export const Route = createRootRouteWithContext<RamenDBRouterContext>()({
  beforeLoad: async () => {
    const { user } = await getAuth();

    return { user };
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
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  loader: async ({ context }) => {
    const { user } = context;
    const url = await getSignInUrl();
    return {
      user,
      url,
    };
  },
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <WorkOSProvider>
          <Header />
          {children}
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              StoreDevtools,
              TanStackQueryDevtools,
            ]}
          />
        </WorkOSProvider>
        <Scripts />
      </body>
    </html>
  )
}
