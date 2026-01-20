"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  // Prevent server/client mismatch
  if (isLoggedIn === null) return null;

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <Link href="/">MyStore</Link>

      <div className="space-x-4">
        <Link href="/items">Items</Link>

        {!isLoggedIn && <Link href="/login">Login</Link>}

        {isLoggedIn && (
          <>
            <Link href="/add-item">Add Item</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
