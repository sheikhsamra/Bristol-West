import React from "react";
import { FaCreditCard, FaCarSide, FaExclamationTriangle, FaShieldAlt } from "react-icons/fa";
import heroImage from "../assets/whyus.jpg"; 
import benefit1 from "../assets/whyus3.jpg"; 
import benefit2 from "../assets/whyus4.jpeg"; 
import benefit3 from "../assets/whyus5.png"; 

export default function WhyInsureCare() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="w-full h-64 md:h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="InsureCareCenter"
          className="w-full h-full object-cover rounded-b-3xl"
        />
      </section>

      {/* Heading & Intro */}
      <section className="text-left px-4 md:px-16 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00a98f] mb-6">
          How Insure Care Center Supports You
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          InsureCareCenter has been providing reliable protection for drivers for years. 
          We are committed to delivering high-quality auto insurance solutions that fit 
          your lifestyle and your budget.
        </p>
        <p className="text-gray-700 mt-4">
          Navigating insurance can be complex—we are here to provide the clarity you need.
        </p>
      </section>

      {/* Scenario Section */}
      <section className="px-4 md:px-16 pb-16 max-w-5xl mx-auto space-y-12">
        {/* Scenario 1 */}
        <article>
          <h2 className="text-2xl font-semibold text-[#00a98f] mb-3 flex items-center gap-3">
            <FaCreditCard className="text-3xl" /> Scenario #1: Budget and Credit Challenges
          </h2>
          <p className="text-gray-700 mb-2 font-medium">Is it possible to get coverage if my credit score is less than perfect?</p>
          <p className="text-[#00a98f] font-bold text-xl">The Solution</p>
          <p className="text-gray-700">
            At InsureCareCenter, we understand that everyone faces financial hurdles. 
            We specialize in helping customers find accessible coverage options regardless of their credit history.
          </p>
        </article>

        {/* Scenario 2 */}
        <article>
          <h2 className="text-2xl font-semibold text-[#00a98f] mb-3 flex items-center gap-3">
            <FaCarSide className="text-3xl" /> Scenario #2: New to Auto Insurance
          </h2>
          <p className="text-gray-700 mb-2 font-medium">I'm worried about finding affordable coverage without prior history.</p>
          <p className="text-[#00a98f] font-bold text-xl">The Solution</p>
          <p className="text-gray-700">
            We simplify the process for new drivers. Whether you have minimal driving history or no prior coverage, 
            we help you secure the protection you need. Plus, we offer various discounts for 
            paperless billing, automatic payments, and safe driving records.
          </p>
        </article>

        {/* Scenario 3 */}
        <article>
          <h2 className="text-2xl font-semibold text-[#00a98f] mb-3 flex items-center gap-3">
            <FaExclamationTriangle className="text-3xl" /> Scenario #3: Driving Record Concerns
          </h2>
          <p className="text-gray-700 mb-2 font-medium">Can I still get insured if I have traffic violations or a DUI?</p>
          <p className="text-[#00a98f] font-bold text-xl">The Solution</p>
          <p className="text-gray-700">
            We believe in second chances. InsureCareCenter provides options for drivers who 
            may have accidents, violations, or a DUI on their record, ensuring you stay 
            protected on the road.
          </p>
        </article>
      </section>

      {/* Customer Benefits */}
      <section className="px-4 md:px-16 pb-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#00a98f] mb-10">
          Why Our Customers Choose Us:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { title: "24/7 Policy Access", desc: "Manage documents, ID cards, and billing anytime via our portal." },
            { title: "Reliable Claims Support", desc: "Track your claim progress online with our streamlined support system." },
            { title: "Flexible Payment Plans", desc: "Low down payments and plans tailored to your financial needs." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <FaShieldAlt className="text-[#00a98f] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}