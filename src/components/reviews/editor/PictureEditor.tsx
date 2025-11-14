import type { ReviewPicture } from '@prisma/client'
import { Button } from '@/components/ui/button'

interface Props {
  pictures: Array<ReviewPicture>
  onChange: (pics: Array<ReviewPicture>) => void
}

export function PictureEditor({ pictures, onChange }: Props) {
  const addPicture = () => onChange([...pictures, { id: crypto.randomUUID(), reviewId: '', url: '', caption: '', createdAt: new Date() }])
  const updatePicture = (index: number, data: Partial<ReviewPicture>) =>
    onChange(pictures.map((p, i) => (i === index ? { ...p, ...data } : p)))
  const removePicture = (index: number) => onChange(pictures.filter((_, i) => i !== index))

  return (
    <div className="space-y-2">
      <h2 className="font-semibold">Pictures</h2>
      {pictures.map((pic, i) => (
        <div key={pic.id} className="flex items-center space-x-2">
          <input
            className="input input-bordered flex-1"
            placeholder="URL"
            value={pic.url}
            onChange={e => updatePicture(i, { url: e.target.value })}
          />
          <input
            className="input input-bordered flex-1"
            placeholder="Caption"
            value={pic.caption || ''}
            onChange={e => updatePicture(i, { caption: e.target.value })}
          />
          <Button variant="destructive" size="sm" onClick={() => removePicture(i)}>
            Remove
          </Button>
        </div>
      ))}
      <Button size="sm" onClick={addPicture}>
        Add Picture
      </Button>
    </div>
  )
}
