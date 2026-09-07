// components/location/LocationCardPictures.tsx

import type { LocationPicturePureType } from 'prisma/generated/schemas'

interface Props {
  pictures: Array<LocationPicturePureType>
}

export function LocationCardPictures({ pictures }: Props) {
  if (pictures.length === 0) return null

  return (
    <div className="relative">
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none">
        {pictures.map((pic, i) => (
          <div
            key={i}
            className="min-w-full h-48 md:h-56 snap-start shrink-0 relative"
          >
            <img
              src={pic.url || ''}
              alt={pic.caption ?? ''}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
