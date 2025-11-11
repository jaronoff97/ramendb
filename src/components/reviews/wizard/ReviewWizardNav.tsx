import { useNavigate, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

const steps = ['location', 'review', 'pictures', 'rating']

export function ReviewWizardNav() {
  const router = useRouter()
  const navigate = useNavigate()
  const currentStep = router.state.location.pathname.split('/').pop() || 'location'
  const index = steps.indexOf(currentStep)

  const prev = steps[index - 1]
  const next = steps[index + 1]

  return (
    <div className="flex justify-between p-4 border-t">
      {prev ? (
        <Button variant="outline" onClick={() => navigate({ to: `/reviews/new/${prev}` })}>
          Back
        </Button>
      ) : (
        <div />
      )}
      {next ? (
        <Button onClick={() => navigate({ to: `/reviews/new/${next}` })}>
          Next
        </Button>
      ) : (
        <Button type="submit" form="rating-form">
          Submit Review
        </Button>
      )}
    </div>
  )
}
