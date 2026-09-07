import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import * as z from 'zod'
import { useDebounce } from '@/hooks/useDebounce'
import { useLocation, useSearchLocations } from '@/lib/queries/useLocations'
import { ReviewForm } from '@/components/reviews/ReviewForm'
import { Stars } from '@/components/ui/stars'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { EmptyState, Page, PageHeader, Skeleton } from '@/components/ui/page'

const searchSchema = z.object({ location: z.string().optional() })

export const Route = createFileRoute('/_authenticated/reviews/new')({
  validateSearch: searchSchema,
  component: NewReviewPage,
})

function NewReviewPage() {
  const { location: slug } = Route.useSearch()

  // With a location in the URL this is one screen. Without one, pick a place
  // first. That is the only branch left of what used to be a six step wizard.
  return slug ? <WriteReview slug={slug} /> : <PickLocation />
}

function WriteReview({ slug }: { slug: string }) {
  const { data: location, isLoading, isError } = useLocation(slug)

  if (isLoading) {
    return (
      <Page className="max-w-2xl">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="mt-6 h-96 w-full" />
      </Page>
    )
  }

  if (isError || !location) {
    return (
      <Page className="max-w-2xl">
        <EmptyState
          icon={<MapPin className="h-10 w-10" />}
          title="We do not know this place"
          action={
            <Button asChild>
              <Link to="/reviews/new">Pick another</Link>
            </Button>
          }
        />
      </Page>
    )
  }

  return (
    <Page className="max-w-2xl">
      <PageHeader
        title={`Review ${location.name}`}
        description={
          [location.city, location.country].filter(Boolean).join(', ') ||
          undefined
        }
      />
      <ReviewForm location={location} />
    </Page>
  )
}

function PickLocation() {
  const [term, setTerm] = useState('')
  const debounced = useDebounce(term, 300)
  const { data: results, isLoading } = useSearchLocations(debounced)

  return (
    <Page className="max-w-2xl">
      <PageHeader
        title="Write a review"
        description="Find the place you ate at."
      />

      <div className="relative">
        <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input
          autoFocus
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search RamenDB by name or city…"
          className="pl-9"
        />
      </div>

      {isLoading && <Skeleton className="mt-4 h-16 w-full" />}

      {results && results.length > 0 && (
        <ul className="mt-4 space-y-2">
          {results.map((loc) => (
            <li key={loc.id}>
              <Link to="/reviews/new" search={{ location: loc.slug }}>
                <Card className="hover:border-primary/40 hover:bg-accent/40 flex-row items-center justify-between p-4 transition-colors">
                  <div>
                    <p className="font-medium">{loc.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {[loc.city, loc.country].filter(Boolean).join(', ')}
                    </p>
                  </div>
                  {loc.averageRating != null && (
                    <Stars value={loc.averageRating} size="sm" />
                  )}
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {debounced.length > 0 && !isLoading && results?.length === 0 && (
        <div className="mt-4">
          <EmptyState
            icon={<MapPin className="h-10 w-10" />}
            title="Not in RamenDB yet"
            description="Find it on the map instead. Searching there covers every restaurant in OpenStreetMap, and picking one adds it here."
            action={
              <Button asChild>
                <Link to="/">Open the map</Link>
              </Button>
            }
          />
        </div>
      )}
    </Page>
  )
}
