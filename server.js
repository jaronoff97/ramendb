// ponytail: the vite build emits a fetch handler, not a listener, and does not
// serve dist/client. srvx (already a dependency of the toolchain) does both.
import { serve } from 'srvx'
import { serveStatic } from 'srvx/static'
import serverEntry from './dist/server/server.js'

serve({
  port: process.env.PORT ?? 3000,
  hostname: '0.0.0.0',
  middleware: [serveStatic({ dir: './dist/client' })],
  fetch: serverEntry.fetch,
})
