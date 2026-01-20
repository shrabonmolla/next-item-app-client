export default function NewsletterSection() {
  return (
    <section className="py-16 px-6 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6 text-gray-300">
        Get updates on new items and special offers.
      </p>
      <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded w-full md:w-auto flex-1"
        />
        <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition font-semibold">
          Subscribe
        </button>
      </form>
    </section>
  );
}
