import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { LocationCreateBody } from '@/lib/types'
import type { LocationPureType } from 'prisma/generated/schemas'

export function useCreateLocation() {
  return useMutation({
    mutationKey: ['createLocation'],
    mutationFn: (data: LocationCreateBody): Promise<LocationPureType> =>
      apiFetch('/api/locations', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
