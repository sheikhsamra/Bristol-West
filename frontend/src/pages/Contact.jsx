import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelopeOpenText, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex-1 bg-slate-50 font-sans text-slate-700">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 px-4 md:px-12 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link to="/" className="text-[#00a98f] hover:underline font-medium">Home</Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-500 font-medium">Contact Us</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-10 border-b-2 border-[#00a98f]/20 pb-4">
          Contact InsureCareCenter
        </h1>

        {/* Directory Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Offices */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="bg-[#00a98f]/10 p-4 rounded-full mb-4">
              <FaMapMarkerAlt className="text-2xl text-[#00a98f]" />
            </div>
            <h2 className="text-lg font-bold text-[#0B2545] uppercase tracking-wide mb-6">Our Offices</h2>
            <div className="text-sm space-y-6 text-slate-600">
              <div>
                <p className="font-bold text-[#0B2545]">Claims Department</p>
                <p>InsureCareCenter Claims Service</p>
                <p>PO Box 258806, Oklahoma City, OK 73125</p>
              </div>
              <div>
                <p className="font-bold text-[#0B2545]">Corporate Headquarters</p>
                <p>InsureCareCenter Group</p>
                <p>PO Box 258806, Oklahoma City, OK 73124</p>
              </div>
            </div>
          </div>

          {/* Card 2: Payments */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="bg-[#00a98f]/10 p-4 rounded-full mb-4">
              <FaEnvelopeOpenText className="text-2xl text-[#00a98f]" />
            </div>
            <h2 className="text-lg font-bold text-[#0B2545] uppercase tracking-wide mb-6">Payments</h2>
            <div className="text-sm space-y-6 text-slate-600">
              <div>
                <p className="font-bold text-[#0B2545]">West Region Payments</p>
                <p>InsureCareCenter Support</p>
                <p>PO Box 7142, Pasadena, CA 91109</p>
              </div>
              <div>
                <p className="font-bold text-[#0B2545]">Central & East Payments</p>
                <p>InsureCareCenter Support</p>
                <p>PO Box 371329, Pittsburgh, PA 15250</p>
              </div>
            </div>
          </div>

          {/* Card 3: Support */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="bg-[#00a98f]/10 p-4 rounded-full mb-4">
              <FaPhoneAlt className="text-2xl text-[#00a98f]" />
            </div>
            <h2 className="text-lg font-bold text-[#0B2545] uppercase tracking-wide mb-6">Support</h2>
            <div className="text-sm space-y-4 text-slate-600">
              <div>
                <p className="font-bold text-[#0B2545]">24/7 Payment Line</p>
                <p className="text-[#ff5100] font-bold text-base">1-800-INSURE-CARE</p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-[#0B2545]">Support Hours (CT)</p>
                <p>Mon - Fri: 7:00AM - 7:00PM</p>
                <p>Sat: 8:00AM - 3:00PM</p>
              </div>
              <div className="pt-4 space-y-3">
                <Link to="/claims" className="text-[#00a98f] hover:underline font-bold block uppercase tracking-tight">Claims Help &rarr;</Link>
                <Link to="/faq" className="text-[#00a98f] hover:underline font-bold block uppercase tracking-tight">Help Center &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}