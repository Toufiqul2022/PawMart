import { useParams, Link } from "react-router-dom";
import { FaPaw, FaHeart, FaArrowLeft } from "react-icons/fa";

/* ================= BLOG DATA ================= */
const blogPosts = [
  {
    id: "1",
    title: "Top 10 Tips for New Pet Owners",
    description:
      "Learn the essential tips to keep your new pet happy, healthy, and well-trained.",
    category: "Tips",
    author: "Jane Doe",
    date: "Jan 3, 2026",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Bringing a new pet home is exciting but can be challenging.</p>
      <ol class="list-decimal list-inside mt-4 space-y-2">
        <li>Prepare your home with essential supplies</li>
        <li>Schedule a vet visit immediately</li>
        <li>Create a safe space</li>
        <li>Understand food & nutrition</li>
        <li>Train using positive reinforcement</li>
      </ol>
      <p class="mt-4">Patience and love are the keys to success.</p>
    `,
  },
  {
    id: "2",
    title: "Heartwarming Adoption Stories",
    description: "Inspiring pet adoption stories from PawMart.",
    category: "Adoption",
    author: "John Smith",
    date: "Dec 28, 2025",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Adoption changes lives forever.</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Max found a loving family</li>
        <li>Luna now lives safely indoors</li>
        <li>Charlie enjoys daily walks</li>
      </ul>
    `,
  },
  {
    id: "3",
    title: "Best Pet Products of 2026",
    description: "Top must-have pet products this year.",
    category: "Products",
    author: "Alice Lee",
    date: "Jan 1, 2026",
    image:
      "https://internationalpetfood.com/wp-content/uploads/2025/08/Revolucion-Pet-Food-Dia-lanza-una-gama-de-alimentos-para-mascotas.jpg",
    content: `
      <p>Upgrade your pet care with these products:</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Automatic feeders</li>
        <li>Eco-friendly toys</li>
        <li>Orthopedic beds</li>
        <li>Smart GPS collars</li>
      </ul>
    `,
  },
];

/* ================= COMPONENT ================= */
const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  const handleShare = () => {
    if (!post) return;

    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  if (!post) {
    return (
      <div className="py-24 text-center text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <Link to="/blogs" className="mt-6 inline-block underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="pb-24 text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 py-6">
      {/* Image */}
      <div className="relative max-w-7xl mx-auto h-96 rounded-3xl overflow-hidden shadow-xl my-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-6 left-6 bg-black/60 px-4 py-2 rounded-full flex items-center gap-2">
          <FaPaw /> {post.category}
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Link
          to="/blogs"
          className="flex items-center gap-2 mb-6 font-semibold hover:underline"
        >
          <FaArrowLeft /> Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
        <p className="opacity-80 mb-8">
          By {post.author} • {post.date}
        </p>

        {/* Content */}
        <article
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share */}
        <button
          onClick={handleShare}
          className="mt-10 inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          <FaHeart /> Share
        </button>

        {/* Related */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/blogs/${p.id}`}
                  className="bg-black/40 rounded-lg overflow-hidden hover:scale-105 transition"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm opacity-70">{p.date}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
