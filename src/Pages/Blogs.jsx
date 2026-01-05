import { Link } from "react-router-dom";
import { FaPaw, FaBook, FaLightbulb, FaHeart } from "react-icons/fa";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Tips for New Pet Owners",
      description:
        "Learn the essential tips to keep your new pet happy, healthy, and well-trained.",
      category: "Tips",
      icon: <FaLightbulb className="text-yellow-400 text-2xl" />,
      author: "Jane Doe",
      date: "Jan 3, 2026",
      image:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
      link: "/blogs/1",
    },
    {
      id: 2,
      title: "Heartwarming Adoption Stories",
      description:
        "Read inspiring stories of pets finding their forever homes through PawMart.",
      category: "Adoption",
      icon: <FaPaw className="text-pink-400 text-2xl" />,
      author: "John Smith",
      date: "Dec 28, 2025",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
      link: "/blogs/2",
    },
    {
      id: 3,
      title: "Best Pet Products of 2026",
      description:
        "Discover high-quality products that every pet owner should have this year.",
      category: "Products",
      icon: <FaBook className="text-green-400 text-2xl" />,
      author: "Alice Lee",
      date: "Jan 1, 2026",
      image:
        "https://internationalpetfood.com/wp-content/uploads/2025/08/Revolucion-Pet-Food-Dia-lanza-una-gama-de-alimentos-para-mascotas.jpg",
      link: "/blogs/3",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-5xl font-extrabold text-white relative inline-block">
          <span>PawMart Blog</span>
          <FaPaw className="absolute -top-6 -right-8 text-yellow-300 text-3xl animate-bounce" />
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-white/80 text-lg sm:text-xl">
          Explore heartwarming stories, pet care tips, and product guides
          curated for pet lovers.
        </p>

        {/* Blog Cards */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={post.link}
              className="group relative block rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 duration-500 bg-white"
            >
              {/* Blog Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  {post.icon} {post.category}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col justify-between h-56 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{post.description}</p>
                </div>

                {/* Author & Date */}
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>

                {/* Read More */}
                <span className="mt-4 inline-block text-blue-600 font-semibold">
                  Read More <FaHeart className="inline ml-1 text-pink-500" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
