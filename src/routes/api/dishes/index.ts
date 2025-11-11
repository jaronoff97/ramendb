import { createFileRoute } from '@tanstack/react-router';
import { DishCreateInputObjectSchema } from 'prisma/generated/schemas';
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth';

export const Route = createFileRoute('/api/dishes/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const dishes = await prisma.dish.findMany()
            return Response.json(dishes)
          }
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request }) => {
            const body = await request.json()
            const data = DishCreateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }
            const dish = await prisma.dish.create({ data: data.data })
            return Response.json(dish)
          }
        },
      })
  }
})
