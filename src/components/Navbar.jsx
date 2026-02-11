import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          RISHABHinfo
        </h1>

        {/* Menu */}
        <ul className="flex space-x-6 font-medium relative">

          {/* HOME */}
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          {/* HEALTHCARE */}
          <li
            onMouseEnter={() => setOpenMenu("healthcare")}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative"
          >
            <span className="cursor-pointer hover:text-blue-600">
              Healthcare
            </span>

            {openMenu === "healthcare" && (
              <MegaMenu />
            )}
          </li>

          {/* SERVICES */}
          <li>
            <Link to="/services" className="hover:text-blue-600">
              Services
            </Link>
          </li>

          {/* ABOUT */}
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>

          {/* CONTACT */}
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

/* Mega Menu Component */
function MegaMenu() {
  return (
    <div className="absolute left-0 top-10 w-[800px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-4 gap-6">

      {/* Column 1 */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">
          Medical Devices
        </h3>

        <ul className="space-y-2 text-sm text-gray-600">
          <li><Link to="/healthcare/respiratory">Respiratory</Link></li>
          <li><Link to="/healthcare/imaging">Medical Imaging</Link></li>
          <li><Link to="/healthcare/syringes">Syringes</Link></li>
          <li><Link to="/healthcare/surgical">Surgical</Link></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">
          Biotechnology
        </h3>

        <ul className="space-y-2 text-sm text-gray-600">
          <li>Genomics</li>
          <li>Stem Cells</li>
          <li>Biomaterials</li>
          <li>Lab Equipment</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">
          Healthcare Services
        </h3>

        <ul className="space-y-2 text-sm text-gray-600">
          <li>Optical</li>
          <li>Dental</li>
          <li>Surgery</li>
          <li>Wound Care</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">
          Diagnostics
        </h3>

        <ul className="space-y-2 text-sm text-gray-600">
          <li>IVD</li>
          <li>Molecular</li>
          <li>Disease Testing</li>
          <li>Lab Testing</li>
        </ul>
      </div>

    </div>
  );
}
