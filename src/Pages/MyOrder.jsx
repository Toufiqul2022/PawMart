import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        console.log(res.data);
        setMyOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="overflow-x-auto p-5">
      <h2 className="text-2xl font-bold mb-5">My Orders</h2>
      <table className="table table-xs w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Address</th>
            <th>Date</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {myOrder.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center p-4">
                No orders found
              </td>
            </tr>
          ) : (
            myOrder.map((order, index) => (
              <tr key={order._id} className="hover:bg-gray-50">
                <th>{index + 1}</th>
                <td>{order.productName}</td>
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
  );
};

export default MyOrder;
