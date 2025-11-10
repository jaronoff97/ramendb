import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReviewCreateInputObjectSchema, ReviewUpdateInputObjectSchema } from 'prisma/generated/schemas'
import type { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
// import { Rating } from '@/components/ui/rating' // optional component

type CreateSchema = z.infer<typeof ReviewCreateInputObjectSchema>
type UpdateSchema = z.infer<typeof ReviewUpdateInputObjectSchema>

export type ReviewFormProps = {
  initialValues?: Partial<CreateSchema | UpdateSchema>
  onSubmit: (data: any) => Promise<any> | void
  submitLabel?: string
  disabled?: boolean
}

export function ReviewForm({ initialValues = {}, onSubmit, submitLabel = 'Save', disabled }: ReviewFormProps) {
  const schema = ReviewCreateInputObjectSchema.or(ReviewUpdateInputObjectSchema)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<any>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <Input {...register('title')} placeholder="Short title" />
        {errors?.title && <p className="text-xs text-red-600">{String(errors.title?.message)}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Text</label>
        <Textarea {...register('text')} rows={6} placeholder="Write your review..." />
        {errors?.text && <p className="text-xs text-red-600">{String(errors.text?.message)}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Rating</label>
        <Input type="number" {...register('rating.value', { valueAsNumber: true })} min={0} max={5} />
        {errors?.rating && <p className="text-xs text-red-600">{String(errors.rating?.message)}</p>}
      </div>

      {/* Minimal tag UI — adapt to your tag components */}
      <div>
        <label className="block text-sm font-medium">Tags (comma separated)</label>
        <Input {...register('tagsInput')} placeholder="sushi,ramen,cozy" />
      </div>

      <div className="flex items-center gap-2">
        <Button type="submit" disabled={disabled || isSubmitting}>{submitLabel}</Button>
      </div>
    </form>
  )
}
