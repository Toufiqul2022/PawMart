import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import api from "../utils/api";
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

    api.post("/services", formData).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          title: `${name} Added Successfully!`,
          icon: "success",
          draggable: true,
        });
        e.target.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
      {/* Decorative Floating Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      <div className="relative max-w-xl mx-auto p-8 bg-white/20 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Add Product / Pet
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Product/Pet Name</label>
            <input
              type="text"
              placeholder="Enter product or pet name"
              className="w-full border border-white/40 bg-white/10 p-2 rounded placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              name="name"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              className="w-full border border-white/40 bg-white/10 p-2 rounded placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              name="category"
              required
            >
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
              placeholder="Enter price"
              className="w-full border border-white/40 bg-white/10 p-2 rounded placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              name="price"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full border border-white/40 bg-white/10 p-2 rounded placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              name="location"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              rows="3"
              placeholder="Write details..."
              className="w-full border border-white/40 bg-white/10 p-2 rounded placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              name="description"
              required
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-semibold mb-1">Image (URL)</label>
            <input
              type="text"
              placeholder="Paste image URL"
              className="w-full border border-white/40 bg-white/10 p-2 rounded placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              name="image"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold mb-1">Date (Pick Up)</label>
            <input
              type="date"
              name="date"
              className="w-full border border-white/40 bg-white/10 p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-white/40 bg-white/10 p-2 rounded cursor-not-allowed"
              name="email"
              readOnly
              value={user?.email}
            />
          </div>

          {/* Submit */}
          <button className="w-full bg-white/30 text-white py-2 rounded-lg font-semibold hover:bg-white/50 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddListing;
