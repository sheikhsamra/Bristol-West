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
          <span className="text-slate-500 font-medium">About Us</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Core Narrative Content */}
          <div className="flex-[2] space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B2545] border-b-2 border-slate-200 pb-3">
              About Us
            </h1>

            {/* Section 1: History */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                Our Foundation & Growth
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                Established as a private passenger automobile insurance carrier, our organization began its operations with a commitment to providing reliable, comprehensive coverage solutions. Over the decades, we have consistently expanded our operational reach, adapting to changing market needs and securing consumer trust across multiple state domains.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                Today, our personal auto insurance policies are widely available to consumers through a dedicated network of certified independent agents and brokers nationwide. We continue to introduce robust commercial insurance programs across distinct territories, ensuring sustainable long-term asset security for all our clients.
              </p>
            </section>

            {/* Section 2: Group Member Alliance */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                Strategic Group Integration
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                As a proud member of an industry-leading collective financial group, we represent one of the nation's premier property and casualty coverage networks. This strategic backing empowers us to deliver robust home, life, specialty, commercial, and auto asset protection services to over 10 million households through specialized representation.
              </p>
            </section>

            {/* Section 3: Vision statement */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                Client-First Delivery Model
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                Whether you are a regular policyholder seeking dependable security or a certified distribution broker delivering modern asset risk assessments, our focus remains on providing excellent client-centered care. We leverage digital account integrations, simplified automated payment frameworks, and rapid resolution architectures to eliminate complexities.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                For our valued account holders, we offer competitive pricing models backed by proactive support teams. From modern electronic paperless document deliveries to instantaneous mobile billing options, we build intuitive structural utilities that seamlessly support your modern lifecycle demands.
              </p>
            </section>
          </div>

          {/* Right Column: Supplementary Sidebar Resources */}
          <div className="flex-1 w-full space-y-6 lg:sticky lg:top-28">
            
            {/* Box 1: Reference Directory */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-[#00a98f]">🔗</span> Additional Information
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a href="#institute" className="text-[#00a98f] hover:text-[#008f79] hover:underline block leading-snug">
                    Highway Loss Data Institute & Safety Frameworks
                  </a>
                </li>
                <li>
                  <a href="#traffic" className="text-[#00a98f] hover:text-[#008f79] hover:underline block leading-snug">
                    National Highway Traffic Safety Resource Guide
                  </a>
                </li>
                <li>
                  <a href="#crime" className="text-[#00a98f] hover:text-[#008f79] hover:underline block leading-snug">
                    National Financial Asset Crime Bureau Directory
                  </a>
                </li>
                <li>
                  <a href="#coalition" className="text-[#00a98f] hover:text-[#008f79] hover:underline block leading-snug">
                    Coalition Against Commercial Insurance Infractions
                  </a>
                </li>
              </ul>
            </div>

            {/* Box 2: Career Call-to-action */}
            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
              <h3 className="text-base font-bold text-emerald-950 mb-2">
                Become a Partner
              </h3>
              <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                Are you an independent agent or financial broker looking to distribute top-tier coverage options? Join our professional platform.
              </p>
              <a 
                href="#get-appointed" 
                className="inline-block text-xs font-bold text-white bg-[#00a98f] hover:bg-[#008f79] px-4 py-2 rounded-full transition shadow-xs"
              >
                Get Appointed Now
              </a>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}