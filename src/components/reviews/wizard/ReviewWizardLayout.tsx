import { ReviewWizardHeader } from './ReviewWizardHeader'
import { ReviewWizardNav } from './ReviewWizardNav'
import type { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export function ReviewWizardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/20 p-6">
      <Card className="w-full max-w-2xl">
        <ReviewWizardHeader />
        <CardContent>
          {children}
        </CardContent>
        <ReviewWizardNav />
      </Card>
    </div>
  )
}
