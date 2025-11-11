import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { z } from 'zod'
import type { LocationCreateWithoutReviewsInputObjectZodSchema } from 'prisma/generated/schemas'

export type LocationInput = z.infer<typeof LocationCreateWithoutReviewsInputObjectZodSchema>

export function useCreateLocation() {
  return useMutation({
    mutationKey: ['createLocation'],
    mutationFn: (data: LocationInput) =>
      apiFetch('/api/locations', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
