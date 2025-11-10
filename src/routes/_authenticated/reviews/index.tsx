import { Link, createFileRoute } from '@tanstack/react-router'
import { useReviews } from '@/hooks/reviews'
import { ReviewsTable } from '@/components/reviews/reviews-table'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_authenticated/reviews/')({
  component: ReviewsPage,
})

function ReviewsPage() {
  const { data, isLoading } = useReviews()

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Reviews</h1>
        <Link to="/reviews/new">
          <Button>Create</Button>
        </Link>
      </div>

      {isLoading ? <p>Loading...</p> : <ReviewsTable data={data ?? []} />}
    </div>
  )
}
