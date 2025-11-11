import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAtomValue } from 'jotai'
import { CheckCircle2 } from 'lucide-react'
import { fullReviewAtom } from '@/data/atoms/review-wizard-atoms'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_authenticated/reviews/new/success')({
  component: SuccessStep,
})

function SuccessStep() {
  const reviewData = useAtomValue(fullReviewAtom)
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
      <h1 className="text-3xl font-semibold mb-2">Review Submitted!</h1>
      <p className="text-muted-foreground mb-8">
        Thanks for sharing your experience. Your review has been saved successfully.
      </p>

      {/* Optional: show submitted data preview */}
      <div className="bg-muted/30 border rounded-lg p-6 w-full max-w-md text-left mb-8">
        <h2 className="text-sm font-medium mb-2">Submitted Review</h2>
        <dl className="space-y-2 text-sm">
          <div>
            <dt className="font-medium text-muted-foreground">Location</dt>
            <dd>{reviewData.location?.name ?? '—'}</dd>
          </div>
          <div>
            <dt className="font-medium text-muted-foreground">Title</dt>
            <dd>{reviewData.review?.title ?? '—'}</dd>
          </div>
          <div>
            <dt className="font-medium text-muted-foreground">Rating</dt>
            <dd>{reviewData.rating?.value ?? '—'}</dd>
          </div>
        </dl>
      </div>

      <div className="flex gap-3">
        <Button onClick={() => navigate({ to: '/reviews' })}>
          Back to Reviews
        </Button>
        <Button variant="outline" onClick={() => navigate({ to: '/reviews/new' })}>
          Write Another
        </Button>
      </div>
    </div>
  )
}
