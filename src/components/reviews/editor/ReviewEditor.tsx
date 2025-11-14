import { useForm } from '@tanstack/react-form'
import { ReviewUpdateInputObjectSchema } from 'prisma/generated/schemas'
import type { ReviewPureType } from 'prisma/generated/schemas';
import type { Location, Rating, ReviewPicture, ReviewTag } from '@prisma/client'
import type { UpdateReviewInputType } from '@/hooks/reviews';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useUpdateReview } from '@/hooks/reviews'
import { LocationCard } from '@/components/location';

interface Props {
  review: ReviewPureType
}

export function ReviewEditor({ review }: Props) {
  const update = useUpdateReview()

  const form = useForm({
    defaultValues: {
      title: review.title ?? '',
      text: review.text ?? '',
      rating: (review.rating as Rating).value,
      tags: (review.tags as Array<ReviewTag>).map(t => t.tagId),
      pictures: (review.pictures as Array<ReviewPicture>).map(p => ({ url: p.url, caption: p.caption })),
    },
    validators: {
      onDynamic: () => ReviewUpdateInputObjectSchema,
    },
    onSubmit: ({ value }) => {
      console.log({ value })
      // Prepare update object for Prisma
      const updateData: UpdateReviewInputType = {
        title: value.title,
        text: value.text,
        tags: {
          set: value.tags.map(id => ({ tagId: id })),
        },
        rating: {
          upsert: {
            create: {
              value: value.rating,
              locationId: review.locationId,
              userId: review.userId
            },
            update: {
              value: value.rating
            },
          },
        },
        pictures: {
          deleteMany: {},
          create: value.pictures.map(p => ({
            url: p.url,
            caption: p.caption,
          })),
        },
      }

      update
        .mutateAsync({ id: review.id, input: updateData })
        .catch((error) => {
          console.error('Error updating review:', error)
        })
        .then((response) => {
          console.log({ msg: 'Review updated successfully', response })
        })
    },
  })

  return (
    <form onSubmit={e => { e.preventDefault(); form.handleSubmit() }} className="space-y-4">
      <LocationCard
        location={review.location as Location}
        actions={<button className="text-sm underline">Edit</button>}
      />
      <form.Field name="title" children={(field) => (
        <div>
          <label>Title</label>
          <Input value={field.state.value} onChange={e => field.handleChange(e.target.value)} />
        </div>
      )} />

      <form.Field name="text" children={(field) => (
        <div>
          <label>Review</label>
          <Textarea value={field.state.value} onChange={e => field.handleChange(e.target.value)} rows={5} />
        </div>
      )} />

      <form.Field name="tags" children={(field) => (
        <div>
          <label>Tags (IDs comma-separated)</label>
          <Input
            value={(field.state.value).join(',')}
            onChange={e => field.handleChange(e.target.value.split(',').map(t => t.trim()))}
          />
        </div>
      )} />

      <form.Field name="rating" children={(field) => (
        <div>
          <label>Rating</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map(star => (
              <Button
                key={star}
                size="sm"
                variant={field.state.value >= star ? 'default' : 'outline'}
                onClick={() => field.handleChange(star)}
              >
                ★
              </Button>
            ))}
          </div>
        </div>
      )} />

      <form.Field name="pictures" children={(field) => (
        <div className="space-y-2">
          <label>Pictures</label>
          {(field.state.value as Array<{ url: string; caption?: string }>).map((pic, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Input
                placeholder="URL"
                value={pic.url}
                onChange={e => {
                  const newPics = [...(field.state.value as Array<any>)]
                  newPics[i] = { ...newPics[i], url: e.target.value }
                  field.handleChange(newPics)
                }}
              />
              <Input
                placeholder="Caption"
                value={pic.caption || ''}
                onChange={e => {
                  const newPics = [...(field.state.value as Array<any>)]
                  newPics[i] = { ...newPics[i], caption: e.target.value }
                  field.handleChange(newPics)
                }}
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => {
                  const newPics = [...(field.state.value as Array<any>)]
                  newPics.splice(i, 1)
                  field.handleChange(newPics)
                }}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            size="sm"
            onClick={() => field.handleChange([...(field.state.value as Array<any>), { url: '', caption: '' }])}
          >
            Add Picture
          </Button>
        </div>
      )} />

      <Button type="submit">Save Review</Button>
    </form>
  )
}
