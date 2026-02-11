import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-600 text-white py-24 text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About RISHABHinfo
        </h1>

        <p className="max-w-2xl mx-auto opacity-90 text-lg">
          Empowering businesses with innovative digital solutions
          and reliable technology services.
        </p>

      </section>


      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>

            <h2 className="text-3xl font-semibold mb-5 text-gray-800">
              Our Story
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              RISHABHinfo was founded with the mission to help businesses
              succeed in the digital era. We specialize in web development,
              mobile applications, cloud solutions, and digital marketing.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team combines creativity, technical expertise, and
              business understanding to deliver high-quality digital
              products that drive real results.
            </p>

          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-200 h-72 rounded-xl flex items-center justify-center text-gray-500">
            Company Image
          </div>

        </div>

      </section>


      {/* MISSION & VISION */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="p-8 rounded-xl shadow bg-gray-50">

            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To deliver innovative, reliable, and scalable digital
              solutions that help our clients grow and succeed.
            </p>

          </div>

          <div className="p-8 rounded-xl shadow bg-gray-50">

            <h3 className="text-2xl font-semibold mb-3 text-purple-600">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To become a trusted global technology partner for
              businesses seeking digital transformation.
            </p>

          </div>

        </div>

      </section>


      {/* WHY US */}
      <section className="py-16 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-10 text-gray-800">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            {[
              ["Expert Team", "Skilled professionals"],
              ["Quality Work", "High standards"],
              ["On-Time Delivery", "Fast execution"],
              ["24/7 Support", "Always available"],
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >

                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  {item[0]}
                </h4>

                <p className="text-gray-600 text-sm">
                  {item[1]}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="bg-blue-900 text-white py-16">

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {[
            ["200+", "Projects"],
            ["100+", "Clients"],
            ["5+", "Years Experience"],
            ["24/7", "Support"],
          ].map((item, i) => (

            <div key={i}>
              <h3 className="text-4xl font-bold text-yellow-400">
                {item[0]}
              </h3>

              <p className="mt-2 opacity-90">
                {item[1]}
              </p>
            </div>

          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">

        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Let’s Build Something Great Together
        </h2>

        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          Get in touch with our team to discuss your next project.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>

      </section>

    </div>
  );
}

export default About;
