import React from "react";
import { FaArrowRight } from "react-icons/fa";
import avator1 from "../assets/avator1.png";
import avator2 from "../assets/avator2.webp";
import avator3 from "../assets/avator3.webp";
import avator4 from "../assets/avator4.webp";
import { Link } from "react-router-dom";

export default function Claims() {
  const claimOptions = [
    { title: "Current Policyholder", desc: "Active InsureCareCenter member", img: avator1 },
    { title: "Another Carrier", desc: "Representing another insurance", img: avator2 },
    { title: "Incident Involved", desc: "Accident with a policyholder", img: avator3 },
    { title: "Other", desc: "General claim inquiry", img: avator4 },
  ];

  const supportOptions = [
    { title: "Roadside Help", desc: "Need immediate vehicle support?", img: avator1 },
    { title: "Billing Help", desc: "Questions about your payment?", img: avator2 },
    { title: "Coverage Update", desc: "Need to change your plan?", img: avator3 },
    { title: "Find An Agent", desc: "Contact a local representative", img: avator4 },
  ];

  const rightColumnInfo = [
    { heading: "Towing & Labor Coverage", desc: "Check reimbursement instructions.", linkText: "Learn More", linkUrl: "#" },
    { heading: "Roadside Assistance", desc: "Request service for your policy.", linkText: "Learn More", linkUrl: "#" },
    { heading: "Medical Provider Info", desc: "View status of medical bills.", linkText: "Learn More", linkUrl: "#" },
    { heading: "Decision Point Review", desc: "Access review documentation.", linkText: "View Documents", linkUrl: "#" },
  ];

  return (
    <section className="bg-[#f0f0f0]">
      <div className="py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 p-4 rounded mb-6">
            <Link to="/" className="text-[#00a98f] hover:underline cursor-pointer">
              Home
            </Link>{" "}
            / <span className="font-semibold">Claims</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-[#00a98f]">Claims Service</h2>
              <p>
                Quickly and conveniently report your claim online 24/7, or call us at: 
                <strong> 1-800-INSURE-CARE</strong>
              </p>

              {/* First Claim Options Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {claimOptions.map((option, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow flex flex-col items-center text-center">
                    <img src={option.img} alt={option.title} className="rounded-full mb-4 w-28 h-28 object-cover" />
                    <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm">{option.desc}</p>
                    <input type="radio" name="claimOption" className="mt-4" />
                  </div>
                ))}
              </div>
              <button className="mt-6 bg-[#00a98f] w-50 mx-auto text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition transform">
                Report A Claim
              </button>

              {/* Second Options Section (Different Text) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {supportOptions.map((option, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow flex flex-col items-center text-center">
                    <img src={option.img} alt={option.title} className="rounded-full mb-4 w-28 h-28 object-cover" />
                    <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm">{option.desc}</p>
                    <input type="radio" name="supportOption" className="mt-4" />
                  </div>
                ))}
              </div>
              <button className="mt-6 bg-[#00a98f] text-white w-50 mx-auto px-6 py-3 rounded-lg shadow hover:scale-105 transition transform">
                Get Support
              </button>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {rightColumnInfo.map((info, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-semibold text-[#00a98f] mb-2">{info.heading}</h3>
                  <p className="text-gray-700 mb-2">{info.desc}</p>
                  <a href={info.linkUrl} className="text-[#00a98f] font-semibold flex items-center gap-1 hover:underline">
                    {info.linkText} <FaArrowRight />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}