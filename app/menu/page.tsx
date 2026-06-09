import Link from "next/link"

async function getMenu() {
  // Import the data directly instead of fetching from localhost
  const menu = [
    { id: "1", name: "Barramundi", price: 38, category: "Mains" },
    { id: "2", name: "Beef Cheek", price: 42, category: "Mains" },
    { id: "3", name: "Burrata", price: 22, category: "Starters" },
    { id: "4", name: "Chips", price: 12, category: "Starters" },
    { id: "5", name: "Sticky Date Pudding", price: 16, category: "Desserts" },
  ]
  return menu
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