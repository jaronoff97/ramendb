import { Link, createFileRoute } from '@tanstack/react-router'
import { LogOut, Mail, UserRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Page, PageHeader } from '@/components/ui/page'

export const Route = createFileRoute('/_authenticated/account')({
  // `_authenticated` redirects anyone without a session, so `user` is always
  // set here.
  loader: ({ context }) => ({ user: context.user }),
  component: AccountComponent,
})

function AccountComponent() {
  const { user } = Route.useLoaderData()
  if (!user) return null

  const name = [user.firstName, user.lastName].filter(Boolean).join(' ')

  return (
    <Page className="max-w-xl">
      <PageHeader title="Your account" />

      <Card>
        <CardContent className="space-y-6 pt-6">
          <div className="flex items-center gap-4">
            {user.profilePictureUrl ? (
              <img
                src={user.profilePictureUrl}
                alt=""
                className="ring-border h-16 w-16 rounded-full object-cover ring-1"
              />
            ) : (
              <span className="bg-muted text-muted-foreground flex h-16 w-16 items-center justify-center rounded-full">
                <UserRound className="h-7 w-7" />
              </span>
            )}
            <div className="min-w-0">
              <p className="truncate text-lg font-medium">
                {name || 'Anonymous'}
              </p>
              <p className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <Mail className="h-3.5 w-3.5" />
                <span className="truncate">{user.email}</span>
              </p>
            </div>
          </div>

          <div className="flex gap-3 border-t pt-6">
            <Button asChild variant="outline">
              <Link to="/reviews">Your reviews</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/logout">
                <LogOut className="h-4 w-4" />
                Sign out
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Page>
  )
}
