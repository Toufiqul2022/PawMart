import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../utils/api";

const CategoryFilteredProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/category/${categoryName}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="h-[60vh] flex justify-center items-center text-lg text-gray-600">
        No products found in{" "}
        <span className="font-semibold">{categoryName}</span>.
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden py-12">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse z-0"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 animate-pulse z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          {categoryName} Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>

                <p className="text-gray-600 mt-2 line-clamp-2">
                  {product.description}
                </p>

                <p className="text-gray-500 mt-2 text-sm">
                  Category: {product.category}
                </p>

                <p className="text-gray-500 text-sm">
                  Location: {product.location}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-blue-600 font-bold">
                    {Number(product.price) === 0 ? "Free" : `$${product.price}`}
                  </p>

                  <Link
                    to={`/service/${product._id}`}
                    className="inline-block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilteredProducts;
