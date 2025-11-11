import { Link } from '@tanstack/react-router'
import { DataTable } from '../data-table'
import type { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

type Review = any

const columns: Array<ColumnDef<Review>> = [
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
      </div>
    ),
  },
]

export function ReviewsTable({ data }: { data: Array<Review> }) {
  return <DataTable columns={columns} data={data} />
}
