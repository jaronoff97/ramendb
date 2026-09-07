// components/location/LocationCard.tsx
import { MapPinIcon } from 'lucide-react'

import { LocationCardHeader } from './LocationCardHeader'
import { LocationCardPictures } from './LocationCardPictures'
import { LocationCardTags } from './LocationCardTags'
import type {
  LocationPicturePureType,
  LocationPureType,
} from 'prisma/generated/schemas'

import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'

interface Props {
  location: LocationPureType
  className?: string
  actions?: React.ReactNode
  footer?: React.ReactNode
}

export function LocationCard({ location, actions, footer, className }: Props) {
  const { address, city, state, country, pictures, tags } = location

  const fullAddress = [address, city, state, country].filter(Boolean).join(', ')

  return (
    <Card className={cn('overflow-hidden', className)}>
      <LocationCardHeader location={location} actions={actions} />

      <Separator />

      {pictures && pictures.length > 0 && (
        <LocationCardPictures
          pictures={pictures as Array<LocationPicturePureType>}
        />
      )}

      <CardContent className="pt-4 space-y-4">
        {fullAddress && (
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPinIcon className="h-4 w-4 mt-0.5" />
            <span>{fullAddress}</span>
          </div>
        )}

        {tags && tags.length > 0 && <LocationCardTags tags={tags} />}

        {footer && <div className="pt-2">{footer}</div>}
      </CardContent>
    </Card>
  )
}
