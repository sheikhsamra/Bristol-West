import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AutoInsuranceQuoteBanner() {
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();

  const handleStartQuote = () => {
    if (/^\d{5}$/.test(zipCode)) {
      navigate(`/?zip=${zipCode}`);
    } else {
      alert("Please enter a valid 5-digit USA Zip Code");
    }
  };

  return (
    <section className="bg-[#00a98f] text-white py-16 px-4 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Insure Care Center makes Auto Insurance easy
        </h1>
        <p className="text-lg md:text-2xl mb-8 opacity-90">
          Get your personalized car insurance quote today
        </p>
        
        {/* Input and Button Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter your Zip Code"
            maxLength="5"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ""))}
            className="px-5 py-4 rounded-lg border-none text-gray-800 w-full sm:w-72 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg shadow-sm"
          />
          <button 
            onClick={handleStartQuote}
            className="w-full sm:w-auto px-10 py-4 bg-[#0B2545] hover:bg-[#081a32] rounded-lg font-bold text-white transition-all duration-200 text-lg shadow-lg"
          >
            Start Quote
          </button>
        </div>
        
        <button className="text-sm md:text-base underline cursor-pointer hover:text-gray-200 transition">
          Retrieve a Saved Quote
        </button>
      </div>
    </section>
  );
}