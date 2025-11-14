import { useAtom } from 'jotai'
import { useWizard } from './useWizard'
import { picturesAtom, reviewIdAtom } from '@/data/atoms/review-wizard-atoms'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function PicturesStepForm() {
  const [pictures, setPictures] = useAtom(picturesAtom)
  const [reviewId] = useAtom(reviewIdAtom)
  const { goNext } = useWizard()

  function handleAdd(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files || !reviewId) return
    const newPics = Array.from(files).map((f) => ({
      review: {
        connect: {
          id: reviewId
        }
      },
      url: URL.createObjectURL(f)
    }))
    setPictures([...pictures, ...newPics])
  }

  function handleDone() {
    goNext()
  }

  return (
    <div className="space-y-4">
      <Input type="file" multiple onChange={handleAdd} />
      <div className="grid grid-cols-3 gap-2">
        {pictures.map((pic, i) => (
          <img key={i} src={pic.url} alt="preview" className="rounded-md object-cover" />
        ))}
      </div>
      <Button onClick={handleDone}>Save Pictures</Button>
    </div>
  )
}
