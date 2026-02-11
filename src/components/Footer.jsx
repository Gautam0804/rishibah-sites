import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">

      {/* Top Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            RISHABHinfo
          </h2>

          <p className="text-sm leading-relaxed">
            We build modern websites, apps, and digital platforms to help
            businesses grow online.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Our Services
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Website Development</li>
            <li>Mobile Apps</li>
            <li>SEO & Marketing</li>
            <li>UI/UX Design</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Contact Us
          </h3>

          <ul className="space-y-2 text-sm">
            <li>📍 India</li>
            <li>📞 +91-99260 37815</li>
            <li>✉️ info@rishabhinfo.com</li>
            <li>⏰ Mon–Sat: 9AM – 6PM</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm bg-gray-950">

        © 2026 <span className="text-yellow-400 font-semibold">
          RISHABH Info
        </span>{" "}
        | All Rights Reserved

      </div>

    </footer>
  );
}

export default Footer;
