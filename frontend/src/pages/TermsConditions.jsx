import React from "react";
import { Link } from "react-router-dom";
import { FaGavel, FaFileContract, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

export default function TermsOfUse() {
  // Function to smoothly handle jump links inside the document
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex-1 bg-slate-50 font-sans text-slate-700">
      
      {/* Breadcrumb Header */}
      <div className="bg-slate-200/60 border-b border-slate-300/50 py-3 px-4 md:px-12 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link to="/" className="text-[#00a98f] hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-500 font-medium">Terms of Use</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
        
        {/* Title Banner */}
        <div className="mb-10 border-b border-slate-200 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-2">
            Terms of Use
          </h1>
          {/* <p className="text-xs md:text-sm text-slate-400 italic">
            Last Updated: May 2026
          </p> */}
        </div>

        {/* 2-Column Desktop Architecture */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Column: Fixed Sticky Table of Contents Directory */}
          <div className="w-full lg:w-1/4 bg-white border border-slate-200 rounded-lg p-5 shadow-sm lg:sticky lg:top-28 space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b pb-2 flex items-center gap-2">
              <FaGavel className="text-[#00a98f]" /> Document Sections
            </h3>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <button onClick={() => scrollToSection("scope")} className="hover:text-[#00a98f] hover:underline text-left block w-full">
                  1. Scope of Use & Rules
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("eligibility")} className="hover:text-[#00a98f] hover:underline text-left block w-full">
                  2. Product Eligibility
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("warranties")} className="hover:text-[#00a98f] hover:underline text-left block w-full">
                  3. Disclaimers & Warranties
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("liability")} className="hover:text-[#00a98f] hover:underline text-left block w-full">
                  4. Limitation of Liability
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("registration")} className="hover:text-[#00a98f] hover:underline text-left block w-full">
                  5. Account Security
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("paperless")} className="hover:text-[#00a98f] hover:underline text-left block w-full">
                  6. Paperless Terms
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("mobile")} className="hover:text-[#00a98f] hover:underline text-left block w-full">
                  7. Mobile App Regulations
                </button>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400 leading-normal">
              Please read these terms carefully before accessing InsureCareCenter.com or our mobile application.
            </div>
          </div>

          {/* Right Column: Complete Legal Scroll Feed */}
          <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 md:p-10 shadow-sm space-y-8 text-sm md:text-base leading-relaxed text-slate-600">
            
            <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-md border-l-4 border-[#00a98f] text-sm">
              By installing and using the InsureCareCenter App, or by accessing our website, you accept and agree to follow these legally binding Terms. If you do not agree, please discontinue use immediately.
            </p>

            {/* Sections Content */}
            <section id="scope" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b pb-1">01. Scope of Use</h2>
              <p>We invite you to use the InsureCareCenter digital platforms for your informational and account management needs. You agree to use these tools only for lawful, non-commercial purposes.</p>
            </section>

            <section id="eligibility" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b pb-1">02. Product Eligibility</h2>
              <p>Product availability varies by region. InsureCareCenter reserves the right to evaluate individual policyholder qualifications at our absolute discretion based on underwriting guidelines.</p>
            </section>

            <section id="warranties" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b pb-1">03. Warranty Disclaimers</h2>
              <p className="bg-amber-50 p-3 rounded border border-amber-200 text-amber-900">Our digital services and calculators are provided "AS IS" and "AS AVAILABLE" without warranties of any kind.</p>
            </section>

            <section id="liability" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b pb-1">04. Limitation of Liability</h2>
              <p>InsureCareCenter shall not be held accountable for peripheral damages, service outages, or technical delays resulting from your interaction with our digital interfaces.</p>
            </section>

            <section id="registration" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b pb-1">05. Account Security</h2>
              <p>You are responsible for maintaining the confidentiality of your login credentials. You assume full liability for all actions performed through your InsureCareCenter account.</p>
            </section>

            <section id="paperless" className="scroll-mt-24 space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b pb-1">06. Paperless Terms</h2>
              <p>By opting for paperless delivery, you consent to receive electronic versions of policy documents, bills, and notices. This satisfies all legal requirements for document distribution.</p>
            </section>

            <section id="mobile" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b pb-1">07. Mobile App Regulations</h2>
              <p>By enabling biometric features (Face ID/Fingerprint) on the InsureCareCenter app, you authorize anyone with access to your device to potentially view your policy information. Please manage your device security accordingly.</p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}