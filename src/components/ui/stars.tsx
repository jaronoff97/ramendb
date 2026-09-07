import { Star, StarHalf } from 'lucide-react'
import { cn } from '@/lib/utils'

const SIZES = { sm: 'h-3.5 w-3.5', md: 'h-4 w-4', lg: 'h-6 w-6' } as const

/** Rounds to the nearest half, which is the granularity we store. */
export function toHalf(value: number) {
  return Math.round(value * 2) / 2
}

/** Read-only score, to the half star. */
export function Stars({
  value,
  size = 'md',
  className,
}: {
  value: number
  size?: keyof typeof SIZES
  className?: string
}) {
  const rounded = toHalf(value)

  return (
    <span
      className={cn('inline-flex items-center gap-0.5', className)}
      role="img"
      aria-label={`${rounded} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const full = rounded >= star
        const half = !full && rounded >= star - 0.5

        if (half) {
          // StarHalf only draws the left side, so an empty star sits behind it.
          return (
            <span key={star} className={cn('relative', SIZES[size])}>
              <Star
                className={cn(
                  SIZES[size],
                  'absolute inset-0 fill-transparent text-amber-400/30',
                )}
              />
              <StarHalf
                className={cn(
                  SIZES[size],
                  'absolute inset-0 fill-amber-400 text-amber-400',
                )}
              />
            </span>
          )
        }

        return (
          <Star
            key={star}
            className={cn(
              SIZES[size],
              full
                ? 'fill-amber-400 text-amber-400'
                : 'fill-transparent text-muted-foreground/30',
            )}
          />
        )
      })}
    </span>
  )
}

/**
 * The score picker, in half stars.
 *
 * Each star is two buttons side by side. The left half sets x.5 and the right
 * half sets x, which is how every rating widget people already know behaves.
 * Both halves are real buttons, so a keyboard reaches all ten values.
 */
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
      aria-label="Rating out of 5, in half stars"
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const full = value >= star
        const half = !full && value >= star - 0.5

        return (
          <span key={star} className="relative inline-block h-8 w-8">
            {full ? (
              <Star className="pointer-events-none absolute inset-0 m-auto h-7 w-7 fill-amber-400 text-amber-400" />
            ) : half ? (
              <>
                <Star className="pointer-events-none absolute inset-0 m-auto h-7 w-7 fill-transparent text-amber-400/30" />
                <StarHalf className="pointer-events-none absolute inset-0 m-auto h-7 w-7 fill-amber-400 text-amber-400" />
              </>
            ) : (
              <Star className="text-muted-foreground/40 pointer-events-none absolute inset-0 m-auto h-7 w-7 fill-transparent" />
            )}

            {([star - 0.5, star] as const).map((score, index) => (
              <button
                key={score}
                type="button"
                role="radio"
                aria-checked={value === score}
                aria-label={`${score} out of 5`}
                disabled={disabled}
                onClick={() => onChange(score)}
                className={cn(
                  'absolute top-0 h-full w-1/2 rounded-sm',
                  index === 0 ? 'left-0' : 'right-0',
                  'focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none',
                  'disabled:pointer-events-none',
                )}
              />
            ))}
          </span>
        )
      })}

      <span className="text-muted-foreground ml-2 text-sm tabular-nums">
        {value > 0 ? value.toFixed(1) : '—'}
      </span>
    </div>
  )
}
