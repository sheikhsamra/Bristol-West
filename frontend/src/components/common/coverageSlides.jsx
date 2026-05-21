import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import auto2 from "../../assets/auto2.jpg";

const coverageSlides = [
  { heading: "Bodily Injury and Property Damage", text: "This covers your legal responsibility for an accident where someone else is injured or there is damage to someone else’s property." },
  { heading: "Rental Reimbursement", text: "If you rent a car after you have a covered loss, we will put up to $50 per day back in your pocket for up to 30 days." },
  { heading: "Medical Payments", text: "This coverage can pay for your medical care due to a car accident (up to $10,000)." },
  { heading: "Towing and Roadside Service", text: "If your vehicle needs towing or assistance on the road, we will take care of the cost for you." },
  { heading: "Uninsured/Underinsured Motorists", text: "This helps protect you if someone else is responsible for an accident you’re in and the other person has no or minimal insurance." },
];

export default function TextSliderWithHero() {
  const [current, setCurrent] = useState(0);
  const length = coverageSlides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  return (
    <section className="max-w-5xl mx-auto my-12 px-4">
      {/* Hero Image Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-[#00a98f] mb-6">
          More Coverage Options:
        </h1>
        {/* Responsive Image Container */}
        <div className="w-full h-56 md:h-96 overflow-hidden rounded-xl shadow-lg">
          <img
            src={auto2}
            alt="Coverage Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Carousel */}
      <div className="relative bg-gray-50 py-10 rounded-lg overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {coverageSlides.map((slide, index) => (
            <div key={index} className="min-w-full flex flex-col items-center text-center px-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#00a98f] mb-3">{slide.heading}</h3>
              <p className="text-gray-700 text-base md:text-lg max-w-xl">{slide.text}</p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
          <FaChevronLeft className="text-[#00a98f]" />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
          <FaChevronRight className="text-[#00a98f]" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {coverageSlides.map((_, index) => (
            <span key={index} className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-[#00a98f]" : "bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}