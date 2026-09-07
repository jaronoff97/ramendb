import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { ImagePlus, Loader2, X } from 'lucide-react'
import * as z from 'zod'
import type { LocationSummary } from '@/lib/queries/useLocations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { StarInput } from '@/components/ui/stars'
import { useCreateReview } from '@/lib/mutations/useCreateReview'

const pictureUrl = z.url('Enter a full image URL, starting with https://')

/**
 * The whole review, on one screen.
 *
 * This replaces a six step wizard that spread four fields across five pages
 * and wrote a row at every step, so an abandoned review left a scoreless
 * record behind. One submit, one transaction.
 */
export function ReviewForm({ location }: { location: LocationSummary }) {
  const navigate = useNavigate()
  const createReview = useCreateReview()

  const [value, setValue] = useState(0)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [pictures, setPictures] = useState<Array<string>>([])
  const [draft, setDraft] = useState('')
  const [pictureError, setPictureError] = useState<string | null>(null)
  const [touched, setTouched] = useState(false)

  const titleError = title.trim() === '' ? 'Give your review a title' : null
  const valueError = value === 0 ? 'Pick a rating' : null
  const canSubmit = !titleError && !valueError && !createReview.isPending

  function addPicture() {
    const parsed = pictureUrl.safeParse(draft.trim())
    if (!parsed.success) {
      setPictureError(parsed.error.issues[0].message)
      return
    }
    setPictures([...pictures, parsed.data])
    setDraft('')
    setPictureError(null)
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    setTouched(true)
    if (!canSubmit) return

    await createReview.mutateAsync({
      locationId: location.id,
      title: title.trim(),
      text: text.trim() || null,
      value,
      pictures,
    })
    await navigate({ to: '/locations/$slug', params: { slug: location.slug } })
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      <fieldset className="space-y-2">
        <Label className="text-base">How was it?</Label>
        <StarInput
          value={value}
          onChange={setValue}
          disabled={createReview.isPending}
        />
        {touched && valueError && (
          <p className="text-destructive text-sm">{valueError}</p>
        )}
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          placeholder="Rich tonkotsu, worth the queue"
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setTouched(true)}
        />
        {touched && titleError && (
          <p className="text-destructive text-sm">{titleError}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="text">
          Your review <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id="text"
          rows={6}
          value={text}
          placeholder="The broth, the noodles, the queue, the price."
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="picture">
          Photos <span className="text-muted-foreground">(optional)</span>
        </Label>
        <div className="flex gap-2">
          <Input
            id="picture"
            type="url"
            placeholder="https://example.com/ramen.jpg"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                addPicture()
              }
            }}
          />
          <Button
            type="button"
            variant="secondary"
            onClick={addPicture}
            disabled={draft.trim() === '' || pictures.length >= 8}
          >
            <ImagePlus className="h-4 w-4" />
            Add
          </Button>
        </div>
        {pictureError && (
          <p className="text-destructive text-sm">{pictureError}</p>
        )}
        {pictures.length > 0 && (
          <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
            {pictures.map((url, i) => (
              <li key={url} className="group relative">
                <img
                  src={url}
                  alt={`Photo ${i + 1}`}
                  className="ring-border aspect-square w-full rounded-lg object-cover ring-1"
                />
                <button
                  type="button"
                  aria-label={`Remove photo ${i + 1}`}
                  onClick={() => setPictures(pictures.filter((p) => p !== url))}
                  className="bg-background/90 ring-border absolute top-1.5 right-1.5 rounded-full p-1 opacity-0 ring-1 transition group-hover:opacity-100 focus-visible:opacity-100"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {createReview.isError && (
        <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm">
          Could not post your review: {createReview.error.message}
        </p>
      )}

      <div className="flex items-center gap-3 border-t pt-6">
        <Button type="submit" size="lg" disabled={!canSubmit}>
          {createReview.isPending && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}
          {createReview.isPending ? 'Posting…' : 'Post review'}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() =>
            navigate({
              to: '/locations/$slug',
              params: { slug: location.slug },
            })
          }
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
