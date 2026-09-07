import { createFileRoute } from '@tanstack/react-router'
import * as z from 'zod'
import { authMiddleware } from '@/lib/middlewares/require-auth'
import {
  MAX_UPLOAD_BYTES,
  SigningUnavailableError,
  createUploadSlot,
  isAllowedImageType,
  readUploadConfig,
} from '@/lib/uploads'

const requestSchema = z.object({
  contentType: z.string(),
  size: z.number().int().positive().max(MAX_UPLOAD_BYTES),
})

export const Route = createFileRoute('/api/uploads/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        // Says whether uploads are available, so the form can offer the file
        // picker or fall back to a URL field.
        GET: {
          handler: () =>
            Response.json({
              enabled: readUploadConfig() !== null,
              maxBytes: MAX_UPLOAD_BYTES,
            }),
        },

        // Behind auth. This is the only way to obtain write access to the
        // bucket, so an anonymous visitor cannot put an image anywhere.
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request, context }) => {
            const body = await request.json()
            const parsed = requestSchema.safeParse(body)
            if (!parsed.success) {
              return Response.json(parsed.error, { status: 400 })
            }

            if (!isAllowedImageType(parsed.data.contentType)) {
              return Response.json(
                { message: 'Images only: jpeg, png, webp, avif or gif.' },
                { status: 415 },
              )
            }

            try {
              const slot = await createUploadSlot(
                context.userId,
                parsed.data.contentType,
              )
              if (!slot) {
                return Response.json(
                  {
                    message: 'Image uploads are not configured on this server.',
                  },
                  { status: 503 },
                )
              }
              return Response.json(slot)
            } catch (error) {
              if (error instanceof SigningUnavailableError) {
                console.error('upload signing failed:', error.message)
                return Response.json(
                  { message: 'Image uploads are unavailable right now.' },
                  { status: 503 },
                )
              }
              throw error
            }
          },
        },
      }),
  },
})
