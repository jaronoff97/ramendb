import { createFileRoute, useParams, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useDeleteReview, useReview } from '@/hooks/reviews'
import { ReviewEditor } from '@/components/reviews/editor/ReviewEditor'

export const Route = createFileRoute('/_authenticated/reviews/$id')({
  component: ReviewEditPage,
})

function ReviewEditPage() {
  const { id } = useParams({ from: '/_authenticated/reviews/$id' })
  const { data: review, error: err } = useReview(id)
  const del = useDeleteReview()
  const router = useRouter()
  console.log({ review })
  if (!review || err) {
    return <p>Loading...</p>
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Edit Review</h1>
      <ReviewEditor
        review={review}
      />
      <Button
        variant="destructive"
        onClick={async () => {
          await del.mutateAsync(id)
          router.navigate({ to: '/reviews' })
        }}
      >
        Delete
      </Button>
    </div>
  )
}
