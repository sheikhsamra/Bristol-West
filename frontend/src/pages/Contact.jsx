import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelopeOpenText, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="flex-1 bg-slate-50 font-sans text-slate-700">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-200/60 border-b border-slate-300/50 py-3 px-4 md:px-12 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link to="/" className="text-[#00a98f] hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-500 font-medium">Contact Us</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-10 border-b-2 border-slate-200 pb-3">
          Contact Us
        </h1>

        {/* Directory Cards Section (As per your screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Addresses */}
          <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <FaMapMarkerAlt className="text-2xl text-[#0B2545]" />
            </div>
            <h2 className="text-lg font-bold text-[#0B2545] uppercase tracking-wide mb-6">Addresses</h2>
            <div className="text-sm space-y-6 text-slate-600">
              <div>
                <p className="font-bold text-slate-900">Claims</p>
                <p>Bristol West Claims Service</p>
                <p>PO Box 258806</p>
                <p>Oklahoma City, OK 73125-8806</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">General Mail</p>
                <p>Bristol West Insurance Group</p>
                <p>PO Box 258806</p>
                <p>Oklahoma City, OK 73124-8834</p>
              </div>
            </div>
          </div>

          {/* Card 2: Mailing & Payment */}
          <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <FaEnvelopeOpenText className="text-2xl text-[#0B2545]" />
            </div>
            <h2 className="text-lg font-bold text-[#0B2545] uppercase tracking-wide mb-6">Mailing & Payment</h2>
            <div className="text-sm space-y-6 text-slate-600">
              <div>
                <p className="font-bold text-slate-900">Customers in AZ, CA, NV, TX</p>
                <p>Bristol West Insurance Group</p>
                <p>PO Box 7142</p>
                <p>Pasadena, CA 91109-7142</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">All other states</p>
                <p>Bristol West Insurance Group</p>
                <p>PO Box 371329</p>
                <p>Pittsburgh, PA 15250-7329</p>
              </div>
            </div>
          </div>

          {/* Card 3: Phone/Fax */}
          <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <FaPhoneAlt className="text-2xl text-[#0B2545]" />
            </div>
            <h2 className="text-lg font-bold text-[#0B2545] uppercase tracking-wide mb-6">Phone/Fax</h2>
            <div className="text-sm space-y-4 text-slate-600">
              <div>
                <p className="font-bold text-slate-900">24/7 Phone Pay & Billing Line</p>
                <p className="text-[#00a98f] font-bold text-base">1-888-888-0080</p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-slate-900">Customer Service</p>
                <p>Monday thru Friday</p>
                <p>7:00AM to 7:00PM (Central Time)</p>
                <p>Saturday</p>
                <p>8:00AM to 3:00PM (Central Time)</p>
              </div>
              <div className="pt-4 space-y-2">
                <Link to="/claims" className="text-[#00a98f] hover:underline font-bold block uppercase">Claims</Link>
                <Link to="/faq" className="text-[#00a98f] hover:underline font-bold block uppercase">Claims contact information</Link>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}