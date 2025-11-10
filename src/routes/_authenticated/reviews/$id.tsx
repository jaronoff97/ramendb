import { createFileRoute, useParams, useRouter } from '@tanstack/react-router'
import { useDeleteReview, useReview, useUpdateReview } from '@/hooks/reviews'
import { ReviewForm } from '@/components/reviews/reviews-form'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_authenticated/reviews/$id')({
  component: ReviewEditPage,
})

function ReviewEditPage() {
  const { id } = useParams({ from: '/_authenticated/reviews/$id' })
  const { data } = useReview(id)
  const update = useUpdateReview()
  const del = useDeleteReview()
  const router = useRouter()

  if (!data) return <p>Loading...</p>

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Edit Review</h1>
      <ReviewForm
        defaultValues={data}
        onSubmit={async values => {
          await update.mutateAsync({ id, input: values })
          router.navigate({ to: '/reviews' })
        }}
        label="Save"
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
