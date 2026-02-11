import CategorySection from "../../components/CategorySection";

function Manufacturing() {

  const data = [
    {
      heading: "Machinery & Equipment",
      items: [
        { name: "CNC Machines", link: "#" },
        { name: "Robotics Systems", link: "#" },
        { name: "Industrial Automation", link: "#" },
        { name: "Hydraulic Machines", link: "#" },
      ],
    },

    {
      heading: "Components",
      items: [
        { name: "Electric Motors", link: "#" },
        { name: "Bearings", link: "#" },
        { name: "Gear Systems", link: "#" },
        { name: "Valves & Pumps", link: "#" },
      ],
    },

    {
      heading: "Fabrication & Processing",
      items: [
        { name: "Welding Services", link: "#" },
        { name: "Casting & Forging", link: "#" },
        { name: "Sheet Metal Works", link: "#" },
        { name: "Surface Treatment", link: "#" },
      ],
    },

    {
      heading: "Quality & Testing",
      items: [
        { name: "Material Testing", link: "#" },
        { name: "Calibration", link: "#" },
        { name: "Inspection Services", link: "#" },
        { name: "ISO Certification", link: "#" },
      ],
    },
  ];

  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-3xl font-bold text-blue-700 mb-2">
            Manufacturing Industry
          </h1>

          <p className="text-gray-600">
            Complete directory of manufacturing companies and suppliers.
          </p>

        </div>
      </section>


      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <CategorySection
            title=""
            viewLink="/manufacturing"
            data={data}
          />

        </div>
      </section>

    </div>
  );
}

export default Manufacturing;
