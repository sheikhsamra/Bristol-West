import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import auto2 from "../../assets/auto2.jpg";

const coverageSlides = [
  { 
    heading: "Liability & Property Coverage", 
    text: "Protects your financial future by covering costs if you are found legally responsible for injury or property damage to others." 
  },
  { 
    heading: "Rental Reimbursement", 
    text: "Stay on the move. We cover your rental car expenses up to $50 per day for 30 days while your vehicle is being repaired after a covered loss." 
  },
  { 
    heading: "Medical Expense Protection", 
    text: "Prioritize your health. This coverage assists with medical costs for you and your passengers following an accident (up to $10,000)." 
  },
  { 
    heading: "Roadside & Towing Assistance", 
    text: "Never feel stranded. We provide professional towing and emergency roadside assistance whenever you need it most." 
  },
  { 
    heading: "Uninsured/Underinsured Motorist", 
    text: "We have your back. This coverage provides essential protection if you are in an accident with a driver who lacks sufficient insurance." 
  },
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
          Premium Coverage Options
        </h1>
        <div className="w-full h-56 md:h-96 overflow-hidden rounded-xl shadow-lg">
          <img
            src={auto2}
            alt="InsureCareCenter Coverage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Carousel */}
      <div className="relative bg-gray-50 py-10 rounded-lg overflow-hidden border border-gray-100">
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
        <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10 transition">
          <FaChevronLeft className="text-[#00a98f]" />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10 transition">
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