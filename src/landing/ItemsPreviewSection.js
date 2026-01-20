import Link from "next/link";

export default function ItemsPreviewSection({ items = [] }) {
  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Popular Items</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item) => (
            <Link key={item.id} href={`/items/${item.id}`}>
              <div className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
