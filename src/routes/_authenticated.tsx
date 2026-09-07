import { createFileRoute, redirect } from '@tanstack/react-router'
import { getSignInUrl } from '@/lib/workos/server-functions'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context, location }) => {
    if (!context.user) {
      const path = location.pathname
      const href = await getSignInUrl({ data: path })
      throw redirect({ href })
    }
  },
})
