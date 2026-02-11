import CategorySection from "../../components/CategorySection";

function IT() {

  const data = [
    {
      heading: "Software Development",
      items: [
        { name: "Web Applications", link: "#" },
        { name: "Mobile Applications", link: "#" },
        { name: "Enterprise Software", link: "#" },
        { name: "Custom Solutions", link: "#" },
      ],
    },

    {
      heading: "Cloud Services",
      items: [
        { name: "AWS Solutions", link: "#" },
        { name: "Microsoft Azure", link: "#" },
        { name: "DevOps Services", link: "#" },
        { name: "Cloud Hosting", link: "#" },
      ],
    },

    {
      heading: "Cyber Security",
      items: [
        { name: "Network Security", link: "#" },
        { name: "Penetration Testing", link: "#" },
        { name: "Data Protection", link: "#" },
        { name: "Security Audits", link: "#" },
      ],
    },

    {
      heading: "IT Support & Consulting",
      items: [
        { name: "Managed IT Services", link: "#" },
        { name: "Technical Support", link: "#" },
        { name: "System Integration", link: "#" },
        { name: "IT Consulting", link: "#" },
      ],
    },
  ];

  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-3xl font-bold text-blue-700 mb-2">
            IT & Software Industry
          </h1>

          <p className="text-gray-600">
            Directory of IT companies and digital service providers.
          </p>

        </div>
      </section>


      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <CategorySection
            title=""
            viewLink="/it"
            data={data}
          />

        </div>
      </section>

    </div>
  );
}

export default IT;
