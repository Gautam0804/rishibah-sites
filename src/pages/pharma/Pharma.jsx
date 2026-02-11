import CategorySection from "../../components/CategorySection";

function Pharma() {

  const data = [
    {
      heading: "Main Categories",
      items: [
        { name: "API", link: "#" },
        { name: "Formulations", link: "#" },
        { name: "Packaging", link: "#" },
        { name: "Testing", link: "#" },
      ],
    },
  ];

  return (
    <div className="bg-white">

      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-3xl font-bold text-blue-700">
            Pharmaceutical Industry
          </h1>

          <p className="text-gray-600">
            Complete pharmaceutical suppliers directory.
          </p>

        </div>
      </section>


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <CategorySection
            title=""
            viewLink="/pharma"
            data={data}
          />

        </div>
      </section>

    </div>
  );
}

export default Pharma;
