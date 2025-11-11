import { useAtom } from 'jotai'
import { useNavigate } from '@tanstack/react-router'
import { REVIEW_STEPS, getStepNav } from './steps'
import { picturesAtom, reviewAtom } from '@/data/atoms/review-wizard-atoms'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function PicturesStepForm() {
  const [pictures, setPictures] = useAtom(picturesAtom)
  const [review] = useAtom(reviewAtom)
  const navigate = useNavigate();
  const step = getStepNav(REVIEW_STEPS.pictures)

  function handleAdd(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files || !review) return
    const newPics = Array.from(files).map((f) => ({
      review: {
        connect: {
          id: review.id
        }
      },
      url: URL.createObjectURL(f)
    }))
    setPictures([...pictures, ...newPics])
  }

  function handleDone() {
    navigate({ to: step.next })
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
