import { useState } from "react";
import CategorySection from "../components/CategorySection";
import { Link } from "react-router-dom";

function Home() {

  /* ================= SEARCH ================= */
  const [search, setSearch] = useState("");


  /* ================= DATA ================= */

  const healthcare = [
    {
      heading: "Medical Devices",
      items: [
        { name: "Respiratory", link: "/healthcare/respiratory" },
        { name: "Medical Imaging", link: "#" },
        { name: "Syringes", link: "#" },
        { name: "Surgical Tools", link: "#" },
      ],
    },

    {
      heading: "Biotechnology",
      items: [
        { name: "Genomics", link: "#" },
        { name: "Stem Cells", link: "#" },
        { name: "Lab Equipment", link: "#" },
      ],
    },

    {
      heading: "Healthcare Services",
      items: [
        { name: "Dental", link: "#" },
        { name: "Optical", link: "#" },
        { name: "Wound Care", link: "#" },
      ],
    },

    {
      heading: "Diagnostics",
      items: [
        { name: "IVD", link: "#" },
        { name: "Lab Testing", link: "#" },
        { name: "Disease Testing", link: "#" },
      ],
    },
  ];


  const pharma = [
    {
      heading: "Ingredients",
      items: [
        { name: "API", link: "#" },
        { name: "Excipients", link: "#" },
        { name: "Bulk Drugs", link: "#" },
      ],
    },

    {
      heading: "Formulations",
      items: [
        { name: "Tablets", link: "#" },
        { name: "Capsules", link: "#" },
        { name: "Injectables", link: "#" },
      ],
    },

    {
      heading: "Manufacturing",
      items: [
        { name: "Contract Manufacturing", link: "#" },
        { name: "Packaging", link: "#" },
      ],
    },

    {
      heading: "Testing",
      items: [
        { name: "Clinical Trials", link: "#" },
        { name: "Stability Testing", link: "#" },
      ],
    },
  ];


  const manufacturing = [
    {
      heading: "Machinery",
      items: [
        { name: "CNC Machines", link: "#" },
        { name: "Industrial Automation", link: "#" },
      ],
    },

    {
      heading: "Components",
      items: [
        { name: "Electric Motors", link: "#" },
        { name: "Bearings", link: "#" },
      ],
    },

    {
      heading: "Fabrication",
      items: [
        { name: "Welding", link: "#" },
        { name: "Casting", link: "#" },
      ],
    },

    {
      heading: "Quality",
      items: [
        { name: "Inspection", link: "#" },
        { name: "Calibration", link: "#" },
      ],
    },
  ];


  const energy = [
    {
      heading: "Renewable Energy",
      items: [
        { name: "Solar Power", link: "#" },
        { name: "Wind Energy", link: "#" },
      ],
    },

    {
      heading: "Power Systems",
      items: [
        { name: "UPS Systems", link: "#" },
        { name: "Inverters", link: "#" },
      ],
    },

    {
      heading: "Oil & Gas",
      items: [
        { name: "Refineries", link: "#" },
        { name: "Pipelines", link: "#" },
      ],
    },

    {
      heading: "Utilities",
      items: [
        { name: "Smart Grid", link: "#" },
        { name: "Power Meters", link: "#" },
      ],
    },
  ];


  const it = [
    {
      heading: "Software",
      items: [
        { name: "Web Applications", link: "#" },
        { name: "ERP Systems", link: "#" },
      ],
    },

    {
      heading: "Cloud",
      items: [
        { name: "AWS", link: "#" },
        { name: "Azure", link: "#" },
      ],
    },

    {
      heading: "Security",
      items: [
        { name: "Cyber Security", link: "#" },
        { name: "Firewalls", link: "#" },
      ],
    },

    {
      heading: "Support",
      items: [
        { name: "IT Support", link: "#" },
        { name: "Consulting", link: "#" },
      ],
    },
  ];


  /* ================= SEARCH DATA ================= */

  const allItems = [
    ...healthcare.flatMap(s => s.items),
    ...pharma.flatMap(s => s.items),
    ...manufacturing.flatMap(s => s.items),
    ...energy.flatMap(s => s.items),
    ...it.flatMap(s => s.items),
  ];

  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );


  /* ================= PAGE ================= */

  return (
    <div className="bg-white">


      {/* HEADER + SEARCH */}
      <section className="bg-gray-50 border-b">

        <div className="max-w-7xl mx-auto px-6 py-14 text-center">

          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Industry & Business Directory
          </h1>

          <p className="text-gray-600 mb-6">
            Find companies and suppliers across major industries.
          </p>

          <input
            type="text"
            placeholder="Search companies, services, categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

      </section>



      {/* SEARCH RESULTS */}
      {search && (

        <section className="py-10">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Search Results
            </h2>

            {filteredItems.length === 0 ? (

              <p className="text-gray-500">
                No results found.
              </p>

            ) : (

              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {filteredItems.map((item, i) => (

                  <li
                    key={i}
                    className="border p-4 rounded hover:shadow"
                  >
                    <a
                      href={item.link}
                      className="text-blue-600 font-medium"
                    >
                      {item.name}
                    </a>
                  </li>

                ))}

              </ul>

            )}

          </div>

        </section>
      )}



      {/* DIRECTORY SECTIONS */}

      <Directory title="Healthcare" link="/healthcare" data={healthcare} />

      <Directory title="Pharmaceutical" link="/pharma" data={pharma} />

      <Directory title="Manufacturing" link="/manufacturing" data={manufacturing} />

      <Directory title="Energy & Power" link="/energy" data={energy} />

      <Directory title="IT & Software" link="/it" data={it} />



      {/* CTA */}
      <section className="bg-gray-50 border-t py-12 text-center">

        <h2 className="text-2xl font-semibold mb-3">
          Want Your Company Listed?
        </h2>

        <Link
          to="/contact"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Contact Us
        </Link>

      </section>

    </div>
  );
}


/* ================= REUSABLE SECTION ================= */

function Directory({ title, link, data }) {

  return (
    <section className="py-16 border-b">

      <div className="max-w-7xl mx-auto px-6">


        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-semibold text-blue-700">
            {title}
          </h2>

          <Link
            to={link}
            className="text-blue-600 text-sm hover:underline"
          >
            View All →
          </Link>

        </div>


        <div className="border rounded-lg p-6">

          <CategorySection
            title=""
            viewLink={link}
            data={data}
          />

        </div>

      </div>

    </section>
  );
}

export default Home;
