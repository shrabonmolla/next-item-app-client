"use client";

import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

export default function NavbarWrapper() {
  return (
    <>
      <Navbar />
      <Toaster />
    </>
  );
}
