import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Loader2 } from 'lucide-react'

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="container flex h-16 items-center px-4">
          <div className="font-bold">Tournament Tables Hub</div>
        </div>
      </header>
      <main className="container py-6">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default Layout 