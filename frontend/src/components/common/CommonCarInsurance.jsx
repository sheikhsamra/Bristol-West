import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AutoInsuranceQuoteBanner from "./AutoInsuranceQuoteBanner";

const insuranceItems = [
  {
    title: "No Prior Insurance?",
    content: `Starting fresh with auto insurance? No worries:
If you’ve never held a car insurance policy or had a lapse in coverage, we can assist. Bristol West provides flexible options for nearly every driver, regardless of prior history.

Why choose us?
Bristol West offers straightforward, affordable policies tailored to your budget. Get a quote online today, and take advantage of competitive rates and convenient payment options, including low down payments.`
  },
  {
    title: "DUI / DWI / OWI Conviction?",
    content: `Support for drivers with convictions:
Even if you have a DUI, DWI, or OWI on record, Bristol West can help secure reasonably priced coverage. We can also provide an SR-22 or FR-44 certificate of financial responsibility when required.`
  },
  {
    title: "Need an SR-22 or FR-44?",
    content: `Coverage and certification guidance:
An SR-22 is a state-required certificate proving you maintain liability insurance. FR-44 is similar and used in specific states (FL & VA). We can help you add these certificates to your policy quickly and easily.`
  },
  {
    title: "Rideshare Coverage",
    content: `Driving for rideshare services?
We offer optional rideshare coverage that bridges the gap between your personal insurance and coverage from companies like Uber® or Lyft®. Stay protected while providing rides.`
  },
  {
    title: "Affordable Coverage Without Owning a Car",
    content: `Non-owner policy solutions:
If you don’t own a vehicle but need liability coverage, our Non-Owner policies provide protection for accidents while driving a borrowed or rental vehicle. SR-22/FR-44 can also be included if necessary.`
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
          Common Car Insurance Needs
        </h2>

        <div className="space-y-3">
          {insuranceItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-3 flex justify-between items-center font-semibold text-[#fff] bg-[#00a98f] hover:bg-[#008f7a] transition-colors duration-200"
              >
                <span className="text-base md:text-lg">{item.title}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-white text-xl transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-white text-xl transition-transform duration-300" />
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

        <p className="text-sm text-gray-500 mt-6 text-center">
        *Not all policies, discounts, coverages and features are available in all states.
      </p>
      <p className="text-sm text-gray-500 text-center">
        *Coverages are not available in all policies. Where available, coverages may be subject to additional terms, conditions, or limitations.
      </p>
      </section>
    </div>
  );
}