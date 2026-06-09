import Link from "next/link"

// This component is async — it's a Server Component fetching data
async function getMenu() {
  // In Next.js, you can fetch your own API routes on the server
  // We use the full URL here because server-side fetch needs it
  const res = await fetch("http://localhost:3000/api/menu")
  return res.json()
}

export default async function MenuPage() {
  const menuItems = await getMenu()  // waits for data before rendering

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <Link href="/" className="text-amber-500 hover:underline text-sm">
        ← Back
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-8">Menu</h1>
      <ul className="flex flex-col gap-4">
        {menuItems.map((item: { id: string; name: string; price: number; category: string }) => (
          <li key={item.id} className="bg-gray-900 rounded-xl p-4 flex justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-400">{item.category}</p>
            </div>
            <p className="text-amber-400 font-bold">${item.price}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}