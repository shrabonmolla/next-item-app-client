export default function FeaturesSection() {
  const features = [
    "Fast Delivery",
    "High Quality Products",
    "Secure Payment",
    "24/7 Support",
  ];

  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-2">{f}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
