import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

/**
 * The last resort for an error no route handled.
 *
 * Without this, TanStack Router logs "The following error wasn't caught by
 * any route" and the page goes blank, so a fault in one component takes the
 * whole screen with it.
 */
export function RouteError({ error }: { error: Error }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="text-muted-foreground max-w-md text-sm">{error.message}</p>
      <div className="flex gap-3">
        <Button onClick={() => window.location.reload()}>Reload</Button>
        <Button asChild variant="outline">
          <Link to="/">Back to the map</Link>
        </Button>
      </div>
    </div>
  )
}

export function RouteNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-semibold">Not found</h1>
      <p className="text-muted-foreground text-sm">
        There is nothing at this address.
      </p>
      <Button asChild>
        <Link to="/">Back to the map</Link>
      </Button>
    </div>
  )
}
