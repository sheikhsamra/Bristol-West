import React from "react";
import { FaCar, FaClock, FaWallet } from "react-icons/fa";

export default function WhyInsureCare() {
  const features = [
    {
      icon: <FaCar className="text-[#00a98f] text-6xl md:text-[150px] mb-4" />,
      title: "Reliable Auto Coverage",
    },
    {
      icon: (
        <FaClock className="text-[#00a98f] text-6xl md:text-[150px]  mb-4" />
      ),
      title: "24/7 Policy Access",
    },
    {
      icon: (
        <FaWallet className="text-[#00a98f] text-6xl md:text-[150px] mb-4" />
      ),
      title: "Flexible Payment Plans",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto  text-center">
        <h2 className="text-3xl font-bold text-[#00a98f] mb-2">
          Why Choose Insure Care Center?
        </h2>
        <p className="text-[#00a98f] mb-8 text-lg">
          Experience peace of mind with protection that's simple, secure, and always there when you need it.
        </p>

        <div className="flex flex-col md:flex-row justify-around mt-10 py-10 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {feature.icon}
              <h3 className="text-[#00a98f] font-semibold text-xl mt-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}