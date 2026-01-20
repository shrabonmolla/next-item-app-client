export default function ContactSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <p>123 Street, City, Country</p>
          <h3 className="font-semibold mt-4 mb-2">Email</h3>
          <p>info@mystore.com</p>
          <h3 className="font-semibold mt-4 mb-2">Phone</h3>
          <p>+123 456 7890</p>
        </div>
        <div>
          <iframe
            className="w-full h-64 rounded"
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
