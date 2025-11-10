import { createMiddleware } from '@tanstack/react-start'
import { decodeJwt } from 'jose';
import type { AccessToken } from '@workos-inc/node';
import { verifyAccessToken } from '@/lib/workos/ssr/session';

export interface AuthContext {
  auth: {
    sub: string;
    sessionId: string;
    organizationId: string;
    role: string;
    permissions: Array<string>;
    entitlements: Array<string>;
    rawSession: AccessToken;
  };
}

export const authMiddleware = createMiddleware().server(async ({ next, request }) => {

  const accessToken = request.headers.get('Authorization')?.replace(/^Bearer\s+/i, '')
  if (!accessToken) {
    throw new Response('Unauthorized, no token', { status: 401 })
  }

  const session = await verifyAccessToken(accessToken)
  if (!session) {
    throw new Response('Unauthorized, unable to verify token', { status: 401 })
  }

  // Decode JWT to extract useful info
  const decoded = decodeJwt<AccessToken>(accessToken)

  // Attach to the event context for downstream routes
  const authContext = {
    auth: {
      sub: decoded.sub,
      sessionId: decoded.sid,
      organizationId: decoded.org_id,
      role: decoded.role,
      permissions: decoded.permissions,
      entitlements: decoded.entitlements,
      rawSession: session,
    },
  }

  // Call the next handler
  return next({
    context: {
      authContext
    }
  })
})
