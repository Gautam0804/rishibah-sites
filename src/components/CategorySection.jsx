import { Link } from "react-router-dom";

function CategorySection({ title, viewLink, data }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600">
          {title}
        </h2>

        <Link
          to={viewLink}
          className="text-blue-500 hover:underline text-sm"
        >
          View All {title} →
        </Link>
      </div>

      {/* Box */}
      <div className="bg-gray-50 rounded-xl shadow p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {data.map((group, index) => (
          <div key={index}>

            <h3 className="font-semibold text-lg mb-3 text-gray-800">
              {group.heading}
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">

              {group.items.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="hover:text-blue-500 transition"
                  >
                    • {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        ))}

      </div>

    </section>
  );
}

export default CategorySection;
