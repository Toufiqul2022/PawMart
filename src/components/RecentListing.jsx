import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RecentListing = () => {
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recent-services")
      .then((res) => {
        setRecent(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        🐾 Recent Listings
      </h2>
      <p className="text-gray-600 text-center mt-2">
        Explore the newest pets & products added to PawMart.
      </p>

      {loading && (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto px-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-white rounded-xl h-64 shadow-sm"
            ></div>
          ))}
        </div>
      )}

      {!loading && (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto px-4">
          {recent.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />

                <span className="absolute top-3 left-3 bg-white px-3 py-1 text-sm font-semibold rounded-full shadow">
                  {item.price ? `$ ${item.price}` : "Free for Adoption 🐾"}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-indigo-600 font-medium">
                  {item.category}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  {item.location || "Unknown Location"}
                </p>

                <div className="mt-4 flex justify-end">
                  <Link
                    to={`/service/${item._id}`}
                    className="text-white bg-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentListing;
