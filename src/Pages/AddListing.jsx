import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddListing = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const price = parseInt(e.target.price.value);
    const location = e.target.location.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const date = e.target.date.value;
    const email = e.target.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
    };
    console.log(formData);

    axios
      .post("https://assignment-10-backend-dun.vercel.app/services", formData)
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          Swal.fire({
            title: `${name} Add Successfully!`,
            icon: "success",
            draggable: true,
          });
          e.target.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 shadow-lg rounded-xl my-10">
      <h2 className="text-2xl font-bold mb-5">Add Product / Pet</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product / Pet Name */}
        <div>
          <label className="block font-semibold mb-1">Product/Pet Name</label>
          <input
            type="text"
            placeholder="Enter product or pet name"
            className="w-full border p-2 rounded"
            name="name"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select className="w-full border p-2 rounded" name="category">
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Pet Care Products">Pet Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            placeholder="Enter price"
            name="price"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Enter location"
            name="location"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            rows="3"
            className="w-full border p-2 rounded"
            placeholder="Write details..."
            name="description"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">Image (URL)</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Paste image URL"
            name="image"
          />
        </div>

        {/* Pick Up Date */}
        <div>
          <label className="block font-semibold mb-1">Date (Pick Up)</label>
          <input
            type="date"
            name="date"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email (readonly) */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded cursor-not-allowed"
            name="email"
            readOnly
            value={user?.email}
          />
        </div>

        {/* Submit */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddListing;
