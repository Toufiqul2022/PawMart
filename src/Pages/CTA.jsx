import { Link } from "react-router-dom";
import { FaPaw, FaHome, FaShoppingCart } from "react-icons/fa";

const CTA = () => {
  return (
    <section
      className="relative py-24 text-white overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500
"
    >
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Find the Right Care, Product, or a Loving Home for Pets
        </h2>

        {/* Subheading */}
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-blue-100">
          PawMart connects <span className="font-semibold">pet lovers</span>{" "}
          with trusted pet owners, shelters, and service providers. Explore{" "}
          <strong>paid services</strong>, discover quality pet products, or
          adopt pets listed as <strong>Free for Adoption</strong>.
        </p>

        {/* Feature Highlights */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-8 text-left max-w-4xl mx-auto">
          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition">
            <FaPaw className="text-2xl text-yellow-300" />
            <span>View contact details of pet owners and shelters</span>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition">
            <FaShoppingCart className="text-2xl text-green-300" />
            <span>Browse quality pet products and services</span>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition">
            <FaHome className="text-2xl text-pink-300" />
            <span>
              Adopt pets listed as <strong>Free for Adoption</strong>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/services"
            className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
          >
            Explore Listings
          </Link>

          <Link
            to="/add-services"
            className="border border-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 shadow-lg transform hover:-translate-y-1 transition"
          >
            List a Pet or Service
          </Link>
        </div>

        {/* Note */}
        <p className="mt-6 text-blue-200 text-sm sm:text-base">
          A community-driven platform focused on responsible pet adoption and
          care.
        </p>
      </div>
    </section>
  );
};

export default CTA;
