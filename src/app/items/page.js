async function getItems() {
  const res = await fetch("https://nextjs-items-app-server.vercel.app/items", {
    cache: "no-store",
  });
  return res.json();
}
import Link from "next/link";

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow">
          <img src={item.image} className="w-full h-40 object-cover" />
          <h2 className="text-xl font-bold mt-2">{item.name}</h2>
          <p>{item.description}</p>
          <p className="font-bold">${item.price}</p>
          <Link href={`/items/${item.id}`} className="text-blue-600 underline">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
