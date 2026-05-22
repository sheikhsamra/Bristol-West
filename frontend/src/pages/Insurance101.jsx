import React from "react";
import { FaCarCrash, FaCarSide, FaFileInvoiceDollar } from "react-icons/fa";
import heroAuto from "../assets/auto.jpg"; 
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
          alt="Auto Insurance Basics"
          className="w-full h-full object-cover rounded-b-3xl"
        />
      </section>

      {/* Main Heading & Intro */}
      <section className="text-center px-4 md:px-16 py-12 ">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00a98f] mb-6 ">
          Auto Insurance Made Simple
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed ">
          At InsureCareCenter, we believe every driver deserves access to high-quality 
          coverage at rates that make sense. Whether you are building your driving history, 
          managing past violations, or just looking for a more reliable partner, 
          we provide smart solutions tailored to your unique journey.
        </p>
        <p className="text-[#00a98f] mt-4 font-semibold">
          Your peace of mind is our priority at InsureCareCenter.
        </p>
      </section>

      {/* Insurance Types */}
      <section className="px-4 md:px-16 pb-16 max-w-5xl mx-auto space-y-12">
        {/* Liability */}
        <article className="flex items-start gap-4">
          <FaFileInvoiceDollar className="text-[#00a98f] text-4xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-[#00a98f] mb-2">
              Liability Protection
            </h2>
            <p className="text-gray-700">
              Covers costs related to another driver's property damage or medical 
              expenses if you are found legally responsible for an accident.
            </p>
          </div>
        </article>

        {/* Comprehensive */}
        <article className="flex items-start gap-4">
          <FaCarSide className="text-[#00a98f] text-4xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-[#00a98f] mb-2">
              Comprehensive Coverage
            </h2>
            <p className="text-gray-700">
              Provides security against non-collision incidents, including theft, 
              vandalism, fire, and weather-related damage.
            </p>
          </div>
        </article>

        {/* Collision */}
        <article className="flex items-start gap-4">
          <FaCarCrash className="text-[#00a98f] text-4xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-[#00a98f] mb-2">
              Collision Coverage
            </h2>
            <p className="text-gray-700">
              Helps repair or replace your vehicle if it is damaged following a 
              collision with another vehicle or a stationary object.
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