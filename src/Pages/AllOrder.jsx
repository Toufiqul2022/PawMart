import React, { useEffect, useState } from "react";
import api from "../utils/api";

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get("/orders")
      .then((res) => setOrders(res.data))
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
    <div className="relative min-h-screen bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden px-5 py-10">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white">All Order</h2>

        <div className="overflow-x-auto bg-white/90 rounded-xl shadow">
          <table className="table">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th>#</th>
                <th>Buyer</th>
                <th>Buyer Email</th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Pickup</th>
              </tr>
            </thead>
            <tbody>
              {orders?.length ? (
                orders.map((o, idx) => (
                  <tr key={o._id}>
                    <td>{idx + 1}</td>
                    <td>{o.buyerName}</td>
                    <td>{o.buyerEmail || o.email}</td>
                    <td className="font-semibold">{o.productName}</td>
                    <td>${o.price}</td>
                    <td>{o.quantity}</td>
                    <td>{o.pickupDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-8 opacity-70">
                    No orders found.
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

export default AllOrder;
