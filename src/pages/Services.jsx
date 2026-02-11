import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "High-performance, responsive business websites.",
      icon: "💻",
    },
    {
      title: "Mobile App Development",
      desc: "Android & iOS apps with modern UI/UX.",
      icon: "📱",
    },
    {
      title: "SEO & Digital Marketing",
      desc: "Improve Google ranking and online visibility.",
      icon: "📈",
    },
    {
      title: "Cloud Hosting",
      desc: "Secure and scalable cloud deployment.",
      icon: "☁️",
    },
    {
      title: "UI / UX Design",
      desc: "User-focused designs for better engagement.",
      icon: "🎨",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Custom online stores with payment integration.",
      icon: "🛒",
    },
    {
      title: "Maintenance & Support",
      desc: "24/7 technical support and updates.",
      icon: "🛠️",
    },
    {
      title: "Cyber Security",
      desc: "Protect systems from digital threats.",
      icon: "🔐",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-600 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Professional Services
        </h1>

        <p className="max-w-2xl mx-auto opacity-90 text-lg">
          We provide end-to-end digital solutions to grow your business
          in the modern digital world.
        </p>
      </section>


      {/* SERVICES */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, i) => (

            <div
              key={i}
              className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 group"
            >

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5">
                {service.desc}
              </p>

              <Link
                to="/contact"
                className="text-blue-600 font-medium hover:underline"
              >
                Get Started →
              </Link>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>

        <p className="opacity-90 max-w-xl mx-auto mb-6">
          Contact our team today and let’s build something amazing together.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Get Free Consultation
        </Link>

      </section>

    </div>
  );
}

export default Services;
