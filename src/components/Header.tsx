import { Link } from '@tanstack/react-router'
import { Map, PenLine, UserRound } from 'lucide-react'
import type { User } from '@workos-inc/node'
import { Button } from '@/components/ui/button'

const NAV = [
  { to: '/', label: 'Map', icon: Map },
  { to: '/reviews', label: 'Reviews', icon: PenLine },
] as const

/**
 * One bar, links inline.
 *
 * Two links behind a hamburger drawer hid the whole product. One of them said
 * "Posts".
 */
export default function Header({
  user,
  signInUrl,
}: {
  user: User | null
  signInUrl: string
}) {
  return (
    <header className="bg-background/85 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-[1000] w-full border-b backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src="/ramendb-logo.svg" alt="RamenDB" className="h-7" />
        </Link>

        <nav className="flex items-center gap-1">
          {NAV.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
              activeProps={{ className: 'bg-accent text-foreground' }}
              activeOptions={{ exact: to === '/' }}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {user ? (
            <>
              <Button asChild size="sm">
                <Link to="/reviews/new">
                  <PenLine className="h-4 w-4" />
                  <span className="hidden sm:inline">Write a review</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                aria-label="Your account"
              >
                <Link to="/account">
                  {user.profilePictureUrl ? (
                    <img
                      src={user.profilePictureUrl}
                      alt=""
                      className="h-6 w-6 rounded-full object-cover"
                    />
                  ) : (
                    <UserRound className="h-4 w-4" />
                  )}
                </Link>
              </Button>
            </>
          ) : (
            <Button asChild size="sm">
              <a href={signInUrl}>Sign in</a>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
