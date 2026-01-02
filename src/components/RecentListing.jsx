import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RecentListing = () => {
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://assignment-10-backend-dun.vercel.app/recent-services")
      .then((res) => {
        setRecent(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center">🐾 Recent Listings</h2>
      <p className="text-center mt-2">
        Explore the newest pets & products added to PawMart.
      </p>

      <div className="max-w-7xl mx-auto">
        {/* Skeleton */}
        {loading && (
          <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-6 mt-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse h-80 rounded-xl bg-gray-200"
              ></div>
            ))}
          </div>
        )}

        {/* Cards */}
        {!loading && (
          <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-6 mt-10">
            {recent.map((item) => (
              <div
                key={item._id}
                className="card bg-base-100 shadow-md rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />

                  <span className="absolute top-3 left-3 bg-gray-500 text-white px-3 py-1 text-sm rounded-full">
                    {item.price ? `$ ${item.price}` : "Free for Adoption 🐾"}
                  </span>
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-indigo-600 font-medium">
                    {item.category}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    {item.location || "Unknown Location"}
                  </p>

                  {/* Button */}
                  <div className="mt-auto pt-4 flex justify-end">
                    <Link
                      to={`/service/${item._id}`}
                      className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentListing;
