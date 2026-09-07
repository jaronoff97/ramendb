import { createFileRoute } from '@tanstack/react-router'
import { DishUpdateInputObjectSchema } from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'

export const Route = createFileRoute('/api/dishes/$id')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async ({ params }) => {
            const dish = await prisma.dish.findUnique({
              where: { id: params.id },
            })

            if (!dish) {
              return new Response('Dish not found', { status: 404 })
            }

            return Response.json(dish)
          },
        },
        PUT: {
          middleware: [authMiddleware],
          handler: async ({ request, params }) => {
            const body = await request.json()
            const data = DishUpdateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }

            const updated = await prisma.dish.update({
              where: { id: params.id },
              data: data.data,
            })

            return Response.json(updated)
          },
        },
        DELETE: {
          middleware: [authMiddleware],
          handler: async ({ params }) => {
            await prisma.dish.delete({ where: { id: params.id } })
            return new Response(null, { status: 204 })
          },
        },
      }),
  },
})
