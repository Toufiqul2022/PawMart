import React from "react";
import { Link } from "react-router-dom";
import { FaDog, FaBone, FaPaw, FaCapsules } from "react-icons/fa";

const Category = () => {
  const categories = [
    {
      name: "Pets",
      icon: <FaDog size={40} />,
      image:
        "https://www.eurogroupforanimals.org/files/eurogroupforanimals/glazed_builder_images/PuppyDogvertical.jpg?fid=6500",
      categoryName: "Pets-adoption",
    },
    {
      name: "Pet Food",
      icon: <FaBone size={40} />,
      image:
        "https://www.petfoodinstitute.org/wp-content/uploads/2020/12/pet-food-types.jpg",
      categoryName: "Pet-food",
    },
    {
      name: "Accessories",
      icon: <FaPaw size={40} />,
      image:
        "https://blog.pet.fitness/wp-content/uploads/2021/12/Andrew-Tennis-Images-3-1024x768-112.jpg",
      categoryName: "Accessories",
    },
    {
      name: "Pet Care Products",
      icon: <FaCapsules size={40} />,
      image:
        "https://www.dewsolutions.in/wp-content/uploads/2021/09/Petcare.png",
      categoryName: "Pet-care-products",
    },
  ];

  return (
    <section className="py-12 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Shop by Category</h2>
        <p className="text-gray-500 mt-2">
          Find everything your pet needs in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/category-filtered-product/${cat.categoryName}`}
            className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer h-44"
          >
            {/* Background image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white transition group-hover:bg-black/30">
              {cat.icon}
              <h3 className="mt-2 text-lg font-semibold">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
