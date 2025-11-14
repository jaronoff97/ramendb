// components/location/LocationCardTags.tsx

import { Badge } from '@/components/ui/badge'

interface Props {
  tags: Array<any>
}

export function LocationCardTags({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t, i) => (
        <Badge key={i} variant="secondary">
          {t.tag?.name ?? t.name ?? 'Tag'}
        </Badge>
      ))}
    </div>
  )
}
