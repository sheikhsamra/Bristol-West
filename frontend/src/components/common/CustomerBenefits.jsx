import React from "react";
import permissiveImg from "../../assets/permissive.jpg";
import trailerImg from "../../assets/permissive4.jpg";
import rentalImg from "../../assets/permissive2.jpg";
import rideshareImg from "../../assets/permissive3.jpg";

export default function CustomerBenefits() {
  const benefits = [
    {
      img: permissiveImg,
      title: "Permissive user coverage.",
      text: "By providing a driver permission to use your vehicle, they are covered under your vehicle’s insurance.",
    },
    {
      img: trailerImg,
      title: "$500 trailer physical damage coverage.",
      text: "Liability coverage is provided for a trailer you own that is attached to a covered vehicle.",
    },
    {
      img: rentalImg,
      title: "Rental car coverage.",
      text: "If you rent a car, you’ll enjoy the same coverage as your personal, Bristol West insured vehicle.",
    },
    {
      img: rideshareImg,
      title: "Rideshare coverage option.",
      text: "Extends your personal auto policy limits and coverage if you conduct Rideshare activities, including Uber Eats.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00a98f] text-center mb-12">
        As a Bristol West customer, you’ll enjoy:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {benefits.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 md:h-48 object-cover rounded-lg mb-4 shadow-lg"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-[#00a98f] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base md:text-lg">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-6 text-center">
        *Not all policies, discounts, coverages and features are available in all states.
      </p>
      <p className="text-sm text-gray-500 text-center">
        *Coverages are not available in all policies. Where available, coverages may be subject to additional terms, conditions, or limitations.
      </p>
    </section>
  );
}