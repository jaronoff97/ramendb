import { useForm } from '@tanstack/react-form'
import { useSetAtom } from 'jotai'
import * as z from 'zod'
import { useWizard } from './useWizard'
import type { LocationCreateBody } from '@/lib/types'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { locationIdAtom } from '@/data/atoms/review-wizard-atoms'
import { useCreateLocation } from '@/lib/mutations/useCreateLocation'
import { fieldErrors } from '@/lib/form-errors'

// The form's own shape. Every input holds a string, so this cannot be the API
// schema, which allows null and knows about coordinates. `toBody` bridges them.
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  type: z.string().min(1, 'Type is required'),
  city: z.string(),
  country: z.string(),
})

type FormValues = z.infer<typeof formSchema>

const trimToNull = (value: string) =>
  value.trim() === '' ? null : value.trim()

function toBody(value: FormValues): LocationCreateBody {
  return {
    name: value.name.trim(),
    type: value.type.trim(),
    city: trimToNull(value.city),
    country: trimToNull(value.country),
  }
}

const FIELDS = [
  { name: 'name', label: 'Name' },
  { name: 'type', label: 'Type' },
  { name: 'city', label: 'City' },
  { name: 'country', label: 'Country' },
] as const

export function LocationStepForm() {
  const setLocation = useSetAtom(locationIdAtom)
  const createLocation = useCreateLocation()
  const { goNext } = useWizard()

  const form = useForm({
    validators: { onChange: formSchema },
    defaultValues: {
      name: '',
      type: 'restaurant',
      city: '',
      country: '',
    } as FormValues,
    onSubmit: async ({ value }) => {
      const created = await createLocation.mutateAsync(toBody(value))
      setLocation(created.id)
      goNext()
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        void form.handleSubmit()
      }}
      className="space-y-4"
    >
      {FIELDS.map(({ name, label }) => (
        <form.Field
          key={name}
          name={name}
          children={(field) => (
            <div className="space-y-1">
              <Label htmlFor={field.name}>{label}</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.isTouched && (
                <p className="text-destructive text-sm">
                  {fieldErrors(field.state.meta.errors)}
                </p>
              )}
            </div>
          )}
        />
      ))}

      {createLocation.isError && (
        <p className="text-destructive text-sm">
          Could not save the location: {createLocation.error.message}
        </p>
      )}

      <Button type="submit" disabled={createLocation.isPending}>
        {createLocation.isPending ? 'Saving…' : 'Save Location'}
      </Button>
    </form>
  )
}
