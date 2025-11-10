import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table'

type Review = any

const col = createColumnHelper<Review>()
const columns = [
  col.accessor('title', { header: 'Title' }),
  col.accessor('rating.value', { header: 'Rating' }),
  col.display({
    id: 'actions',
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Link to="/_authenticated/reviews/$id/edit" params={{ id: row.original.id }}>
          <Button size="sm">Edit</Button>
        </Link>
      </div>
    ),
  }),
]

export function ReviewsTable({ data }: { data: Array<Review> }) {
  const table = useReactTable({ data, columns, getCoreRowModel })
  return (
    <Table>
      <thead>
        {table.getHeaderGroups().map(hg => (
          <TableRow key={hg.id}>
            {hg.headers.map(h => (
              <TableHead key={h.id}>{h.isPlaceholder ? null : h.column.columnDef.header as string}</TableHead>
            ))}
          </TableRow>
        ))}
      </thead>
      <TableBody>
        {table.getRowModel().rows.map(r => (
          <TableRow key={r.id}>
            {r.getVisibleCells().map(c => (
              <TableCell key={c.id}>{c.renderCell()}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
