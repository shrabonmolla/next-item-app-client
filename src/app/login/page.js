"use client";
import { useState } from "react";
import { loginUser } from "../lib/auth";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = loginUser(email, password);

    if (success) {
      Cookies.set("token", "loggedin");
      window.location.href = "/items";
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-white p-6 shadow rounded w-80 space-y-4">
        <h2 className="text-xl font-bold">Login</h2>

        <input
          className="border p-2 w-full"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}
