import { createServerFn } from '@tanstack/react-start'
import { deleteCookie } from '@tanstack/react-start/server'
import { getConfig } from './ssr/config'
import {
  getAuthorizationUrl as getAuthorizationUrlSync,
  sessionCookieOptions,
  terminateSession,
  withAuth,
} from './ssr/session'
import { getWorkOS } from './ssr/workos'
import type { GetAuthURLOptions, NoUserInfo, UserInfo } from './ssr/interfaces'

export const getAuthorizationUrl = createServerFn({ method: 'GET' })
  .inputValidator((options?: GetAuthURLOptions) => options)
  .handler(({ data: options = {} }) => {
    const { returnPathname, screenHint, redirectUri } = options

    return getWorkOS().userManagement.getAuthorizationUrl({
      provider: 'authkit',
      clientId: getConfig('clientId'),
      redirectUri: redirectUri || getConfig('redirectUri'),
      state: returnPathname
        ? btoa(JSON.stringify({ returnPathname }))
        : undefined,
      screenHint,
    })
  })

export const getSignInUrl = createServerFn({ method: 'GET' })
  .inputValidator((data?: string) => data)
  .handler(async ({ data: returnPathname }) => {
    return await getAuthorizationUrl({
      data: { returnPathname, screenHint: 'sign-in' },
    })
  })

export const getSignUpUrl = createServerFn({ method: 'GET' })
  .inputValidator((data?: string) => data)
  .handler(async ({ data: returnPathname }) => {
    return getAuthorizationUrl({
      data: { returnPathname, screenHint: 'sign-up' },
    })
  })

export const signOut = createServerFn({ method: 'POST' })
  .inputValidator((data?: string) => data)
  .handler(async ({ data: returnTo }) => {
    // The name must match `saveSession`, and so must path and domain, or the
    // browser keeps the original cookie.
    const cookieName = getConfig('cookieName') || 'wos-session'
    const { path, domain } = sessionCookieOptions()
    deleteCookie(cookieName, { path, domain })
    await terminateSession({ returnTo })
  })

export const getAuth = createServerFn({ method: 'GET' }).handler(
  async (): Promise<UserInfo | NoUserInfo> => {
    const auth = await withAuth()
    return auth
  },
)

/**
 * The session, and the sign-in URL to offer when there is none, in one call.
 *
 * The root route needs both on every navigation. As two server functions that
 * was two HTTP round trips before anything painted, and the second one only
 * concatenated two constants. The URL is skipped once somebody is signed in,
 * because the header shows "Sign Out" instead.
 */
export const getSession = createServerFn({ method: 'GET' }).handler(
  async (): Promise<(UserInfo | NoUserInfo) & { signInUrl: string }> => {
    const auth = await withAuth()

    return {
      ...auth,
      signInUrl: auth.user
        ? ''
        : getAuthorizationUrlSync({ screenHint: 'sign-in' }),
    }
  },
)
