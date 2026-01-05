import React from "react";
import {
  FaCheckCircle,
  FaPaw,
  FaPhoneAlt,
  FaUserCog,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";

const Highlights = () => {
  const highlights = [
    {
      title: "Verified Listings Only",
      description:
        "All listings on PawMart are reviewed to ensure basic authenticity and trust.",
      icon: <FaCheckCircle className="text-green-500 text-4xl" />,
    },
    {
      title: "Free & Paid Adoption Options",
      description:
        "Listings clearly indicate whether they are paid services or free for adoption.",
      icon: <FaPaw className="text-blue-500 text-4xl" />,
    },
    {
      title: "Direct Owner Information",
      description:
        "Users can view contact details shared by pet owners or shelters to connect directly.",
      icon: <FaPhoneAlt className="text-indigo-500 text-4xl" />,
    },
    {
      title: "User-Controlled Bookings",
      description:
        "Bookings can be managed or deleted by users from their dashboard.",
      icon: <FaUserCog className="text-purple-500 text-4xl" />,
    },
    {
      title: "Fully Responsive Design",
      description:
        "Optimized for smooth experience across mobile, tablet, and desktop devices.",
      icon: <FaMobileAlt className="text-pink-500 text-4xl" />,
    },
    {
      title: "Secure Role-Based Access",
      description:
        "Dashboard access is controlled based on user roles for better security.",
      icon: <FaShieldAlt className="text-red-500 text-4xl" />,
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose PawMart?
          </h2>
          <p className="mt-3 max-w-xl mx-auto">
            PawMart provides a reliable platform for pet adoption and
            pet-related services with a focus on trust and usability.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-white/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
