import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import api from "../utils/api";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [myOrder, setMyOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    setLoading(true);
    api
      .get(`/my-orders?email=${user.email}`)
      .then((res) => setMyOrder(res.data))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 py-12 px-5 md:px-10 min-h-screen">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-white/5 rounded-full animate-ping"></div>

      <h2 className="text-3xl font-bold mb-6 text-center relative z-10">
        My Orders
      </h2>

      <div className="relative z-10 overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table">
          <thead className="text-base font-semibold">
            <tr>
              <th>#</th>
              <th>Buyer</th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Address</th>
              <th>Pickup</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-8 opacity-70">
                  No orders found
                </td>
              </tr>
            ) : (
              myOrder.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.buyerName}</td>
                  <td className="font-semibold">{order.productName}</td>
                  <td>${order.price}</td>
                  <td>{order.quantity}</td>
                  <td>{order.address}</td>
                  <td>{order.pickupDate}</td>
                  <td>{order.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
