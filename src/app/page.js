"use client";
import HeroSection from "./components/landing/HeroSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import AboutSection from "./components/landing/AboutSection";
import ItemsPreviewSection from "./components/landing/ItemsPreviewSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import NewsletterSection from "./components/landing/NewsletterSection";
import ContactSection from "./components/landing/ContactSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://nextjs-items-app-server.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ItemsPreviewSection items={items} />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactSection />
    </main>
  );
}
