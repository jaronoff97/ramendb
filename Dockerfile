FROM node:22.13.0-slim AS deps
# prisma's query engine links against openssl
RUN apt-get update && apt-get install -y --no-install-recommends openssl \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app
# `postinstall` runs this, so it has to be here before `npm ci`.
COPY package*.json ./
COPY scripts ./scripts
RUN npm ci


# Used by the `docker-dev` compose service. Your working tree mounts over /app,
# but node_modules stays on a named volume seeded from this layer, so the linux
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
RUN npm run generate && npm run build


FROM node:22.13.0-slim AS runtime
RUN apt-get update && apt-get install -y --no-install-recommends openssl \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app
ENV NODE_ENV=production PORT=8080

COPY package*.json ./
COPY scripts ./scripts
# @prisma/client declares the prisma CLI and typescript as real dependencies.
# Neither runs at request time and together they are a third of the image,
# which is a third of every cold start.
# ponytail: if a prisma upgrade starts needing them, drop this rm.
RUN npm ci --omit=dev && npm cache clean --force \
  && rm -rf node_modules/prisma node_modules/typescript node_modules/effect

# the generated prisma client is not on the registry, it comes from the build
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/dist ./dist
COPY server.js ./

EXPOSE 8080
CMD ["node", "server.js"]
