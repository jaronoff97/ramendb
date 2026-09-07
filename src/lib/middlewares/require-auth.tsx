import { createMiddleware } from '@tanstack/react-start'
import { decodeJwt } from 'jose'
import type { AccessToken } from '@workos-inc/node'
import { verifyAccessToken, withAuth } from '@/lib/workos/ssr/session'
import { prisma } from '@/lib/prisma'

export interface AuthContext {
  /** The local `User.id`. Handlers must use this, never a user id from the body. */
  userId: string
  /** The WorkOS user id (the `sub` claim). */
  workosId: string
}

const unauthorized = (reason: string) =>
  new Response(`Unauthorized, ${reason}`, { status: 401 })

/**
 * Verifies the bearer token and resolves the local `User` row for it.
 *
 * The access token carries no email, so the profile comes from the sealed
 * session cookie. We require the cookie to describe the same user as the
 * token, so a stolen token alone cannot create or claim a local user.
 *
 * ponytail: this means a bearer token only works from a browser that also
 * holds the session cookie, which is the only caller today. For a token-only
 * client, read the profile from `getWorkOS().userManagement.getUser(sub)`
 * instead, and accept one WorkOS round trip per authenticated write.
 */
export const authMiddleware = createMiddleware().server(
  async ({ next, request }) => {
    const accessToken = request.headers
      .get('Authorization')
      ?.replace(/^Bearer\s+/i, '')
    if (!accessToken) {
      throw unauthorized('no token')
    }

    if (!(await verifyAccessToken(accessToken))) {
      throw unauthorized('unable to verify token')
    }

    const { sub } = decodeJwt<AccessToken>(accessToken)
    const session = await withAuth()

    if (!session.user || session.user.id !== sub) {
      throw unauthorized('session does not match token')
    }

    const { email, firstName, lastName, profilePictureUrl } = session.user
    const name = [firstName, lastName].filter(Boolean).join(' ') || null

    const user = await prisma.user.upsert({
      where: { workosId: sub },
      update: { email, name, pictureUrl: profilePictureUrl },
      create: { workosId: sub, email, name, pictureUrl: profilePictureUrl },
      select: { id: true },
    })

    return next({
      context: { userId: user.id, workosId: sub } satisfies AuthContext,
    })
  },
)
