import { useNavigate } from "@tanstack/react-router"
import { getStepNav, stepOrder, useCurrentStep } from "./steps"
import type { REVIEW_STEP_ROUTE } from "./steps";

export function useWizard() {
  const currentStep = useCurrentStep()
  const step = getStepNav(currentStep)
  const navigate = useNavigate()

  function goNext(hasLocation?: boolean) {
    navigate({ to: step.next(hasLocation) })
  }

  function goPrev() {
    navigate({ to: step.prev() })
  }

  function goTo(stepRoute: REVIEW_STEP_ROUTE) {
    navigate({ to: stepRoute })
  }

  function getProgress() {
    return ((step.index + 1) / stepOrder.length) * 100
  }

  return {
    currentStep,
    stepIndex: step.index,
    isFirstStep: step.isFirst,
    isLastStep: step.isLast,
    goNext,
    goPrev,
    goTo,
    getProgress,
  }
}
