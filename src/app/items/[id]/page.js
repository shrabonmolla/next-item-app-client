"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ItemDetailsClient() {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    fetch(`https://nextjs-items-app-server.vercel.app/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-500 text-lg">Loading item details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Item Image */}
      <div className="md:w-1/2 flex justify-center">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg">
            No Image
          </div>
        )}
      </div>

      {/* Item Details */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
          <p className="text-gray-700 mb-4">{item.description}</p>
          <p className="text-2xl font-semibold mb-4 text-green-600">
            ${item.price}
          </p>
        </div>

        <div className="mt-4 flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded font-medium"
          >
            Back
          </button>

          <button
            className="px-6 py-2 bg-black text-white hover:bg-gray-800 rounded font-medium"
            onClick={() => alert("Added to cart!")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
