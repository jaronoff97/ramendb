import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const SIZES = { sm: 'h-3.5 w-3.5', md: 'h-4 w-4', lg: 'h-6 w-6' } as const

/** Read-only score. Half values round to the nearest whole star. */
export function Stars({
  value,
  size = 'md',
  className,
}: {
  value: number
  size?: keyof typeof SIZES
  className?: string
}) {
  const filled = Math.round(value)
  return (
    <span
      className={cn('inline-flex items-center gap-0.5', className)}
      role="img"
      aria-label={`${value.toFixed(1)} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            SIZES[size],
            star <= filled
              ? 'fill-amber-400 text-amber-400'
              : 'fill-transparent text-muted-foreground/30',
          )}
        />
      ))}
    </span>
  )
}

/** The score picker. A radiogroup, so a keyboard reaches every star. */
export function StarInput({
  value,
  onChange,
  disabled,
}: {
  value: number
  onChange: (next: number) => void
  disabled?: boolean
}) {
  return (
    <div
      className="inline-flex items-center gap-1"
      role="radiogroup"
      aria-label="Rating out of 5"
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} out of 5`}
          disabled={disabled}
          onClick={() => onChange(star)}
          className={cn(
            'rounded-md p-1 transition-transform',
            'hover:scale-110 focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none',
            'disabled:pointer-events-none disabled:opacity-50',
          )}
        >
          <Star
            className={cn(
              'h-7 w-7 transition-colors',
              star <= value
                ? 'fill-amber-400 text-amber-400'
                : 'fill-transparent text-muted-foreground/40',
            )}
          />
        </button>
      ))}
    </div>
  )
}
