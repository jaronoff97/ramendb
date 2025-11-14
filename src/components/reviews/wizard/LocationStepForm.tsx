import { useForm } from '@tanstack/react-form'
import { useSetAtom } from 'jotai'
import { LocationCreateInputObjectSchema } from 'prisma/generated/schemas'
import { useWizard } from './useWizard'
import type { LocationInput } from '@/lib/mutations/useCreateLocation';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { locationIdAtom } from '@/data/atoms/review-wizard-atoms'
import { useCreateLocation } from '@/lib/mutations/useCreateLocation'

export function LocationStepForm() {
  const setLocation = useSetAtom(locationIdAtom)
  const createLocation = useCreateLocation();
  const { goNext } = useWizard()

  const form = useForm({
    validators: {
      onDynamic: () => LocationCreateInputObjectSchema,
    },
    defaultValues: { name: '', city: '', country: '', type: '' },
    onSubmit: ({ value }) => {
      const newLocation: LocationInput = {
        name: value.name,
        city: value.city,
        country: value.country,
        type: value.type,
        slug: value.name.toLowerCase().replace(/\s+/g, '-'),
        dishes: {},
        ratings: {},
        reviews: {},
        tags: {},
        pictures: {},
      }
      createLocation
        .mutateAsync(newLocation)
        .then((createdLocation) => {
          setLocation(createdLocation.id)
          goNext()
        })
        .catch((err) => {
          console.log({ msg: "failed", err })
        })
    },
  })

  return (
    <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }} className="space-y-4">
      <form.Field
        name="name"
        children={(field) => (
          <div>
            <label>Name</label>
            <Input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
          </div>
        )}
      />
      <form.Field
        name="type"
        children={(field) => (
          <div>
            <label>Type</label>
            <Input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
          </div>
        )}
      />
      <form.Field name="city" children={(field) => (
        <div><label>City</label><Input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} /></div>
      )} />
      <form.Field name="country" children={(field) => (
        <div><label>Country</label><Input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} /></div>
      )} />
      <Button type="submit">Save Location</Button>
    </form>
  )
}
