import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AutoInsuranceQuoteBanner from "./AutoInsuranceQuoteBanner";

const insuranceItems = [
  {
    title: "New to Auto Insurance?",
    content: `Building your insurance history starts here:
If you are buying your first policy or returning to driving after a lapse, we are here to make it simple. InsureCareCenter provides flexible, inclusive options tailored for every driver, regardless of your insurance history.

Why choose us?
We focus on providing straightforward, affordable coverage that fits your lifestyle. Get your custom quote online today to explore our competitive rates and flexible payment plans, including low down payment options.`
  },
  {
    title: "Driving Record Support (DUI / DWI / OWI)",
    content: `Guidance for unique driving histories:
We believe every driver deserves the opportunity to stay protected. If you have a DUI, DWI, or OWI on your record, InsureCareCenter offers solutions to help you secure reasonably priced coverage. We can also assist with the quick and easy filing of SR-22 or FR-44 certificates of financial responsibility where required.`
  },
  {
    title: "SR-22 or FR-44 Certificates",
    content: `Simplified filing for your requirements:
An SR-22 is a state-mandated certificate that verifies you are carrying the required liability insurance. FR-44 is similar and applies in specific states like Florida and Virginia. We make it easy to add these necessary filings to your policy so you can stay compliant and focused on the road.`
  },
  {
    title: "Rideshare Coverage",
    content: `Protection for the modern driver:
If you drive for services like Uber® or Lyft®, your personal policy may not be enough. We offer optional rideshare coverage designed to bridge the gap between your personal insurance and the coverage provided by rideshare companies, keeping you protected while you work.`
  },
  {
    title: "Non-Owner Insurance Solutions",
    content: `Protection even without a vehicle:
If you don't own a car but frequently drive borrowed or rented vehicles, our Non-Owner policies provide essential liability protection. If you need an SR-22 or FR-44 filing, we can integrate that into your non-owner policy to ensure you meet all state requirements.`
  }
];

export default function CommonCarInsuranceUI() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="font-sans bg-gray-50">
      <AutoInsuranceQuoteBanner/>
      <section className="max-w-6xl mx-auto my-12 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00a98f] mb-12 text-center">
          Common Coverage Solutions
        </h2>

        <div className="space-y-3">
          {insuranceItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex justify-between items-center font-semibold text-white bg-[#00a98f] hover:bg-[#008f7a] transition-colors duration-200"
              >
                <span className="text-base md:text-lg">{item.title}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-white text-xl" />
                ) : (
                  <FaChevronDown className="text-white text-xl" />
                )}
              </button>
              <div
                className={`px-6 py-4 text-gray-700 text-sm md:text-base leading-relaxed bg-white transition-all duration-500 ${
                  activeIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="whitespace-pre-line">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-8 text-center">
          *Availability of policies, discounts, and specific coverages may vary by state.
        </p>
        <p className="text-sm text-gray-500 text-center">
          *All coverages are subject to policy terms, conditions, and standard limitations.
        </p>
      </section>
    </div>
  );
}