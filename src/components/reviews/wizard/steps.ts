export type REVIEW_STEP_ROUTES =
  '/reviews/new/location'
  | '/reviews/new/review'
  | '/reviews/new/pictures'
  | '/reviews/new/rating'
  | '/reviews/new/success';

export const REVIEW_STEPS: Record<string, REVIEW_STEP_ROUTES> = {
  'location': '/reviews/new/location',
  'review': '/reviews/new/review',
  'pictures': '/reviews/new/pictures',
  'rating': '/reviews/new/rating',
  'success': '/reviews/new/success',
}

export function getStepNav(currentStep: string): {
  prev: REVIEW_STEP_ROUTES;
  next: REVIEW_STEP_ROUTES;
} {
  return {
    prev: getPreviousStep(currentStep),
    next: getNextStep(currentStep),
  }
}

function getNextStep(currentStep: string): REVIEW_STEP_ROUTES {
  switch (currentStep) {
    case REVIEW_STEPS.location:
      return REVIEW_STEPS.review;
    case REVIEW_STEPS.review:
      return REVIEW_STEPS.pictures;
    case REVIEW_STEPS.pictures:
      return REVIEW_STEPS.rating;
    case REVIEW_STEPS.rating:
      return REVIEW_STEPS.success;
    default:
      return REVIEW_STEPS.location;
  }
}

function getPreviousStep(currentStep: string): REVIEW_STEP_ROUTES {
  switch (currentStep) {
    case REVIEW_STEPS.review:
      return REVIEW_STEPS.location;
    case REVIEW_STEPS.pictures:
      return REVIEW_STEPS.review;
    case REVIEW_STEPS.rating:
      return REVIEW_STEPS.pictures;
    case REVIEW_STEPS.success:
      return REVIEW_STEPS.rating;
    default:
      return REVIEW_STEPS.location;
  }
}
