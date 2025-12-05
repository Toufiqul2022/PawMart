import React from "react";
import { Link } from "react-router";
import error from "../assets/Error.png"

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 text-center">
      <img
        src={error}
        alt="404 not found"
        className="w-2/5 mb-6 rounded-full"
      />
      <h1 className="text-4xl font-bold text-gray-700"> Oops! Page Not Found</h1>
      <p className="text-xl text-gray-500 mt-2">
       The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <button className="mt-6 btn bg-gradient-to-r from-gray-600 to-gray-300 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error404;
