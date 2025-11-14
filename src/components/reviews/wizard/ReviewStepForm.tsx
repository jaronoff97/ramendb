import { useAtom, useSetAtom } from 'jotai'
import { useForm } from '@tanstack/react-form'
import { ReviewCreateInputObjectSchema } from 'prisma/generated/schemas'
import { useWizard } from './useWizard'
import type { ReviewInput } from '@/lib/mutations/useCreateReview';
// import type { TagInput } from '@/lib/mutations/useCreateTags';
import { locationIdAtom, reviewIdAtom, userAtom } from '@/data/atoms/review-wizard-atoms'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useCreateReview } from '@/lib/mutations/useCreateReview'
// import { useCreateTags } from '@/lib/mutations/useCreateTags'

export function ReviewStepForm() {
  const setReview = useSetAtom(reviewIdAtom)
  const [locationId] = useAtom(locationIdAtom)
  const [user] = useAtom(userAtom)
  const createReview = useCreateReview()
  const { goNext } = useWizard()
  // const createTags = useCreateTags()

  const form = useForm({
    defaultValues: { title: '', text: '', tagsInput: '', tags: [] },
    validators: {
      onDynamic: () => ReviewCreateInputObjectSchema,
    },
    onSubmit: ({ value }) => {
      if (locationId == null || user == null) {
        return;
      }

      // const tags: Array<TagInput> = value.tagsInput.split(',').map((t) => t.trim()).filter(Boolean).map((tag) => ({ name: tag }))
      // if (tags.length > 0) {
      //   createTags.mutate(tags)
      // }
      const newReview: ReviewInput = {
        user: {
          connectOrCreate: {
            where: {
              workosId: user.id
            },
            create: {
              email: user.email,
              name: `${user.firstName} ${user.lastName}`,
              workosId: user.id
            }
          }
        },
        title: value.title,
        text: value.text,
        tags: {},
        pictures: {},
        location: {
          connect: {
            id: locationId
          }
        }
      }

      createReview
        .mutateAsync(newReview)
        .then((createdReview) => {
          setReview(createdReview.id)
          goNext()
        })
        .catch((err) => {
          console.log({ msg: "failed", err })
        })
    },
  })

  return (
    <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }} className="space-y-4">
      <form.Field name="title" children={(field) => (
        <div><label>Title</label><Input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} /></div>
      )} />
      <form.Field name="text" children={(field) => (
        <div><label>Review</label><Textarea value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} rows={5} /></div>
      )} />
      <form.Field name="tagsInput" children={(field) => (
        <div><label>Tags</label><Input placeholder="ramen:tonkotsu,ramen:shoyu,gyoza:pork" value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} /></div>
      )} />
      <Button type="submit">Save Review</Button>
    </form>
  )
}
