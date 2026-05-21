import React from "react";
import { FaCarCrash, FaCarSide, FaFileInvoiceDollar } from "react-icons/fa";
import heroAuto from "../assets/auto.jpg"; // replace with your hero image path
import CoverageSlides from "../components/common/coverageSlides";
import CustomerBenefits from "../components/common/CustomerBenefits";
import CommonCarInsurance from "../components/common/CommonCarInsurance";

export default function AutoInsurance101() {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="w-full h-64 md:h-96 overflow-hidden">
        <img
          src={heroAuto}
          alt="Auto Insurance Hero"
          className="w-full h-full object-cover rounded-b-3xl"
        />
      </section>

      {/* Main Heading & Intro */}
      <section className="text-center px-4 md:px-16 py-12 ">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00a98f] mb-6 ">
          Auto Insurance 101
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed ">
          Bristol West® provides comprehensive auto insurance options at
          affordable rates for a wide variety of drivers. Whether you have a
          less-than-perfect driving record, no prior coverage, traffic
          violations, or even a DUI, we have solutions to keep you protected and
          make insurance simple.
        </p>
        <p className="text-[#00a98f] mt-4 font-semibold">
          You can be confident knowing Bristol West has coverage for you.
        </p>
      </section>

      {/* Insurance Types */}
      <section className="px-4 md:px-16 pb-16 max-w-5xl mx-auto space-y-12">
        {/* Liability */}
        <article className="flex items-start gap-4">
          <FaFileInvoiceDollar className="text-[#00a98f] text-4xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-[#00a98f] mb-2">
              Liability Insurance
            </h2>
            <p className="text-gray-700">
              Helps cover the cost of another driver’s property and bodily injury
              expenses if you’re found at fault in an accident.
            </p>
          </div>
        </article>

        {/* Comprehensive */}
        <article className="flex items-start gap-4">
          <FaCarSide className="text-[#00a98f] text-4xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-[#00a98f] mb-2">
              Comprehensive Insurance
            </h2>
            <p className="text-gray-700">
              Provides coverage for physical damage from events beyond your
              control, including theft, vandalism, or natural events.
            </p>
          </div>
        </article>

        {/* Collision */}
        <article className="flex items-start gap-4">
          <FaCarCrash className="text-[#00a98f] text-4xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-[#00a98f] mb-2">
              Collision Insurance
            </h2>
            <p className="text-gray-700">
              Helps cover damages when your vehicle collides with another car or
              object.
            </p>
          </div>
        </article>
      </section>

        <CoverageSlides />
        <CustomerBenefits/>
        <CommonCarInsurance/>
    </div>
  );
}