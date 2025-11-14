import { useEffect, useState } from 'react'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'

interface Props {
  selected: Array<string>
  onChange: (ids: Array<string>) => void
}

export function TagEditor({ selected, onChange }: Props) {
  const [tags, setTags] = useState<Array<{ id: string; name: string }>>([])

  useEffect(() => {
    prisma.tag.findMany().then(setTags)
  }, [])

  const toggleTag = (id: string) => {
    if (selected.includes(id)) onChange(selected.filter(t => t !== id))
    else onChange([...selected, id])
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Button
          key={tag.id}
          size="sm"
          variant={selected.includes(tag.id) ? 'default' : 'outline'}
          onClick={() => toggleTag(tag.id)}
        >
          {tag.name}
        </Button>
      ))}
    </div>
  )
}
