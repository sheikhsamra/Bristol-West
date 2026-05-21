import React, { useState } from "react";
import { Link } from "react-router-dom";

// ... (imports same rahenge)

export default function FindPolicy() {
  const [policyNumber, setPolicyNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [step, setStep] = useState(1);

  const handleContinue = (e) => {
    e.preventDefault();
    if (policyNumber && zipCode) setStep(2);
  };

  return (
    <main className="min-h-screen bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-6 md:py-10">
        
        {/* Stepper (Same rahega) */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`rounded-full w-8 h-8 flex items-center justify-center border-2 ${step >= s ? "border-[#00a98f] text-[#00a98f]" : "border-gray-400 text-gray-400"}`}>
                {s}
              </div>
              <span className={`ml-2 text-xs md:text-sm font-semibold ${step >= s ? "text-[#00a98f]" : "text-gray-400"}`}>
                {s === 1 ? "Find" : s === 2 ? "Verify" : "ID Cards"}
              </span>
              {s < 3 && <div className="border-t-2 border-gray-300 w-4 md:w-12 ml-2 md:mx-4"></div>}
            </div>
          ))}
        </div>

        {/* Dynamic Form Sections */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full max-w-lg mx-auto">
          
          {/* STEP 1: Find Policy */}
          {step === 1 && (
            <form onSubmit={handleContinue}>
              <h2 className="text-xl md:text-2xl font-bold text-[#00a98f] mb-6">Locate Your Policy</h2>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Policy Number</label>
                <input type="text" className="w-full p-3 border rounded focus:ring-2 focus:ring-[#00a98f] outline-none" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} required />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">ZIP Code</label>
                <input type="text" className="w-full p-3 border rounded focus:ring-2 focus:ring-[#00a98f] outline-none" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
              </div>
              <button type="submit" className="w-full p-3 bg-[#00a98f] text-white rounded font-semibold">Continue</button>
            </form>
          )}

          {/* STEP 2: Verification */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-[#00a98f] mb-4">Verification</h2>
              <p className="text-gray-600 mb-6">Please verify your details for policy: <span className="font-bold">{policyNumber}</span></p>
              <button onClick={() => setStep(3)} className="w-full p-3 bg-[#00a98f] text-white rounded font-semibold">Verify & Continue</button>
              <button onClick={() => setStep(1)} className="w-full mt-3 text-red-600 underline">Back</button>
            </div>
          )}

          {/* STEP 3: ID Cards */}
          {step === 3 && (
            <div className="text-center">
              <h2 className="text-xl font-bold text-[#00a98f] mb-4">ID Cards</h2>
              <p className="mb-6">Your policy is verified. Here are your ID cards:</p>
              <div className="bg-gray-100 p-4 rounded border">ID Card Image/Link Placeholder</div>
              <button onClick={() => setStep(2)} className="w-full mt-6 text-red-600 underline">Back</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}