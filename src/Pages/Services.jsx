import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "animate.css";
import api from "../utils/api";

const Services = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get(`/services?category=${category}`)
      .then((res) => setServices(res.data))
      .catch((error) => console.error(error));
  }, [category]);

  const searchedServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden px-5 md:px-10 py-10">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse z-0"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-center mt-10 text-white">
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
              <p className="text-center col-span-full text-white/80">
                No services found.
              </p>
            ) : (
              searchedServices.map((service) => (
                <div
                  key={service._id}
                  className="card bg-white/90 shadow-md rounded-xl overflow-hidden flex flex-col h-full"
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
    </div>
  );
};

export default Services;
