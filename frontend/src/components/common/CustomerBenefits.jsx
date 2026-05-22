import React from "react";
import permissiveImg from "../../assets/permissive.jpg";
import trailerImg from "../../assets/permissive4.jpg";
import rentalImg from "../../assets/permissive2.jpg";
import rideshareImg from "../../assets/permissive3.jpg";

export default function CustomerBenefits() {
  const benefits = [
    {
      img: permissiveImg,
      title: "Permissive User Coverage",
      text: "Granting someone else permission to drive your vehicle? Rest easy knowing they are protected under your policy.",
    },
    {
      img: trailerImg,
      title: "Trailer Physical Damage Protection",
      text: "We provide liability support for trailers you own when attached to your primary covered vehicle.",
    },
    {
      img: rentalImg,
      title: "Seamless Rental Car Coverage",
      text: "When you rent a car, your InsureCareCenter policy travels with you, offering the same level of care you expect at home.",
    },
    {
      img: rideshareImg,
      title: "Flexible Rideshare Protection",
      text: "Designed for modern drivers. Extend your coverage limits for rideshare and delivery activities, including meal delivery services.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00a98f] text-center mb-12">
        Why Insure Care Center Customers Choose Us
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
        *Policy features, discounts, and coverages vary by state and individual plan.
      </p>
      <p className="text-sm text-gray-500 text-center">
        *Availability is subject to specific policy terms, conditions, and coverage limitations.
      </p>
    </section>
  );
}