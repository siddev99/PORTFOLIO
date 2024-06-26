import Link from 'next/link'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/settings">Settings Page</Link>
        <Link href="/dashboard/users">Users</Link>
      </nav>
      <div>{children}</div>
    </>
  )
}