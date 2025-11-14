import { useEffect } from "react"
import { useAtomValue } from "jotai"
import { useWizard } from "./useWizard"
import { REVIEW_STEPS } from "./steps"
import type { ReactNode } from "react";
import { locationIdAtom, reviewIdAtom } from "@/data/atoms/review-wizard-atoms"

interface StepWrapperProps {
  children: ReactNode
}

export function StepWrapper({ children }: StepWrapperProps) {
  const { currentStep, goTo } = useWizard()
  const locationId = useAtomValue(locationIdAtom)
  const reviewId = useAtomValue(reviewIdAtom)

  useEffect(() => {
    // redirect logic
    if (currentStep === REVIEW_STEPS.review && !locationId) {
      goTo(REVIEW_STEPS.location)
    }
    if (currentStep === REVIEW_STEPS.pictures && !reviewId) {
      goTo(REVIEW_STEPS.review)
    }
    if (currentStep === REVIEW_STEPS.rating && !reviewId) {
      goTo(REVIEW_STEPS.review)
    }
  }, [currentStep, locationId, reviewId, goTo])

  return <>{children}</>
}
