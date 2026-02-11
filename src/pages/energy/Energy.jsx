import CategorySection from "../../components/CategorySection";

function Energy() {

  const data = [
    {
      heading: "Renewable Energy",
      items: [
        { name: "Solar Power Systems", link: "#" },
        { name: "Wind Energy Solutions", link: "#" },
        { name: "Hydroelectric Plants", link: "#" },
        { name: "Biogas Plants", link: "#" },
      ],
    },

    {
      heading: "Power Systems",
      items: [
        { name: "Generators", link: "#" },
        { name: "Transformers", link: "#" },
        { name: "UPS Systems", link: "#" },
        { name: "Inverter Solutions", link: "#" },
      ],
    },

    {
      heading: "Oil & Gas",
      items: [
        { name: "Refineries", link: "#" },
        { name: "Pipeline Systems", link: "#" },
        { name: "Fuel Storage", link: "#" },
        { name: "Gas Distribution", link: "#" },
      ],
    },

    {
      heading: "Utilities & Grid",
      items: [
        { name: "Smart Grid", link: "#" },
        { name: "Power Meters", link: "#" },
        { name: "Substations", link: "#" },
        { name: "Energy Monitoring", link: "#" },
      ],
    },
  ];

  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-3xl font-bold text-blue-700 mb-2">
            Energy & Power Industry
          </h1>

          <p className="text-gray-600">
            Directory of energy companies and power solution providers.
          </p>

        </div>
      </section>


      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <CategorySection
            title=""
            viewLink="/energy"
            data={data}
          />

        </div>
      </section>

    </div>
  );
}

export default Energy;
