import React from "react";

const PetHero = () => {
  const heroes = [
    {
      name: "Aisha Rahman",
      role: "Rescued & Adopted 5 Dogs",
      img: "https://ucmscdn.healthgrades.com/9b/d3/d963aa6e45a589780e4266e0f205/582351-aisha-rahman",
      text: "Aisha opened her home to two abandoned puppies and helped them recover with love and care.",
    },
    {
      name: "Hasan Ali",
      role: "Volunteer & Foster Caregiver",
      img: "https://images.csmonitor.com/csm/2023/01/1150324_1_0123-Hasan-Ali-Bio_standard.jpg?alias=standard_900x600nc",
      text: "He has fostered multiple rescued pets, ensuring they receive medical care and affection till adoption.",
    },
    {
      name: "Rina Chowdhury",
      role: "Adopted a Senior Cat",
      img: "https://media.licdn.com/dms/image/v2/D5603AQELIUNLa-B_IQ/profile-displayphoto-shrink_200_200/B56Zb9dfvcGsAY-/0/1748009091097?e=2147483647&v=beta&t=fdy1gjqFMK1mPhIi-JMJMeznH09RuLD7eRJRHfM0XlE",
      text: "Rina chose to adopt an older cat who struggled to find a home — now they’re inseparable.",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">
        Meet Our Pet Heroes
      </h2>
      <p className="text-center max-w-7xl mx-auto mb-10">
        These incredible humans have changed lives through adoption, rescue, and
        compassionate caregiving. Each story reminds us how powerful love can
        be.
      </p>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {heroes.map((hero, i) => (
          <div
            key={i}
            className="rounded-xl p-6 shadow-sm text-center"
          >
            <img
              src={hero.img}
              alt={hero.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow"
            />
            <h3 className="text-xl font-semibold">{hero.name}</h3>
            <p className="text-sm font-medium mb-2">
              {hero.role}
            </p>
            <p className="text-sm">{hero.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetHero;
