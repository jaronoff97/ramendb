# node:24 is the Active LTS line (Krypton). alpine takes the base image from
# 243 MB to about 155 MB.
#
# The patch matches bin/hermit, so the container and your machine run the same
# node. Bump both together.
FROM node:24.15.0-alpine AS deps
# alpine is musl, and prisma's query engine links against openssl there too
RUN apk add --no-cache openssl
WORKDIR /app
COPY package*.json ./
# the postinstall hook runs scripts/fix-generated-imports.mjs
COPY scripts ./scripts
RUN npm ci


# Used by the `docker-dev` compose service. Your working tree mounts over /app,
# but node_modules stays on a named volume seeded from this layer, so the musl
# binaries here survive.
FROM deps AS dev
EXPOSE 3000
CMD ["sh", "-c", "npm install --no-audit --no-fund && npm run generate && npm run dev -- --host 0.0.0.0"]


FROM deps AS build
COPY . .
# vite bakes VITE_* into the browser bundle, so they are build inputs
ARG VITE_WORKOS_CLIENT_ID
ARG VITE_WORKOS_API_HOSTNAME=api.workos.com
ARG VITE_WORKOS_REDIRECT_URI
ENV VITE_WORKOS_CLIENT_ID=$VITE_WORKOS_CLIENT_ID \
  VITE_WORKOS_API_HOSTNAME=$VITE_WORKOS_API_HOSTNAME \
  VITE_WORKOS_REDIRECT_URI=$VITE_WORKOS_REDIRECT_URI \
  DATABASE_URL=postgresql://placeholder/build-only
# `prisma generate` runs on alpine here, so it emits the musl query engine that
# the runtime stage needs. No binaryTargets entry required.
RUN npm run generate && npm run build


FROM node:24.15.0-alpine AS runtime
RUN apk add --no-cache openssl
WORKDIR /app
ENV NODE_ENV=production PORT=8080

COPY package*.json ./
COPY scripts ./scripts
# @prisma/client declares the prisma CLI and typescript as real dependencies.
# Neither runs at request time and together they are a third of the image,
# which is a third of every cold start. @prisma/engines is the CLI's engine
# downloader, and the wasm query engines for mysql and cockroachdb are dead
# weight next to the postgres one we actually open.
# ponytail: if a prisma upgrade starts needing them, drop this rm.
#
# @tanstack/react-start declares vite as a real dependency, and vite drags in
# rollup, esbuild and lightningcss. @tanstack/router-generator does the same
# with prettier. None of them appear in the imports of dist/server, which is
# the only code that runs here.
#
# ponytail: this is a guess that holds today. If the server ever fails at boot
# with "cannot find module vite" or similar, delete the second rm and take the
# space back.
RUN npm ci --omit=dev && npm cache clean --force \
  && rm -rf node_modules/prisma node_modules/typescript node_modules/effect \
    node_modules/@prisma/engines node_modules/@prisma/fetch-engine \
    node_modules/@prisma/engines-version \
    node_modules/@prisma/client/runtime/*mysql* \
    node_modules/@prisma/client/runtime/*cockroachdb* \
    node_modules/@prisma/client/runtime/*sqlserver* \
    node_modules/@prisma/client/runtime/*sqlite* \
  && rm -rf node_modules/vite node_modules/rollup node_modules/@rollup \
    node_modules/esbuild node_modules/@esbuild node_modules/prettier \
    node_modules/@babel node_modules/babel-plugin-react-compiler \
    node_modules/tailwindcss node_modules/@tailwindcss \
    node_modules/lightningcss node_modules/lightningcss-*

# the generated prisma client is not on the registry, it comes from the build
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/dist ./dist
COPY server.js ./

EXPOSE 8080
CMD ["node", "server.js"]
