import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FindPolicy() {
  const [policyNumber, setPolicyNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [step, setStep] = useState(1);

  const handleContinue = (e) => {
    e.preventDefault();
    if (policyNumber && zipCode) setStep(2);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="container mx-auto px-4 py-12 md:py-16">
        
        {/* Stepper */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`rounded-full w-10 h-10 flex items-center justify-center border-2 font-bold transition-colors ${step >= s ? "border-[#00a98f] bg-[#00a98f] text-white" : "border-gray-300 text-gray-400"}`}>
                {s}
              </div>
              <span className={`ml-2 text-sm font-semibold ${step >= s ? "text-[#00a98f]" : "text-gray-400"}`}>
                {s === 1 ? "Locate" : s === 2 ? "Verify" : "Access"}
              </span>
              {s < 3 && <div className="border-t-2 border-gray-300 w-6 md:w-16 ml-2 md:mx-4"></div>}
            </div>
          ))}
        </div>

        {/* Dynamic Form Sections */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 w-full max-w-lg mx-auto">
          
          {/* STEP 1: Find Policy */}
          {step === 1 && (
            <form onSubmit={handleContinue}>
              <h2 className="text-2xl font-bold text-[#0B2545] mb-2">Locate Your Policy</h2>
              <p className="text-gray-500 mb-6 text-sm">Enter your details to access your InsureCareCenter account.</p>
              
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Policy Number</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00a98f] outline-none transition" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} required placeholder="Enter policy number" />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">ZIP Code</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00a98f] outline-none transition" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required placeholder="Enter ZIP code" />
              </div>
              
              <button type="submit" className="w-full p-3 bg-[#00a98f] hover:bg-[#008f7a] text-white rounded-lg font-bold transition shadow-md">
                Continue
              </button>
            </form>
          )}

          {/* STEP 2: Verification */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-[#0B2545] mb-4">Security Verification</h2>
              <p className="text-gray-600 mb-6">Please confirm that you are the primary policyholder for account: <span className="font-bold text-[#00a98f]">{policyNumber}</span></p>
              
              <button onClick={() => setStep(3)} className="w-full p-3 bg-[#00a98f] hover:bg-[#008f7a] text-white rounded-lg font-bold transition shadow-md">
                Verify & Continue
              </button>
              <button onClick={() => setStep(1)} className="w-full mt-4 text-gray-500 hover:text-red-600 transition underline text-sm">
                Go Back
              </button>
            </div>
          )}

          {/* STEP 3: ID Cards */}
          {step === 3 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#00a98f] mb-4">Policy Access</h2>
              <p className="mb-6 text-gray-600">Your policy has been successfully verified. You can now download your digital ID cards below.</p>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300 mb-6">
                <p className="text-sm font-semibold text-gray-700">Digital ID Card Ready</p>
                <button className="mt-4 px-6 py-2 bg-[#0B2545] text-white rounded-lg font-bold hover:bg-[#081a32] transition">
                  Download PDF
                </button>
              </div>
              
              <button onClick={() => setStep(2)} className="text-gray-500 hover:text-red-600 transition underline text-sm">
                Back to verification
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}