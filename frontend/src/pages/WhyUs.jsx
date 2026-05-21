import React from "react";
import heroImage from "../assets/whyus.jpg"; // Hero image at the top
import benefit1 from "../assets/whyus3.jpg"; // 24/7 access image
import benefit2 from "../assets/whyus4.jpeg"; // Claims service image
import benefit3 from "../assets/whyus5.png"; // Flexible payments image

export default function WhyBristol() {
  return (
    <div className="font-sans bg-gray-50">

      {/* Hero Section */}
      <section className="w-full h-64 md:h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="Bristol West Hero"
          className="w-full h-full object-cover rounded-b-3xl"
        />
      </section>

      {/* Heading & Intro */}
      <section className="text-left px-4 md:px-16 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00a98f] mb-6">
          How Bristol West Can Help You
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Bristol West® has been serving drivers just like you for over 45 years. 
          As a member of the Farmers Insurance Group of Companies®, we’re committed 
          to providing quality auto insurance at an affordable price.
        </p>
        <p className="text-gray-700 mt-4">
          You may have questions when shopping for auto insurance — and we have the answers.
        </p>
      </section>

      {/* Scenario Section */}
      <section className="px-4 md:px-16 pb-16 max-w-5xl mx-auto space-y-12">
        {/* Scenario 1 */}
        <article>
          <h2 className="text-2xl font-semibold text-[#00a98f] mb-3 flex items-center gap-2">
            <span className="text-5xl">💳</span> Scenario #1: I’ve missed a few payments
          </h2>
          <p className="text-gray-700 mb-2">
            My credit score isn’t where I’d like it to be. Will I be able to get auto insurance?
          </p>
          <p className="text-[#00a98f] font-semibold text-2xl">Solution</p>
          <p className="text-gray-700">
            Bristol West has helped customers with poor credit — and no credit — find the auto insurance they’re looking for.
            If you’re facing this challenge, we can guide you toward the right coverage.
          </p>
        </article>

        {/* Scenario 2 */}
        <article>
          <h2 className="text-2xl font-semibold text-[#00a98f] mb-3 flex items-center gap-2">
            <span className="text-5xl">🚗</span> Scenario #2: I’ve never had car insurance
          </h2>
          <p className="text-gray-700 mb-2">
            I worry about finding good coverage at a reasonable price.
          </p>
          <p className="text-[#00a98f] font-semibold text-2xl">Solution</p>
          <p className="text-gray-700">
            We can help you get the auto insurance coverage you want whether you have no prior insurance, little or no driving history, or minimal prior coverage.
          </p>
          <p className="text-gray-700">
            We also provide discounts when you sign up for automatic payments, go paperless, maintain a good driving record, or purchase multiple policies from Bristol West, Farmers®, or Foremost® Insurance.
          </p>
        </article>

        {/* Scenario 3 */}
        <article>
          <h2 className="text-2xl font-semibold text-[#00a98f] mb-3 flex items-center gap-2">
            <span className="text-5xl">⚖️</span> Scenario #3: I have a DUI on my record
          </h2>
          <p className="text-gray-700 mb-2">
            Do I have auto insurance options?
          </p>
          <p className="text-[#00a98f] font-semibold text-2xl">Solution</p>
          <p className="text-gray-700">
            Bristol West may be able to help if you’ve had multiple traffic violations, accidents, or a DUI. We provide coverage options for a variety of challenging situations to ensure you stay protected.
          </p>
        </article>
      </section>

      {/* Customer Benefits */}
      <section className="px-4 md:px-16 pb-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#00a98f] mb-10">
          As a Bristol West Customer, You’ll Enjoy:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <img src={benefit1} alt="24/7 access" className="mb-4 rounded-lg" />
            <h3 className="font-semibold text-lg mb-2">Access to 24/7 Policy Information</h3>
            <p className="text-gray-700 text-sm">
              Our website and mobile app provide convenient, secure access to policy documents, ID cards, bill payments, and more.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <img src={benefit2} alt="Claims service" className="mb-4 rounded-lg" />
            <h3 className="font-semibold text-lg mb-2">Quality Claims Service</h3>
            <p className="text-gray-700 text-sm">
              File a claim easily and track its progress online. Our representatives are ready to help you get back on the road quickly.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <img src={benefit3} alt="Flexible payments" className="mb-4 rounded-lg" />
            <h3 className="font-semibold text-lg mb-2">Flexible Payment Options</h3>
            <p className="text-gray-700 text-sm">
              Pay your insurance premium easily with low down payments and convenient monthly plans. We accept debit, credit, and checks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}