import React from "react";
import { FaListAlt, FaCheckCircle, FaUsers, FaPaw } from "react-icons/fa";

const Statistics = () => {
  const stats = [
    {
      title: "Active Listings",
      value: "120+",
      description:
        "Currently available pets, products, and services actively listed on PawMart.",
      icon: <FaListAlt className="text-green-500 text-4xl" />,
    },
    {
      title: "Verified Providers",
      value: "45+",
      description:
        "Trusted shelters, pet owners, and service providers verified for reliability.",
      icon: <FaCheckCircle className="text-blue-500 text-4xl" />,
    },
    {
      title: "Trusted Users",
      value: "300+",
      description:
        "Registered users actively using PawMart for adoption and pet services.",
      icon: <FaUsers className="text-purple-500 text-4xl" />,
    },
    {
      title: "Free for Adoption",
      value: "60+",
      description:
        "Pets listed as free for adoption, promoting responsible and ethical adoption.",
      icon: <FaPaw className="text-pink-500 text-4xl" />,
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 min-h-screen">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">PawMart in Numbers</h2>
          <p className="mt-3 max-w-xl mx-auto">
            A quick overview of our growing community and trusted pet adoption
            platform.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md p-6 text-center bg-white/20 backdrop-blur-md hover:shadow-lg transition"
            >
              <div className="mb-3 flex justify-center">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-lg font-semibold mt-2 text-white">
                {stat.title}
              </p>
              <p className="text-sm text-white/80 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
