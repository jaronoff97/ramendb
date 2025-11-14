import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { LocationPureType } from 'prisma/generated/schemas'

export function useSearchLocations(query: string) {
  return useQuery({
    queryKey: ['searchLocations', query],
    enabled: query.trim().length > 0, // only fire when there's input
    queryFn: async () => {
      const params = new URLSearchParams({ q: query })
      const res = await apiFetch(`/api/locations?${params.toString()}`, {
        method: 'GET',
      })
      return res as Array<LocationPureType>
    },
  })
}
