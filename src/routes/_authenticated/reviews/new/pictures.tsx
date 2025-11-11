import { createFileRoute } from '@tanstack/react-router'
import { PicturesStepForm } from '@/components/reviews/wizard/PicturesStepForm'

export const Route = createFileRoute('/_authenticated/reviews/new/pictures')({
  component: PicturesStepForm,
})
