import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { TagPureType } from 'prisma/generated/schemas'

/** Every tag in the vocabulary. There are few of them, so this loads them all. */
export function useTags() {
  return useQuery({
    queryKey: ['tags'],
    queryFn: () => apiFetch<Array<TagPureType>>('/api/tags/'),
    staleTime: 5 * 60 * 1000,
  })
}
