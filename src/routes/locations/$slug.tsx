import { Link, createFileRoute } from '@tanstack/react-router'
import { Globe, MapPin, PenLine, Utensils } from 'lucide-react'
import { useLocation } from '@/lib/queries/useLocations'
import { useReviews } from '@/hooks/reviews'
import { ReviewCard } from '@/components/reviews/ReviewCard'
import { Stars } from '@/components/ui/stars'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { EmptyState, Page, Skeleton } from '@/components/ui/page'

export const Route = createFileRoute('/locations/$slug')({
  component: LocationPage,
})

function LocationPage() {
  const { slug } = Route.useParams()
  const { data: location, isLoading, isError } = useLocation(slug)
  const { data: reviewData, isLoading: reviewsLoading } = useReviews({
    locationId: location?.id,
  })

  if (isLoading) {
    return (
      <Page>
        <Skeleton className="h-40 w-full rounded-2xl" />
        <div className="mt-6 space-y-4">
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
        </div>
      </Page>
    )
  }

  if (isError || !location) {
    return (
      <Page>
        <EmptyState
          icon={<MapPin className="h-10 w-10" />}
          title="We do not know this place"
          description="The link may be wrong, or the location was removed."
          action={
            <Button asChild>
              <Link to="/">Back to the map</Link>
            </Button>
          }
        />
      </Page>
    )
  }

  const address = [location.address, location.city, location.country]
    .filter(Boolean)
    .join(', ')
  const reviews = reviewData?.reviews ?? []

  return (
    <Page>
      <header className="from-primary/5 border-border/60 rounded-2xl border bg-gradient-to-br to-transparent p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="capitalize">
                <Utensils className="mr-1 h-3 w-3" />
                {location.type.replace(/_/g, ' ')}
              </Badge>
              {location.website && (
                <a
                  href={location.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs underline-offset-4 hover:underline"
                >
                  <Globe className="h-3 w-3" />
                  Website
                </a>
              )}
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {location.name}
            </h1>

            {address && (
              <p className="text-muted-foreground flex items-start gap-1.5 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {address}
              </p>
            )}

            <div className="flex items-center gap-3 pt-1">
              {location.averageRating == null ? (
                <span className="text-muted-foreground text-sm">
                  No ratings yet
                </span>
              ) : (
                <>
                  <span className="text-2xl font-semibold tabular-nums">
                    {location.averageRating.toFixed(1)}
                  </span>
                  <Stars value={location.averageRating} />
                  <span className="text-muted-foreground text-sm">
                    {location.ratingCount}{' '}
                    {location.ratingCount === 1 ? 'rating' : 'ratings'}
                  </span>
                </>
              )}
            </div>
          </div>

          <Button asChild size="lg">
            <Link to="/reviews/new" search={{ location: location.slug }}>
              <PenLine className="h-4 w-4" />
              Write a review
            </Link>
          </Button>
        </div>
      </header>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          {reviews.length > 0
            ? `${location.reviewCount} ${location.reviewCount === 1 ? 'review' : 'reviews'}`
            : 'Reviews'}
        </h2>

        {reviewsLoading && <Skeleton className="h-28 w-full" />}

        {!reviewsLoading && reviews.length === 0 && (
          <EmptyState
            icon={<PenLine className="h-10 w-10" />}
            title="No reviews yet"
            description="Be the first to say what the broth is like."
            action={
              <Button asChild>
                <Link to="/reviews/new" search={{ location: location.slug }}>
                  Write the first review
                </Link>
              </Button>
            }
          />
        )}

        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} showLocation={false} />
        ))}
      </section>
    </Page>
  )
}
