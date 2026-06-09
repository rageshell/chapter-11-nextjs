import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">The Anchor Arms</h1>
      <p className="text-gray-400">Voice ordering — coming soon.</p>
      <nav className="flex gap-4">
        <Link href="/menu" className="px-4 py-2 bg-amber-600 rounded-lg hover:bg-amber-700">
          Menu
        </Link>
        <Link href="/orders" className="px-4 py-2 border border-gray-600 rounded-lg hover:border-gray-400">
          Orders
        </Link>
      </nav>
    </main>
  )
}