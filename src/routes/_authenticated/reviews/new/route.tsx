import { Outlet, createFileRoute } from '@tanstack/react-router'
import { ReviewWizardLayout } from '@/components/reviews/wizard/ReviewWizardLayout'

export const Route = createFileRoute('/_authenticated/reviews/new')({
  component: ReviewBase,
})

function ReviewBase() {
  return (
    <ReviewWizardLayout>
      <Outlet />
    </ReviewWizardLayout>
  )
}
