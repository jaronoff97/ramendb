import { Outlet, createFileRoute } from '@tanstack/react-router'
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { ReviewWizardLayout } from '@/components/reviews/wizard/ReviewWizardLayout'
import { userAtom } from '@/data/atoms/review-wizard-atoms';

export const Route = createFileRoute('/_authenticated/reviews/new')({
  loader: ({ context }) => {
    const { user } = context;
    return { user };
  },
  component: ReviewBase,
})

function ReviewBase() {
  const { user } = Route.useLoaderData();
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    if (user) {
      setUser(user)
    }
  }, [user, setUser])

  return (
    <ReviewWizardLayout>
      <Outlet />
    </ReviewWizardLayout>
  )
}
