import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const UpdateServices = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [services, setServices] = useState();
  const [category, setCategory] = useState(services?.category);

  useEffect(() => {
    axios
      .get(`https://assignment-10-backend-dun.vercel.app/services/${id}`)
      .then((res) => {
        setServices(res.data);
        setCategory(res.data.category);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleUpdate = (e) => {
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
      createAt: services?.createAt,
    };
    axios
      .put(
        `https://assignment-10-backend-dun.vercel.app/update/${id}`,
        formData
      )
      .then((res) => {
        console.log(res.data);
        navigate("/my-services");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl my-10">
      <h2 className="text-2xl font-bold mb-5 text-gray-700">
        Update Product / Pet
      </h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Product / Pet Name */}
        <div>
          <label className="block font-semibold mb-1">Product/Pet Name</label>
          <input
            defaultValue={services?.name}
            type="text"
            placeholder="Enter product or pet name"
            className="w-full border p-2 rounded"
            name="name"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            className="w-full border p-2 rounded"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            defaultValue={services?.price}
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
            defaultValue={services?.location}
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
            defaultValue={services?.description}
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
            defaultValue={services?.image}
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
            defaultValue={services?.date}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email (readonly) */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            defaultValue={services?.email}
            type="email"
            className="w-full border p-2 rounded bg-gray-200 cursor-not-allowed"
            name="email"
            readOnly
            value={user?.email}
          />
        </div>

        {/* Submit */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateServices;
