import { Link } from '@tanstack/react-router'
import { DataTable } from '../data-table'
import type { ReviewPureType } from 'prisma/generated/schemas'
import type { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { useDeleteReview } from '@/hooks/reviews'

type DeleteReview = (id: string) => Promise<void>

const columns: (deleteReview: DeleteReview) => Array<ColumnDef<ReviewPureType>> = (deleteReview: DeleteReview) => [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'rating.value',
    header: 'Rating',
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Link to="/reviews/$id" params={{ id: row.original.id }}>
          <Button size="sm">Edit</Button>
        </Link>
        <Button size="sm" variant='destructive' onClick={() => deleteReview(row.original.id)}>Delete</Button>
      </div>
    ),
  },
]

export function ReviewsTable({ data }: { data: Array<ReviewPureType> }) {
  const del = useDeleteReview()
  const delReview = async (id: string) => {
    await del.mutateAsync(id)
  }
  return <DataTable columns={columns(delReview)} data={data} />
}
