import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { z } from 'zod'
import type { LocationCreateInputObjectSchema, LocationCreateResultSchema } from 'prisma/generated/schemas'

export type LocationInput = z.infer<typeof LocationCreateInputObjectSchema>
export type LocationResult = z.infer<typeof LocationCreateResultSchema>

export function useCreateLocation() {
  return useMutation({
    mutationKey: ['createLocation'],
    mutationFn: (data: LocationInput): Promise<LocationResult> =>
      apiFetch('/api/locations', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
