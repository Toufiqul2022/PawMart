import React from "react";

const FAQ = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-white/80 mt-2">
          Clear answers to common questions about PawMart services, pets, and
          listings
        </p>

        {/* FAQ Items */}
        <div className="mt-10 space-y-4">
          {[
            {
              q: "How do I book a pet service on PawMart?",
              a: "To book a service, create an account or log in, browse services, open the service details page, and follow the instructions provided by the service owner.",
            },
            {
              q: "Are pets and products listed on PawMart verified?",
              a: "Yes. PawMart reviews submitted listings before approval, but users are encouraged to communicate directly with sellers or service providers.",
            },
            {
              q: "Can I adopt pets through PawMart?",
              a: "Yes. Some listings are marked as “Free for Adoption,” allowing direct contact with owners or shelters.",
            },
            {
              q: "What payment methods are supported?",
              a: "Payment methods depend on the provider and may include cash, mobile banking, or online transfer.",
            },
            {
              q: "Is home delivery available for pet products?",
              a: "Delivery depends on the seller. Details are mentioned on the product or service page.",
            },
            {
              q: "Can I cancel or modify a booking?",
              a: "Users can cancel or delete their own booking from the dashboard and communicate further with providers if needed.",
            },
            {
              q: "How do I list my own pet, product, or service?",
              a: "Go to your dashboard, add a new listing, fill in details, upload images, and submit for review.",
            },
            {
              q: "How can I report an issue?",
              a: "Report issues via the Contact page or email our support team for investigation.",
            },
            {
              q: "How do I contact PawMart customer support?",
              a: "Use the Contact page or email support@pawmart.com. Responses usually arrive within 24–48 hours.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-white/95 text-gray-800 rounded-xl shadow-md"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">{item.q}</div>
              <div className="collapse-content text-gray-600">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
