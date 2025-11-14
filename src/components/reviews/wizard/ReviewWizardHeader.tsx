import { useWizard } from './useWizard'
import { Progress } from '@/components/ui/progress'

export function ReviewWizardHeader() {
  const { stepIndex, getProgress, currentStep } = useWizard()

  return (
    <div className="p-4 border-b space-y-2">
      <h2 className="text-lg font-semibold">Submit a Review</h2>
      <Progress value={getProgress()} />
      <p className="text-sm text-muted-foreground">
        Step {stepIndex + 1} of 6: {currentStep.split('/').pop()}
      </p>
    </div>
  )
}
