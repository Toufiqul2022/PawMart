import { Link, useParams } from "react-router";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import api from "../utils/api";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    api
      .get(`/services/${id}`)
      .then((res) => setService(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!service) return <p>Loading...</p>;

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const orderData = {
      productId: service._id,
      buyerName: form.buyerName.value,
      buyerEmail: form.email.value,
      sellerEmail: service.email,
      productName: form.productName.value,
      quantity: Number(form.quantity.value),
      price: Number(form.price.value),
      address: form.address.value,
      phone: form.phone.value,
      additionalNotes: form.notes.value,
      pickupDate: form.pickupDate.value,
    };

    api
      .post("/orders", orderData)
      .then(() => {
        document.getElementById("booking_modal")?.close?.();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full flex justify-center  bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden pb-10">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse z-0"></div>
      <div className="max-w-4xl mt-10 bg-white rounded-2xl shadow-lg p-6 border w-full">
        <div className="w-full h-[350px] rounded-xl overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover hover:scale-105 duration-300"
          />
        </div>

        <div className="mt-6">
          <h1 className="text-4xl font-bold text-gray-800">{service.name}</h1>
          <p className="inline-block mt-3 px-4 py-1 rounded-full text-white text-sm bg-blue-500">
            {service.category}
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed text-lg">
            {service.description}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-5 border rounded-xl bg-gray-50">
            <p className="text-lg font-semibold text-gray-800">Price</p>
            <p className="text-2xl font-bold text-green-600">
              ${service.price}
            </p>
          </div>
          <div className="p-5 border rounded-xl bg-gray-50">
            <p className="text-lg font-semibold text-gray-800">Location</p>
            <p className="text-gray-600">{service.location}</p>
          </div>
          <div className="p-5 border rounded-xl bg-gray-50">
            <p className="text-lg font-semibold text-gray-800">Service Date</p>
            <p className="text-gray-600">{service.date}</p>
          </div>
          <div className="p-5 border rounded-xl bg-gray-50">
            <p className="text-lg font-semibold text-gray-800">Posted By</p>
            <p className="text-gray-600">{service.email}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-8 gap-3">
          <Link
            to="/services"
            className="px-6 py-3 w-2/5 mx-auto text-center rounded-lg border text-gray-700 font-medium hover:bg-gray-100 transition duration-300"
          >
            Back to All Pets & Supplies
          </Link>

          <button
            className="px-6 py-3 w-2/5 mx-auto text-center rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300"
            onClick={() => document.getElementById("booking_modal").showModal()}
          >
            Adopt / Order Now
          </button>

          <dialog id="booking_modal" className="modal">
            <div className="modal-box max-w-xl">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <h2 className="text-2xl font-bold mb-5 text-center">
                Book Service — {service.name}
              </h2>

              <form onSubmit={handleOrder} className="grid gap-3">
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">Name</label>
                  <input
                    type="text"
                    name="buyerName"
                    value={user?.displayName || "Unknown User"}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user?.email}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Product ID
                  </label>
                  <input
                    type="text"
                    name="productId"
                    value={service._id}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={service.name}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    defaultValue={service.category === "Pets" ? 1 : ""}
                    readOnly={service.category === "Pets"}
                    min="1"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">Price</label>
                  <input
                    type="text"
                    name="price"
                    value={service.price}
                    readOnly
                    className="input input-bordered w-full font-semibold text-green-700"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    className="input input-bordered w-full"
                    placeholder="Your Address"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="input input-bordered w-full"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    className="textarea textarea-bordered w-full"
                    placeholder="Any additional notes"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn bg-green-600 text-white w-full mt-2"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
