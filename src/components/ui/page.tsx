import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** One container width and one vertical rhythm for every page. */
export function Page({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <main
      className={cn('mx-auto w-full max-w-5xl px-4 py-8 sm:px-6', className)}
    >
      {children}
    </main>
  )
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string
  description?: string
  actions?: ReactNode
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
  )
}

/** Shown instead of a bare "no results", so an empty page still guides. */
export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="border-border/60 flex flex-col items-center gap-3 rounded-xl border border-dashed px-6 py-16 text-center">
      {icon && <div className="text-muted-foreground/50">{icon}</div>}
      <h2 className="text-lg font-medium">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-sm text-sm">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('bg-muted animate-pulse rounded-md', className)} />
}
