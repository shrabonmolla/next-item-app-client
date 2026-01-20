export default function HeroSection() {
  return (
    <section className=" bg-black text-white py-20 px-6 text-center md:text-left">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MyStore
          </h1>
          <p className="mb-6 text-gray-300">
            Find the best items at the best prices. Shop easily and quickly.
          </p>
          <a
            href="/items"
            className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>

        {/* Image Section */}
        <div className="relative w-full  md:h-96">
          <img
            src="https://img.freepik.com/free-vector/welcome-back-we-are-open-shop_23-2148546376.jpg?semt=ais_hybrid&w=740&q=80"
            alt="About"
            className="rounded shadow-lg l w-70 mx-auto text-center"
          />
        </div>
      </div>
    </section>
  );
}
