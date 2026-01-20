export default function AboutSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/welcome-back-we-are-open-shop_23-2148546376.jpg?semt=ais_hybrid&w=740&q=80"
          alt="About"
          className="rounded shadow-lg w-full"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">About MyStore</h2>
        <p className="text-gray-700 mb-4">
          MyStore is dedicated to providing the best shopping experience with
          high quality products and fast delivery.
        </p>
        <p className="text-gray-700">
          Our mission is to make shopping easier, faster, and secure for
          everyone.
        </p>
      </div>
    </section>
  );
}
