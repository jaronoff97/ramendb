import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useCreateReview } from '@/hooks/reviews'
import { ReviewForm } from '@/components/reviews/reviews-form'

export const Route = createFileRoute('/_authenticated/reviews/new')({
  component: ReviewNewPage,
})

function ReviewNewPage() {
  const create = useCreateReview()
  const router = useRouter()

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">New Review</h1>
      <ReviewForm
        onSubmit={async values => {
          await create.mutateAsync(values)
          router.navigate({ to: '/reviews' })
        }}
        label="Create"
      />
    </div>
  )
}
