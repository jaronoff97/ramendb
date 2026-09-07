import { useState } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import * as z from 'zod'
import { useWizard } from './useWizard'
import { picturesAtom, reviewIdAtom } from '@/data/atoms/review-wizard-atoms'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUploadPictures } from '@/lib/mutations/useUploadPictures'

const urlSchema = z.url('Enter a full image URL, starting with https://')

/**
 * Collects picture URLs and attaches them to the review.
 *
 * This step used to take files and store `URL.createObjectURL(file)`, a `blob:`
 * URL that only exists in the tab that made it. Nothing uploaded, and every
 * saved picture was a dead link. There is no object store to upload to, so the
 * step asks for a URL that already works.
 */
export function PicturesStepForm() {
  const [pictures, setPictures] = useAtom(picturesAtom)
  const reviewId = useAtomValue(reviewIdAtom)
  const upload = useUploadPictures()
  const { goNext } = useWizard()

  const [draft, setDraft] = useState('')
  const [error, setError] = useState<string | null>(null)

  function addPicture() {
    const parsed = urlSchema.safeParse(draft.trim())
    if (!parsed.success) {
      setError(parsed.error.issues[0].message)
      return
    }
    setPictures([...pictures, { url: parsed.data }])
    setDraft('')
    setError(null)
  }

  function removePicture(index: number) {
    setPictures(pictures.filter((_, i) => i !== index))
  }

  async function save() {
    if (reviewId && pictures.length > 0) {
      await upload.mutateAsync(pictures.map((p) => ({ ...p, reviewId })))
    }
    goNext()
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="picture-url">Picture URL</Label>
        <div className="flex gap-2">
          <Input
            id="picture-url"
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
            onClick={addPicture}
            disabled={draft.trim() === ''}
          >
            Add
          </Button>
        </div>
        {error && <p className="text-destructive text-sm">{error}</p>}
      </div>

      {pictures.length > 0 && (
        <ul className="grid grid-cols-3 gap-2">
          {pictures.map((pic, i) => (
            <li key={pic.url} className="relative">
              <img
                src={pic.url}
                alt={pic.caption ?? `Picture ${i + 1}`}
                className="rounded-md object-cover aspect-square w-full"
              />
              <Button
                type="button"
                size="sm"
                variant="destructive"
                className="absolute top-1 right-1"
                onClick={() => removePicture(i)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}

      {upload.isError && (
        <p className="text-destructive text-sm">
          Could not save the pictures: {upload.error.message}
        </p>
      )}

      <Button
        type="button"
        onClick={() => void save()}
        disabled={upload.isPending}
      >
        {upload.isPending
          ? 'Saving…'
          : pictures.length > 0
            ? 'Save Pictures'
            : 'Skip'}
      </Button>
    </div>
  )
}
