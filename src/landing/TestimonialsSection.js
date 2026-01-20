const testimonials = [
  { name: "Alice", text: "Amazing products! Fast delivery." },
  { name: "Bob", text: "High quality and great support." },
  { name: "Charlie", text: "I love shopping here!" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          >
            <p className="text-gray-700 mb-4">"{t.text}"</p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
