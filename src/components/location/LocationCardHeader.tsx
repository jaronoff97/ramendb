// components/location/LocationCardHeader.tsx

import { GlobeIcon } from "lucide-react"
import type { LocationPureType } from "prisma/generated/schemas"
import { Badge } from "@/components/ui/badge"
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  location: LocationPureType
  actions?: React.ReactNode
}

export function LocationCardHeader({ location, actions }: Props) {
  const { name, type, website } = location

  return (
    <CardHeader className="pb-3">
      <div className="flex justify-between items-start">
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>

      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
        {type && <Badge variant="outline">{type}</Badge>}

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            <GlobeIcon className="h-4 w-4" />
            Website
          </a>
        )}
      </div>

      <CardDescription className="sr-only">
        {name} – {type}
      </CardDescription>
    </CardHeader>
  )
}
