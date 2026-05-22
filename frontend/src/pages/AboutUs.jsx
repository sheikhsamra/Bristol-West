import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="flex-1 bg-slate-50 font-sans text-slate-700">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-200/60 border-b border-slate-300/50 py-3 px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-xs md:text-sm text-slate-600 flex items-center gap-2">
          <Link to="/" className="text-[#00a98f] hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-500 font-medium">About InsureCareCenter</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Core Narrative Content */}
          <div className="flex-[2] space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B2545] border-b-2 border-slate-200 pb-3">
              About InsureCareCenter
            </h1>

            {/* Section 1: History */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                Our Commitment to Drivers
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                InsureCareCenter was founded on a simple premise: insurance should be reliable, 
                accessible, and easy to understand. We started with a focus on comprehensive 
                auto coverage and have grown into a trusted partner for drivers across the country. 
                Our mission is to provide peace of mind through every mile of your journey.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                Today, our policies are available through a network of dedicated independent agents 
                and brokers who share our commitment to customer success. We continue to innovate 
                our coverage programs to ensure that your assets are protected, no matter where 
                the road takes you.
              </p>
            </section>

            {/* Section 2: Group Member Alliance */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                A Partner You Can Trust
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                As part of a leading financial network, InsureCareCenter brings you the stability 
                of a national organization with the personalized service of a local partner. 
                Our alliance allows us to deliver a wide array of protection services—from 
                auto and home to specialty coverage—supporting millions of households with 
                dedication and integrity.
              </p>
            </section>

            {/* Section 3: Vision statement */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                Client-First Philosophy
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                Whether you are a long-term policyholder or a new member of the InsureCareCenter 
                family, our focus is always on you. We have invested in digital account tools, 
                automated payment options, and a rapid-response team to remove the stress 
                from insurance.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                We believe in making insurance seamless. From paperless document delivery to 
                instant mobile access, we provide the modern tools you need to manage your 
                coverage conveniently and confidently.
              </p>
            </section>
          </div>

          {/* Right Column: Supplementary Sidebar Resources */}
          <div className="flex-1 w-full space-y-6 lg:sticky lg:top-28">
            
            {/* Box 1: Reference Directory */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-[#00a98f]">🔗</span> Industry Resources
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a href="#" className="text-[#00a98f] hover:text-[#008f79] hover:underline block leading-snug">
                    Road Safety & Driver Education
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00a98f] hover:text-[#008f79] hover:underline block leading-snug">
                    Insurance Consumer Rights Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00a98f] hover:text-[#008f79] hover:underline block leading-snug">
                    National Insurance Bureau Directory
                  </a>
                </li>
              </ul>
            </div>

            {/* Box 2: Career Call-to-action */}
            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
              <h3 className="text-base font-bold text-emerald-950 mb-2">
                Join Our Network
              </h3>
              <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                Are you a broker or agent? Partner with InsureCareCenter to offer 
                premium coverage solutions to your clients.
              </p>
              <a 
                href="#" 
                className="inline-block text-xs font-bold text-white bg-[#00a98f] hover:bg-[#008f79] px-4 py-2 rounded-full transition shadow-xs"
              >
                Become a Partner
              </a>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}