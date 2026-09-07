import { useWizard } from './useWizard'
import { REVIEW_STEPS } from './steps'
import { Button } from '@/components/ui/button'

/**
 * Back and forward for the wizard.
 *
 * This used to keep its own four-step array and match on the last path
 * segment. On `/reviews/new` and `/reviews/new/success` that match returned
 * -1, so "Next" sent people back to the location step. There is one list of
 * steps now, in `steps.ts`, and this reads it.
 */
export function ReviewWizardNav() {
  const { currentStep, isFirstStep, isLastStep, goPrev } = useWizard()

  // The last two steps own their own buttons: rating submits its form, and
  // success offers "Back to Reviews".
  if (currentStep === REVIEW_STEPS.rating || isLastStep) {
    return null
  }

  return (
    <div className="flex justify-between p-4 border-t">
      {isFirstStep ? (
        <div />
      ) : (
        <Button type="button" variant="outline" onClick={goPrev}>
          Back
        </Button>
      )}
    </div>
  )
}
