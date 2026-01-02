import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "animate.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://assignment-10-backend-dun.vercel.app/services?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, [category]);

  const searchedServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Specialized Veterinary & Pet Services
      </h1>

      {/* Category & Search */}
      <div className="flex flex-wrap justify-center my-6 gap-4">
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="select border border-gray-300 rounded px-3 py-2"
        >
          <option value="">All Categories</option>
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="accessories">Accessories</option>
          <option value="Pet Care Products">Pet Care Products</option>
        </select>

        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 animate__animated animate__fadeInUp">
          {searchedServices.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">
              No services found.
            </p>
          ) : (
            searchedServices.map((service) => (
              <div
                key={service._id}
                className="card bg-base-100 shadow-md rounded-xl overflow-hidden flex flex-col h-full"
              >
                {/* Image */}
                <figure>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-56 w-full object-cover"
                  />
                </figure>

                {/* Body */}
                <div className="card-body flex flex-col">
                  <h2 className="card-title text-xl font-bold">
                    {service.name}
                  </h2>

                  <div className="flex justify-between items-center mt-1 text-sm text-gray-500">
                    <span className="badge badge-outline">
                      {service.category}
                    </span>
                    <span>{service.location}</span>
                  </div>

                  <div className="mt-3 font-semibold text-gray-800">
                    Price: ${service.price ?? "N/A"}
                  </div>

                  <div className="mt-1 text-sm text-gray-600">
                    Email: {service.email}
                  </div>

                  <div className="mt-1 text-sm text-gray-600">
                    Date: {service.date}
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-4 flex justify-end">
                    <Link
                      to={`/service/${service._id}`}
                      className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
