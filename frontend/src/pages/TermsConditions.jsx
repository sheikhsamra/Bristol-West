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
          <p className="text-xs md:text-sm text-slate-400 italic">
            Last Updated: May 2022
          </p>
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
                  5. Account Security & Passwords
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("paperless")} className="hover:text-[#00a98f] hover:underline text-left block w-full">
                  6. Paperless Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("mobile")} className="hover:text-[#00a98f] hover:underline text-left block w-full">
                  7. Mobile App Regulations
                </button>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400 leading-normal">
              Please read these terms carefully before accessing BristolWest.com or the Mobile Application.
            </div>
          </div>

          {/* Right Column: Complete Legal Scroll Feed */}
          <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 md:p-10 shadow-sm space-y-8 text-sm md:text-base leading-relaxed text-slate-600">
            
            <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-md border-l-4 border-[#00a98f] text-sm">
              By installing and using the Mobile App, or by accessing the Web Site, you accept and agree to follow these legally binding Terms. If you do not agree, please uninstall the Mobile App and discontinue site usage immediately.
            </p>

            {/* Scope Section */}
            <section id="scope" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 border-b pb-1">
                <span className="text-[#00a98f] text-sm">01</span> Scope of Use
              </h2>
              <p>
                We invite you to view, use, copy and download materials at the Sites for your informational, non-commercial use, provided that you leave all the copyright notices intact. 
              </p>
              <p className="text-xs bg-slate-50 p-3 rounded text-slate-500 font-mono">
                Prohibited actions include: reverse engineering, deploying automated scrapers/bots, uploading malicious runtime bugs, reselling data packets, or performing actions in complete contradiction of regional administrative legal frameworks.
              </p>
            </section>

            {/* Eligibility Section */}
            <section id="eligibility" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 border-b pb-1">
                <span className="text-[#00a98f] text-sm">02</span> Eligibility & Professional Advice
              </h2>
              <p>
                Not all products or services highlighted are globally accessible across all United States regions. We reserve the exclusive right to evaluate individual policyholder qualifications at our absolute discretion.
              </p>
              <p>
                Furthermore, the general information index offered on our portals should never be substituted for official legal, accounting, tax, or professional asset assessment recommendations.
              </p>
            </section>

            {/* Warranties Section */}
            <section id="warranties" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 border-b pb-1">
                <span className="text-[#00a98f] text-sm">03</span> Warranty Disclaimers
              </h2>
              <p className="uppercase text-xs font-bold tracking-wide bg-amber-50 text-amber-900 p-3 rounded border border-amber-200">
                The sites and all underlying calculator frameworks are provided on an "AS IS" and "AS AVAILABLE" framework without warranties of any comprehensive variation, either implicit or explicitly detailed.
              </p>
            </section>

            {/* Liability Section */}
            <section id="liability" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 border-b pb-1">
                <span className="text-[#00a98f] text-sm">04</span> Limitation of Liability
              </h2>
              <p>
                Under no legal conditions (including direct breach of contract, tortuous actions, or corporate negligence) shall we be held accountable for peripheral damages, functional outages, transactional transmission delays, or sudden grid downfalls resulting from technical interactions.
              </p>
            </section>

            {/* Account Registration */}
            <section id="registration" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 border-b pb-1">
                <span className="text-[#00a98f] text-sm">05</span> Account Security & Registration
              </h2>
              <p>
                Authorized users must strictly preserve password confidentiality. Sharing credentials across unauthorized third-party channels is systematically barred. Account holders assume complete liability for all systematic actions and transactional requests initiated via their unique credentials.
              </p>
            </section>

            {/* Paperless Section */}
            <section id="paperless" className="scroll-mt-24 space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 border-b pb-1">
                <span className="text-[#00a98f] text-sm">06</span> Paperless Terms & Conditions
              </h2>
              <p>
                Enrolling in electronic document transfers is voluntary. By consenting, you acknowledge that electronic distributions (invoices, renewal alerts, claims packets) comply with complete legal communication mandates.
              </p>
              
              {/* Technical Requirement Box */}
              <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <FaShieldAlt className="text-[#00a98f]" /> System Compatibility Matrix
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-semibold block text-slate-700">OS Systems:</span>
                    Windows 10+, macOS Catalina or greater equivalents.
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-700">Browsers:</span>
                    Firefox 86+, Safari 14+, Chrome 89+, Edge 88+.
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                State Specific Disclosures: Legal cancellation or nonrenewal declarations will be dispatched electronically to users registered inside the state perimeters of Georgia, New York, and Tennessee.
              </p>
            </section>

            {/* Mobile App Section */}
            <section id="mobile" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 border-b pb-1">
                <span className="text-[#00a98f] text-sm">07</span> Mobile App & Biometric Scanner Provisions
              </h2>
              <p>
                Mobile connections remain subject to baseline carrier metrics. By enabling Touch ID, Face ID, or fingerprint authentication layouts, you grant programmatic permissions to individuals carrying saved profiles on your target mobile device to gain entryway into your files.
              </p>
              <p>
                All background geolocation and Bluetooth trackers run exclusively to personalize route guidance matrices and localize automated claims evaluation centers.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}