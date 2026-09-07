import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '../api'

/** A location plus the numbers the map and cards show. */
export interface LocationSummary {
  id: string
  slug: string
  osmId?: string | null
  name: string
  type: string
  address: string | null
  city: string | null
  country: string | null
  latitude: number | null
  longitude: number | null
  website: string | null
  averageRating: number | null
  ratingCount: number
  reviewCount: number
}

/** Every location RamenDB knows about, for the map. */
export function useLocations(reviewedOnly = false) {
  return useQuery({
    queryKey: ['locations', { reviewedOnly }],
    queryFn: () =>
      apiFetch<Array<LocationSummary>>(
        `/api/locations${reviewedOnly ? '?reviewed=1' : ''}`,
      ),
    staleTime: 60_000,
  })
}

export function useSearchLocations(query: string) {
  return useQuery({
    queryKey: ['locations', 'search', query],
    enabled: query.trim().length > 0,
    queryFn: () =>
      apiFetch<Array<LocationSummary>>(
        `/api/locations?q=${encodeURIComponent(query)}`,
      ),
  })
}

/** One location by slug, for its public page. */
export function useLocation(slug: string) {
  return useQuery({
    queryKey: ['locations', 'slug', slug],
    queryFn: () => apiFetch<LocationSummary>(`/api/locations/${slug}`),
  })
}
