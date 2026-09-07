import { Link } from '@tanstack/react-router'
import { DataTable } from '../data-table'
import type { ColumnDef } from '@tanstack/react-table'
import type { ReviewListRow } from '@/hooks/reviews'
import { Button } from '@/components/ui/button'
import { useDeleteReview } from '@/hooks/reviews'

type DeleteReview = (id: string) => Promise<void>

const columns: (
  deleteReview: DeleteReview,
) => Array<ColumnDef<ReviewListRow>> = (deleteReview: DeleteReview) => [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'user.name',
    header: 'User',
  },
  {
    accessorKey: 'rating.value',
    header: 'Rating',
  },
  {
    accessorKey: 'location.name',
    header: 'Location',
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Link to="/reviews/$id" params={{ id: row.original.id }}>
          <Button size="sm">Edit</Button>
        </Link>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => deleteReview(row.original.id)}
        >
          Delete
        </Button>
      </div>
    ),
  },
]

export function ReviewsTable({ data }: { data: Array<ReviewListRow> }) {
  const del = useDeleteReview()
  const delReview = async (id: string) => {
    await del.mutateAsync(id)
  }
  return <DataTable columns={columns(delReview)} data={data} />
}
