"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddItemPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) router.push("/login");
    else setIsLoggedIn(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://nextjs-items-app-server.vercel.app/items",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image }),
      },
    );
    const data = await res.json();
    toast.success("Item added successfully!");
    router.push("/items");
  };

  if (!isLoggedIn) return null;

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full rounded"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full rounded"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Add Item
        </button>
      </form>
    </div>
  );
}
