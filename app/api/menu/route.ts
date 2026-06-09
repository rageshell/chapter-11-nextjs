import { NextResponse } from "next/server"

// This is a Server-side function — it never runs in the browser
export async function GET() {
  const menu = [
    { id: "1", name: "Barramundi", price: 38, category: "Mains" },
    { id: "2", name: "Beef Cheek", price: 42, category: "Mains" },
    { id: "3", name: "Burrata", price: 22, category: "Starters" },
    { id: "4", name: "Chips", price: 12, category: "Starters" },
    { id: "5", name: "Sticky Date Pudding", price: 16, category: "Desserts" },
  ]

  // NextResponse.json() wraps the data in a proper HTTP response
  return NextResponse.json(menu)
}