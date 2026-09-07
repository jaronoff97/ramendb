import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { LocationCreateBody } from '@/lib/types'
import type { LocationSummary } from '@/lib/queries/useLocations'

export function useCreateLocation() {
  const qc = useQueryClient()
  return useMutation({
    mutationKey: ['createLocation'],
    mutationFn: (data: LocationCreateBody): Promise<LocationSummary> =>
      apiFetch('/api/locations', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['locations'] }),
  })
}
