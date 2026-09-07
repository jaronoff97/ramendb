import { createFileRoute, useParams, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useDeleteReview, useReview } from '@/hooks/reviews'
import { ReviewEditor } from '@/components/reviews/editor/ReviewEditor'

export const Route = createFileRoute('/_authenticated/reviews/$id')({
  component: ReviewEditPage,
})

function ReviewEditPage() {
  const { id } = useParams({ from: '/_authenticated/reviews/$id' })
  const { data: review, isLoading, isError, error } = useReview(id)
  const del = useDeleteReview()
  const router = useRouter()

  // These used to be one branch, so an error and a missing review both showed
  // "Loading..." for ever.
  if (isLoading) {
    return <p className="p-6">Loading...</p>
  }

  if (isError || !review) {
    return (
      <div className="p-6 space-y-4">
        <p className="text-destructive">
          {isError
            ? `Could not load this review: ${error.message}`
            : 'Review not found.'}
        </p>
        <Button
          variant="outline"
          onClick={() => router.navigate({ to: '/reviews' })}
        >
          Back to Reviews
        </Button>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Edit Review</h1>
      <ReviewEditor review={review} />

      {del.isError && (
        <p className="text-destructive text-sm">
          Could not delete this review: {del.error.message}
        </p>
      )}

      <Button
        variant="destructive"
        disabled={del.isPending}
        onClick={async () => {
          await del.mutateAsync(id)
          await router.navigate({ to: '/reviews' })
        }}
      >
        {del.isPending ? 'Deleting…' : 'Delete'}
      </Button>
    </div>
  )
}
