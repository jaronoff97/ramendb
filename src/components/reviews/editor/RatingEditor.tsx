import { Button } from '@/components/ui/button'

interface Props {
  value: number
  onChange: (val: number) => void
}

export function RatingEditor({ value, onChange }: Props) {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map(star => (
        <Button
          key={star}
          size="sm"
          variant={value >= star ? 'default' : 'outline'}
          onClick={() => onChange(star)}
        >
          ★
        </Button>
      ))}
    </div>
  )
}
