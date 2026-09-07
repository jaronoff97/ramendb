import { useForm } from '@tanstack/react-form'
import type { ReviewPureType } from 'prisma/generated/schemas'
import type { Location, Rating, ReviewPicture, ReviewTag } from '@prisma/client'
import type { UpdateReviewInputType } from '@/hooks/reviews'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useUpdateReview } from '@/hooks/reviews'
import { useCreateRating } from '@/lib/mutations/useCreateRating'
import { useTags } from '@/lib/queries/useTags'
import { LocationCard } from '@/components/location'

interface Props {
  review: ReviewPureType
}

const STARS = [1, 2, 3, 4, 5]

export function ReviewEditor({ review }: Props) {
  const update = useUpdateReview()
  const saveRating = useCreateRating()
  const { data: allTags } = useTags()

  const form = useForm({
    defaultValues: {
      title: review.title ?? '',
      text: review.text ?? '',
      rating: (review.rating as Rating | null)?.value ?? 0,
      tags: (review.tags as Array<ReviewTag>).map((t) => t.tagId),
      pictures: (review.pictures as Array<ReviewPicture>).map((p) => ({
        url: p.url,
        caption: p.caption ?? '',
      })),
    },
    onSubmit: async ({ value }) => {
      const updateData: UpdateReviewInputType = {
        title: value.title,
        text: value.text,
        // `set` needs a ReviewTag unique key, which is the composite
        // [reviewId, tagId]. Replacing the rows outright is simpler and is
        // what the old `set: [{ tagId }]` was trying to do.
        tags: {
          deleteMany: {},
          create: value.tags.map((tagId) => ({ tagId })),
        },
        pictures: {
          deleteMany: {},
          create: value.pictures.map((p) => ({
            url: p.url,
            caption: p.caption || null,
          })),
        },
      }

      await update.mutateAsync({ id: review.id, input: updateData })

      // The score lives on Rating, keyed by user and location. The ratings
      // route upserts on that key, so it does not need a nested write here.
      if (value.rating > 0) {
        await saveRating.mutateAsync({
          locationId: review.locationId,
          reviewId: review.id,
          value: value.rating,
        })
      }
    },
  })

  const failure = update.error ?? saveRating.error
  const saving = update.isPending || saveRating.isPending

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        void form.handleSubmit()
      }}
      className="space-y-4"
    >
      <LocationCard location={review.location as Location} />

      <form.Field
        name="title"
        children={(field) => (
          <div className="space-y-1">
            <Label htmlFor={field.name}>Title</Label>
            <Input
              id={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      />

      <form.Field
        name="text"
        children={(field) => (
          <div className="space-y-1">
            <Label htmlFor={field.name}>Review</Label>
            <Textarea
              id={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              rows={5}
            />
          </div>
        )}
      />

      <form.Field
        name="tags"
        children={(field) => (
          <div className="space-y-1">
            <span className="text-sm font-medium">Tags</span>
            {/* This was a text box for comma-separated raw tag ids. */}
            <div className="flex flex-wrap gap-2">
              {(allTags ?? []).map((tag) => {
                const selected = field.state.value.includes(tag.id)
                return (
                  <Button
                    key={tag.id}
                    size="sm"
                    variant={selected ? 'default' : 'outline'}
                    aria-pressed={selected}
                    onClick={() =>
                      field.handleChange(
                        selected
                          ? field.state.value.filter((id) => id !== tag.id)
                          : [...field.state.value, tag.id],
                      )
                    }
                  >
                    {tag.name}
                  </Button>
                )
              })}
              {allTags?.length === 0 && (
                <Badge variant="secondary">No tags exist yet</Badge>
              )}
            </div>
          </div>
        )}
      />

      <form.Field
        name="rating"
        children={(field) => (
          <div className="space-y-1">
            <span className="text-sm font-medium">Rating</span>
            <div
              className="flex gap-1"
              role="radiogroup"
              aria-label="Rating out of 5"
            >
              {STARS.map((star) => (
                <Button
                  key={star}
                  size="sm"
                  role="radio"
                  aria-checked={field.state.value === star}
                  aria-label={`${star} out of 5`}
                  variant={field.state.value >= star ? 'default' : 'outline'}
                  onClick={() => field.handleChange(star)}
                >
                  ★
                </Button>
              ))}
            </div>
          </div>
        )}
      />

      <form.Field
        name="pictures"
        children={(field) => (
          <div className="space-y-2">
            <span className="text-sm font-medium">Pictures</span>
            {field.state.value.map((pic, i) => (
              <div key={i} className="flex items-center gap-2">
                <Input
                  placeholder="URL"
                  aria-label={`Picture ${i + 1} URL`}
                  value={pic.url}
                  onChange={(e) => {
                    const next = [...field.state.value]
                    next[i] = { ...next[i], url: e.target.value }
                    field.handleChange(next)
                  }}
                />
                <Input
                  placeholder="Caption"
                  aria-label={`Picture ${i + 1} caption`}
                  value={pic.caption}
                  onChange={(e) => {
                    const next = [...field.state.value]
                    next[i] = { ...next[i], caption: e.target.value }
                    field.handleChange(next)
                  }}
                />
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() =>
                    field.handleChange(
                      field.state.value.filter((_, j) => j !== i),
                    )
                  }
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              size="sm"
              onClick={() =>
                field.handleChange([
                  ...field.state.value,
                  { url: '', caption: '' },
                ])
              }
            >
              Add Picture
            </Button>
          </div>
        )}
      />

      {failure && (
        <p className="text-destructive text-sm">
          Could not save the review: {failure.message}
        </p>
      )}

      {update.isSuccess && !failure && !saving && (
        <p className="text-sm text-muted-foreground">Saved.</p>
      )}

      <Button type="submit" disabled={saving}>
        {saving ? 'Saving…' : 'Save Review'}
      </Button>
    </form>
  )
}
