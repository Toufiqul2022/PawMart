import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryFilteredProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryName]);
  console.log(products)

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!products.length)
    return <p className="text-center mt-10">No products found.</p>;

  return (
    <section className="py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        {categoryName} Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-gray-600 mt-2">Category: {product.category}</p>
              <p className="text-gray-600 mt-2">Location: {product.location}</p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-blue-600 font-bold">
                  {product.Price === 0 ? "Free" : `$${product.price}`}
                </p>
                <Link
                  to={`/service/${product._id}`}
                  className="inline-block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilteredProducts;
