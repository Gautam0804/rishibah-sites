import { Link } from "react-router-dom";

function CategoryLayout({ title, data, viewAll }) {
  return (
    <section className="bg-gray-50 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {title}
          </h1>

          <Link
            to={viewAll}
            className="text-blue-600 text-sm hover:underline"
          >
            View All {title} Categories →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {data.map((section, i) => (
            <div key={i}>

              <h3 className="font-semibold text-gray-900 mb-3">
                {section.heading}
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">

                {section.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      to={item.link}
                      className="hover:text-blue-600"
                    >
                      • {item.name}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CategoryLayout;
