import { createFileRoute } from '@tanstack/react-router'
import { getSignInUrl, signOut } from '@/lib/workos/server-functions'
import SignInButton from '@/components/workos/signinbutton';

export const Route = createFileRoute('/')({
  component: App,
  loader: async ({ context }) => {
    const { user } = context;
    const signInUrl = await getSignInUrl();
    return { user, signInUrl };
  },
})

function App() {
  const { user, signInUrl } = Route.useLoaderData();

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700/50">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            User Profile
          </h1>

          <div className="space-y-6">
            {/* Profile Picture */}
            {user.profilePictureUrl && (
              <div className="flex justify-center">
                <img
                  src={user.profilePictureUrl}
                  alt={`Avatar of ${user.firstName} ${user.lastName}`}
                  className="w-24 h-24 rounded-full border-4 border-gray-700 shadow-lg"
                />
              </div>
            )}

            {/* User Information */}
            <div className="space-y-4">
              <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                <label className="text-gray-400 text-sm font-medium block mb-1">
                  First Name
                </label>
                <p className="text-white text-lg">{user.firstName || 'N/A'}</p>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                <label className="text-gray-400 text-sm font-medium block mb-1">
                  Last Name
                </label>
                <p className="text-white text-lg">{user.lastName || 'N/A'}</p>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                <label className="text-gray-400 text-sm font-medium block mb-1">
                  Email
                </label>
                <p className="text-white text-lg break-all">
                  {user.email || 'N/A'}
                </p>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                <label className="text-gray-400 text-sm font-medium block mb-1">
                  User ID
                </label>
                <p className="text-gray-300 text-sm font-mono break-all">
                  {user.id || 'N/A'}
                </p>
              </div>
            </div>

            {/* Sign Out Button */}
            <SignInButton user={user} url={signInUrl} large />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img
              src="/tanstack-circle-logo.png"
              alt="TanStack Logo"
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <h1 className="text-6xl md:text-7xl font-black text-white [letter-spacing:-0.08em]">
              <span className="text-gray-300">TANSTACK</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                START
              </span>
            </h1>
          </div>
          <p className="text-gray-400 text-center mb-6">
            Sign in to view your profile information
          </p>
          <SignInButton user={user} url={signInUrl} large />
        </div>
      </section>
    </div>
  )
}
