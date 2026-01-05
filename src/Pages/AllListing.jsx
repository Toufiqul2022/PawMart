import React, { useEffect, useState } from "react";
import api from "../utils/api";

const AllListing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get("/services")
      .then((res) => setListings(res.data))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden px-5  py-10">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white">All Listing</h2>

        <div className="overflow-x-auto bg-white/90 rounded-xl shadow">
          <table className="table">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Owner Email</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {listings?.length ? (
                listings.map((item, idx) => (
                  <tr key={item._id}>
                    <td>{idx + 1}</td>
                    <td className="font-semibold">{item.name}</td>
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <td>{item.email}</td>
                    <td>{item.location}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-8 opacity-70">
                    No listings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllListing;
