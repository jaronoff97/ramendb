import { useRouter } from '@tanstack/react-router'

export const stepOrder = [
  '/reviews/new',
  '/reviews/new/location',
  '/reviews/new/review',
  '/reviews/new/pictures',
  '/reviews/new/rating',
  '/reviews/new/success',
] as const

export type REVIEW_STEP_ROUTE = (typeof stepOrder)[number]

export const REVIEW_STEPS = {
  pick: stepOrder[0],
  location: stepOrder[1],
  review: stepOrder[2],
  pictures: stepOrder[3],
  rating: stepOrder[4],
  success: stepOrder[5],
} as const

export function useCurrentStep(): REVIEW_STEP_ROUTE {
  const router = useRouter()
  const pathname = router.state.location.pathname
  const match = [...stepOrder]
    .reverse()
    .find((step) => pathname.startsWith(step))
  return match ?? REVIEW_STEPS.location
}

export function getStepNav(currentStep: REVIEW_STEP_ROUTE) {
  const index = stepOrder.indexOf(currentStep)

  return {
    prev: () => stepOrder[index - 1] ?? currentStep,
    next: (hasLocation?: boolean) => {
      // branching logic from pick
      if (currentStep === REVIEW_STEPS.pick) {
        return hasLocation ? REVIEW_STEPS.review : REVIEW_STEPS.location
      }
      return stepOrder[index + 1] ?? currentStep
    },
    index,
    isFirst: index === 0,
    isLast: index === stepOrder.length - 1,
  }
}
