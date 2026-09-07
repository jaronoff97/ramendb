import { Link } from '@tanstack/react-router'
import { Pencil, Trash2 } from 'lucide-react'
import type { ReviewListRow } from '@/hooks/reviews'
import { Stars } from '@/components/ui/stars'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const dateFormat = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

function initials(name: string | null) {
  if (!name) return '?'
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part.slice(0, 1).toUpperCase())
    .join('')
}

/**
 * One review, readable without signing in.
 *
 * `owned` decides whether the edit and delete buttons appear at all. The list
 * used to show them on every row, including other people's, where the server
 * answers 403.
 */
export function ReviewCard({
  review,
  owned = false,
  showLocation = true,
  onDelete,
  deleting,
}: {
  review: ReviewListRow
  owned?: boolean
  showLocation?: boolean
  onDelete?: (id: string) => void
  deleting?: boolean
}) {
  return (
    <Card className="gap-0 overflow-hidden p-0">
      <div className="flex items-start gap-4 p-5">
        {review.user.pictureUrl ? (
          <img
            src={review.user.pictureUrl}
            alt=""
            className="ring-border h-10 w-10 shrink-0 rounded-full object-cover ring-1"
          />
        ) : (
          <span className="bg-muted text-muted-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium">
            {initials(review.user.name)}
          </span>
        )}

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-medium">
              {review.user.name ?? 'Anonymous'}
            </span>
            {review.rating && <Stars value={review.rating.value} size="sm" />}
            <span className="text-muted-foreground text-xs">
              {dateFormat.format(new Date(review.createdAt))}
            </span>
          </div>

          {showLocation && (
            <Link
              to="/locations/$slug"
              params={{ slug: review.location.slug }}
              className="text-muted-foreground hover:text-foreground block text-sm underline-offset-4 hover:underline"
            >
              {review.location.name}
              {review.location.city ? `, ${review.location.city}` : ''}
            </Link>
          )}

          {review.title && (
            <h3 className="leading-snug font-semibold">{review.title}</h3>
          )}
          {review.text && (
            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
              {review.text}
            </p>
          )}

          {review.pictures.length > 0 && (
            <ul className="flex gap-2 pt-1">
              {review.pictures.map((p) => (
                <li key={p.url}>
                  <img
                    src={p.url}
                    alt=""
                    loading="lazy"
                    className="ring-border h-20 w-20 rounded-lg object-cover ring-1"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {owned && (
          <div className="flex shrink-0 gap-1">
            <Button asChild variant="ghost" size="sm" aria-label="Edit review">
              <Link to="/reviews/$id" params={{ id: review.id }}>
                <Pencil className="h-4 w-4" />
              </Link>
            </Button>
            {onDelete && (
              <Button
                variant="ghost"
                size="sm"
                aria-label="Delete review"
                disabled={deleting}
                onClick={() => onDelete(review.id)}
              >
                <Trash2 className="text-destructive h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
