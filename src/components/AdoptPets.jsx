import React from "react";

const AdoptPets = () => {
  return (
    <section className="rounded-xl p-8 md:p-12 text-center shadow-sm">
      <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
        Why Adopt from PawMart?
      </h2>

      <p className="mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed">
        When you adopt, you’re not just taking home a pet — you’re giving a
        second chance to an animal who truly needs love, care, and safety.
        Adoption helps reduce overbreeding, supports rescued animals, and
        encourages a compassionate approach to pet ownership.
      </p>

      <p className="mt-3 text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Instead of buying, choose to adopt — because every pet deserves a family
        and every family deserves a loyal friend.
      </p>
    </section>
  );
};

export default AdoptPets;
