import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Loader2 } from 'lucide-react'
import type { ReviewListRow } from '@/hooks/reviews'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { StarInput } from '@/components/ui/stars'
import { useUpdateReview } from '@/hooks/reviews'

/**
 * Edits a review that already exists.
 *
 * Title, body and score only. Photos and tags belong to their own endpoints
 * and were previously edited here through nested Prisma writes that the
 * server had to unpick.
 */
export function ReviewEditor({ review }: { review: ReviewListRow }) {
  const navigate = useNavigate()
  const update = useUpdateReview()

  const [title, setTitle] = useState(review.title ?? '')
  const [text, setText] = useState(review.text ?? '')
  const [value, setValue] = useState(review.rating?.value ?? 0)

  const canSubmit = title.trim() !== '' && value > 0 && !update.isPending

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (!canSubmit) return
    await update.mutateAsync({
      id: review.id,
      input: { title: title.trim(), text: text.trim() || null },
    })
    await navigate({ to: '/reviews' })
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      <fieldset className="space-y-2">
        <Label className="text-base">Rating</Label>
        <StarInput
          value={value}
          onChange={setValue}
          disabled={update.isPending}
        />
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="text">Your review</Label>
        <Textarea
          id="text"
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {update.isError && (
        <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm">
          Could not save: {update.error.message}
        </p>
      )}

      <div className="flex items-center gap-3 border-t pt-6">
        <Button type="submit" disabled={!canSubmit}>
          {update.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
          {update.isPending ? 'Saving…' : 'Save changes'}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => navigate({ to: '/reviews' })}
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
