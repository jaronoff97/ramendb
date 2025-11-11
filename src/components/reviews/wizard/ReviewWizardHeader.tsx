import { useRouter } from '@tanstack/react-router'
import { Progress } from '@/components/ui/progress'

const steps = ['location', 'review', 'pictures', 'rating'] as const

export function ReviewWizardHeader() {
  const router = useRouter()
  const currentStep = router.state.location.pathname.split('/').pop() || 'location'
  const currentIndex = steps.indexOf(currentStep as (typeof steps)[number])
  const progress = ((currentIndex + 1) / steps.length) * 100

  return (
    <div className="p-4 border-b space-y-2">
      <h2 className="text-lg font-semibold">Submit a Review</h2>
      <Progress value={progress} />
      <p className="text-sm text-muted-foreground">
        Step {currentIndex + 1} of {steps.length}: {currentStep}
      </p>
    </div>
  )
}
