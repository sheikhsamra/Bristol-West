import React from "react";

export default function AutoInsuranceQuoteBanner() {
  return (
    // 'w-full' aur 'px-4' mobile par side se space dega
    <section className="bg-[#00a98f] text-white py-12 px-4 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Bristol West works to make Auto Insurance easy
        </h1>
        <p className="text-base md:text-xl mb-6">
          Get a Car Insurance quote today
        </p>
        
        {/* Mobile par flex-col aur desktop par flex-row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
          <input
            type="text"
            placeholder="Enter your Zip Code"
            className="px-4 py-3 rounded-md border border-gray-300 text-gray-800 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-md font-semibold text-white transition-colors duration-200">
            Start Quote
          </button>
        </div>
        
        <p className="text-sm underline cursor-pointer hover:text-orange-200">
          Retrieve a Saved Quote
        </p>
      </div>
    </section>
  );
}