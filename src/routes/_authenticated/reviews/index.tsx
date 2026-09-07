import { Link, createFileRoute } from '@tanstack/react-router'
import { PenLine } from 'lucide-react'
import { useDeleteReview, useReviews } from '@/hooks/reviews'
import { ReviewCard } from '@/components/reviews/ReviewCard'
import { Button } from '@/components/ui/button'
import { EmptyState, Page, PageHeader, Skeleton } from '@/components/ui/page'

export const Route = createFileRoute('/_authenticated/reviews/')({
  component: MyReviewsPage,
})

function MyReviewsPage() {
  // `mine`, so this is your reviews and every row is one you may edit. The
  // list used to show everybody's, with Edit and Delete buttons that answered
  // 403 on other people's.
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useReviews({ mine: true })
  const del = useDeleteReview()

  const reviews = data?.reviews ?? []

  return (
    <Page>
      <PageHeader
        title="Your reviews"
        description="Everything you have written, newest first."
        actions={
          <Button asChild>
            <Link to="/reviews/new">
              <PenLine className="h-4 w-4" />
              Write a review
            </Link>
          </Button>
        }
      />

      {isLoading && (
        <div className="space-y-4">
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
        </div>
      )}

      {isError && (
        <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm">
          Could not load your reviews: {error.message}
        </p>
      )}

      {del.isError && (
        <p className="bg-destructive/10 text-destructive mb-4 rounded-lg px-4 py-3 text-sm">
          Could not delete that review: {del.error.message}
        </p>
      )}

      {!isLoading && !isError && reviews.length === 0 && (
        <EmptyState
          icon={<PenLine className="h-10 w-10" />}
          title="No reviews yet"
          description="Find a place on the map, eat, then tell everyone about it."
          action={
            <Button asChild>
              <Link to="/">Open the map</Link>
            </Button>
          }
        />
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            owned
            onDelete={(id) => void del.mutateAsync(id)}
            deleting={del.isPending}
          />
        ))}
      </div>

      {hasNextPage && (
        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            disabled={isFetchingNextPage}
            onClick={() => void fetchNextPage()}
          >
            {isFetchingNextPage ? 'Loading…' : 'Load more'}
          </Button>
        </div>
      )}
    </Page>
  )
}
