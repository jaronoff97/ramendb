import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'
import type { User } from '@workos-inc/node'

export default function SignInButton({
  large,
  user,
  url,
}: {
  large?: boolean
  user: User | null
  url: string
}) {
  if (user) {
    return (
      <div className="flex gap-3">
        <Button asChild size={large ? 'lg' : 'sm'}>
          <Link to="/logout">Sign Out</Link>
        </Button>
      </div>
    )
  }

  return (
    <Button asChild size={large ? 'lg' : 'sm'}>
      <a href={url}>Sign In{large && ' with AuthKit'}</a>
    </Button>
  )
}
