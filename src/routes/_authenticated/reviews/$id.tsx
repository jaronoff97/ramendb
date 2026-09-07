import { Link, createFileRoute, useRouter } from '@tanstack/react-router'
import { PenLine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDeleteReview, useReview } from '@/hooks/reviews'
import { ReviewEditor } from '@/components/reviews/editor/ReviewEditor'
import { EmptyState, Page, PageHeader, Skeleton } from '@/components/ui/page'

export const Route = createFileRoute('/_authenticated/reviews/$id')({
  component: ReviewEditPage,
})

function ReviewEditPage() {
  const { id } = Route.useParams()
  const { data: review, isLoading, isError, error } = useReview(id)
  const del = useDeleteReview()
  const router = useRouter()

  if (isLoading) {
    return (
      <Page className="max-w-2xl">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-6 h-80 w-full" />
      </Page>
    )
  }

  // Loading, error and not-found are three states. They used to be one.
  if (isError || !review) {
    return (
      <Page className="max-w-2xl">
        <EmptyState
          icon={<PenLine className="h-10 w-10" />}
          title={isError ? 'Could not load this review' : 'Review not found'}
          description={isError ? error.message : undefined}
          action={
            <Button asChild>
              <Link to="/reviews">Back to your reviews</Link>
            </Button>
          }
        />
      </Page>
    )
  }

  return (
    <Page className="max-w-2xl">
      <PageHeader
        title="Edit review"
        description={review.location.name}
        actions={
          <Button
            variant="outline"
            disabled={del.isPending}
            onClick={async () => {
              await del.mutateAsync(id)
              await router.navigate({ to: '/reviews' })
            }}
          >
            {del.isPending ? 'Deleting…' : 'Delete'}
          </Button>
        }
      />

      {del.isError && (
        <p className="bg-destructive/10 text-destructive mb-6 rounded-lg px-4 py-3 text-sm">
          Could not delete: {del.error.message}
        </p>
      )}

      <ReviewEditor review={review} />
    </Page>
  )
}
