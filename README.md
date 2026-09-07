# RamenDB

A map of ramen shops, and the reviews you write about them.

Search OpenStreetMap for a place, pin it, write a review, give it a score.

## Stack

| Piece        | What                                                    |
| ------------ | ------------------------------------------------------- |
| Framework    | TanStack Start (React 19, Vite 7)                       |
| Database     | Postgres, through Prisma                                |
| Auth         | WorkOS AuthKit                                          |
| Map          | Leaflet with MapLibre GL, on OpenFreeMap vector tiles   |
| Place search | Overpass, against OpenStreetMap                         |
| Toolchain    | Hermit pins node and task, Docker Compose runs Postgres |

## Getting started

Hermit pins the toolchain, so you need nothing installed but Docker and git.

```bash
source bin/activate-hermit   # puts the pinned node and task on your PATH
cp .env.example .env.local   # then fill in the WorkOS values
task dev
```

`task dev` starts Postgres in Docker, applies the migrations, and runs the dev
server on http://localhost:3000.

Run `task` on its own to list every task.

## Everyday tasks

| Task              | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `task dev`        | Postgres in Docker, the app on your machine         |
| `task docker:dev` | Everything in Docker, with hot reload               |
| `task docker:up`  | The production image, against the same Postgres     |
| `task check`      | Typecheck, lint and test. Run this before you push. |
| `task migrate`    | Apply migrations, and write one if the schema moved |
| `task db:psql`    | A psql shell on the local database                  |
| `task db:reset`   | Throw the local database away and start again       |

## Configuration

`.env.example` lists every variable. The `VITE_` ones reach the browser, so
they are not secrets, and Vite bakes them in at build time. The rest stay on
the server.

The map needs no key. OpenFreeMap serves the tiles, and Photon answers the
place search. Neither asks for a signup.

### Review photos

Set `GCS_BUCKET` to turn on image uploads. There is no credential to set: on
Cloud Run the service account arrives through the metadata server and signs
upload URLs through the IAM credentials API. Terraform grants the one role
that needs, `roles/iam.serviceAccountTokenCreator` on itself.

Leave `GCS_BUCKET` unset and the review form asks for an image URL instead,
which is what a local run does.

Only a signed-in user can get an upload URL, the server picks the object name,
and the bucket only accepts the image types we can name an extension for.

## Layout

```
prisma/schema.prisma     the data model, and the source of the zod schemas
src/routes/api/          the JSON API
src/routes/              the pages
src/lib/                 prisma client, auth middleware, shared schemas
src/components/          UI, grouped by feature
scripts/                 build helpers
```

`prisma/generated/` is not in git. `task generate` writes it, and the Docker
build does the same.

## Notes on the API

Every write route needs a bearer token, and the middleware resolves it to a
local `User`. The server sets the author from that token, so a request body
can never claim to be somebody else. Reviews, ratings and review pictures also
check that the caller owns the row before an update or a delete.

Locations, dishes and tags are shared catalogue data with no owner. Any signed
in user may edit them.

## Testing

```bash
npm test
```

`src/regressions.test.ts` pins the behaviour behind past bugs. Route
authorisation still needs an integration test against a real database.
