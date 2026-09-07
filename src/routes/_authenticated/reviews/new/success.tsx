import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { resetWizardAtom } from '@/data/atoms/review-wizard-atoms'

export const Route = createFileRoute('/_authenticated/reviews/new/success')({
  component: SuccessStep,
})

function SuccessStep() {
  const navigate = useNavigate()
  const resetWizard = useSetAtom(resetWizardAtom)

  // The review is saved, so the collected ids are spent. Clear them here and
  // "Write Another" starts from an empty wizard.
  useEffect(() => {
    resetWizard()
  }, [resetWizard])

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
      <h1 className="text-3xl font-semibold mb-2">Review Submitted!</h1>
      <p className="text-muted-foreground mb-8">
        Thanks for sharing your experience. Your review has been saved
        successfully.
      </p>

      <div className="flex gap-3">
        <Button onClick={() => navigate({ to: '/reviews' })}>
          Back to Reviews
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate({ to: '/reviews/new' })}
        >
          Write Another
        </Button>
      </div>
    </div>
  )
}
