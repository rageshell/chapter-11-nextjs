import Link from "next/link"

// Our hardcoded orders — same idea as menuItems on the previous page
const recentOrders = [
  {
    id: "ORD-001",
    status: "ready",
    items: ["Barramundi", "Chips"],
  },
  {
    id: "ORD-002",
    status: "preparing",
    items: ["Beef Cheek", "Burrata", "Sticky Date Pudding"],
  },
  {
    id: "ORD-003",
    status: "pending",
    items: ["Sticky Date Pudding"],
  },
]

// Maps each status to a Tailwind colour — one lookup, used in the render below
const statusColour: Record<string, string> = {
  ready:     "bg-green-700 text-green-100",
  preparing: "bg-amber-700 text-amber-100",
  pending:   "bg-gray-700 text-gray-200",
}

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">

      {/* Back link — same pattern as /menu */}
      <Link href="/" className="text-amber-500 hover:underline text-sm">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-8">Recent Orders</h1>

      <ul className="flex flex-col gap-4">
        {recentOrders.map(order => (
          <li key={order.id} className="bg-gray-900 rounded-xl p-4">

            {/* Top row — order ID on the left, status badge on the right */}
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold">{order.id}</p>

              {/* Status badge — colour comes from the lookup object above */}
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColour[order.status]}`}>
                {order.status}
              </span>
            </div>

            {/* Items list — joined into a single string for simplicity */}
            <p className="text-sm text-gray-400">{order.items.join(", ")}</p>

          </li>
        ))}
      </ul>

    </main>
  )
}