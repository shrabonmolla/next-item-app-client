"use client";
import HeroSection from "../landing/HeroSection";
import FeaturesSection from "../landing/FeaturesSection";
import AboutSection from "../landing/AboutSection";
import ItemsPreviewSection from "../landing/ItemsPreviewSection";
import TestimonialsSection from "../landing/TestimonialsSection";
import NewsletterSection from "../landing/NewsletterSection";
import ContactSection from "../landing/ContactSection";
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
