import React from "react";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa";

export default function TermsOfUse() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex-1 bg-slate-50 font-sans text-slate-700">
      
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-100 py-3 px-4 md:px-12 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link to="/" className="text-[#00a98f] hover:underline font-medium">Home</Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#0B2545] font-bold">Terms of Use</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
        
        {/* Title */}
        <div className="mb-10 border-b border-slate-200 pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#00a98f] mb-2">
            Terms of Use
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Column: Table of Contents */}
          <div className="w-full lg:w-1/4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm lg:sticky lg:top-28 space-y-4">
            <h3 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider border-b pb-2 flex items-center gap-2">
              <FaGavel className="text-[#00a98f]" /> Document Sections
            </h3>
            <ul className="space-y-3 text-xs font-bold text-slate-600">
              {["Scope of Use", "Product Eligibility", "Warranty Disclaimers", "Limitation of Liability", "Account Security", "Paperless Terms", "Mobile App Regulations"].map((title, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(["scope", "eligibility", "warranties", "liability", "registration", "paperless", "mobile"][index])} 
                    className="hover:text-[#00a98f] transition text-left block w-full"
                  >
                    {String(index + 1).padStart(2, '0')}. {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Legal Content */}
          <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-sm space-y-10 text-sm md:text-base leading-relaxed text-slate-600">
            
            <p className="font-medium text-[#0B2545] bg-[#00a98f]/5 p-6 rounded-xl border-l-4 border-[#00a98f]">
              By installing and using the InsureCareCenter App, or by accessing our website, you accept and agree to follow these legally binding Terms. If you do not agree, please discontinue use immediately.
            </p>

            {[
              { id: "scope", title: "01. Scope of Use", text: "We invite you to use the InsureCareCenter digital platforms for your informational and account management needs. You agree to use these tools only for lawful, non-commercial purposes." },
              { id: "eligibility", title: "02. Product Eligibility", text: "Product availability varies by region. InsureCareCenter reserves the right to evaluate individual policyholder qualifications at our absolute discretion based on underwriting guidelines." },
              { id: "warranties", title: "03. Warranty Disclaimers", text: "Our digital services and calculators are provided 'AS IS' and 'AS AVAILABLE' without warranties of any kind. We do not guarantee uninterrupted access." },
              { id: "liability", title: "04. Limitation of Liability", text: "InsureCareCenter shall not be held accountable for peripheral damages, service outages, or technical delays resulting from your interaction with our digital interfaces." },
              { id: "registration", title: "05. Account Security", text: "You are responsible for maintaining the confidentiality of your login credentials. You assume full liability for all actions performed through your InsureCareCenter account." },
              { id: "paperless", title: "06. Paperless Terms", text: "By opting for paperless delivery, you consent to receive electronic versions of policy documents, bills, and notices. This satisfies all legal requirements for document distribution." },
              { id: "mobile", title: "07. Mobile App Regulations", text: "By enabling biometric features on the InsureCareCenter app, you authorize anyone with access to your device to potentially view your policy information. Please manage your device security accordingly." }
            ].map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-3">
                <h2 className="text-xl font-bold text-[#00a98f] border-b border-slate-100 pb-2">{section.title}</h2>
                <p>{section.text}</p>
              </section>
            ))}

          </div>
        </div>
      </main>
    </div>
  );
}