import { useAtom, useSetAtom } from 'jotai'
import { useForm } from '@tanstack/react-form'
import { useNavigate } from '@tanstack/react-router'
import { ReviewCreateInputObjectSchema } from 'prisma/generated/schemas'
import { REVIEW_STEPS, getStepNav } from './steps'
import { locationAtom, reviewAtom, userAtom } from '@/data/atoms/review-wizard-atoms'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function ReviewStepForm() {
  const setReview = useSetAtom(reviewAtom)
  const navigate = useNavigate()
  const [readLocation] = useAtom(locationAtom)
  const [user] = useAtom(userAtom)
  const step = getStepNav(REVIEW_STEPS.review)
  const form = useForm({
    defaultValues: { title: '', text: '', tagsInput: '', tags: [] },
    validators: {
      onDynamic: () => ReviewCreateInputObjectSchema,
    },
    onSubmit: ({ value }) => {
      if (readLocation == null || user == null) {
        return;
      }
      const tags = value.tagsInput.split(',').map((t) => t.trim()).filter(Boolean)
      console.log({ msg: "TODO: CREATE TAGS", tags })
      setReview({
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
        title: value.title, text: value.text, location: {
          connect: {
            id: readLocation.id
          }
        }
      })
      navigate({ to: step.next })
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
