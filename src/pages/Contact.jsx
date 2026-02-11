import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-600 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch With Us
        </h1>

        <p className="max-w-xl mx-auto opacity-90 text-lg">
          We are here to help you with your business and digital needs.
        </p>
      </section>


      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* INFO */}
          <div>

            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Contact Information
            </h2>

            <ul className="space-y-4 text-gray-600">

              <li className="flex items-center gap-3">
                📍 <span>230, Singapore Township Phase 2, Dewas Naka, MP 453771</span>
              </li>

              <li className="flex items-center gap-3">
                📞 <span>+91 99260 37815</span>
              </li>

              <li className="flex items-center gap-3">
                ✉️ <span>info@rishabhinfo.co.in</span>
              </li>

              <li className="flex items-center gap-3">
                ⏰ <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </li>

            </ul>


            {/* MAP (Optional Placeholder) */}
            <div className="mt-8 bg-gray-200 h-56 rounded-lg flex items-center justify-center text-gray-500">
              Google Map Coming Soon
            </div>

          </div>


          {/* FORM */}
          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;
