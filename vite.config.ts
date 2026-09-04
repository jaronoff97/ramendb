import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  server: {
    port: 3000,
    // Listen on every interface, so the dev server is reachable when it runs
    // inside a container.
    host: true,
    watch: process.env.VITE_USE_POLLING
      ? // A bind mount on macOS or Windows delivers no file events, so the
        // watcher has to ask. Only the `docker-dev` service sets this.
        { usePolling: true, interval: 300 }
      : undefined,
  },
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
})

export default config
