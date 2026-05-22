import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function MakePayment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    policyNumber: "",
    zipCode: "",
    amount: "",
    paymentMethod: "Credit Card",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_5j3wszh"; 
    const templateID = "template_nnnwp5w";
    const publicKey = "UmRqe2bSUX0LKDg00"; 

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      policyNumber: formData.policyNumber,
      zipCode: formData.zipCode,
      amount: formData.amount,
      paymentMethod: formData.paymentMethod,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert("🎉 Thank you! Your payment details have been submitted to InsureCareCenter.");
        setFormData({
          fullName: "",
          email: "",
          policyNumber: "",
          zipCode: "",
          amount: "",
          paymentMethod: "Credit Card",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Oops! Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          
          {/* Left Column: Form */}
          <div className="flex-1 p-8 md:p-12">
            <h1 className="text-2xl font-bold text-[#0B2545] mb-2">Secure Payment Portal</h1>
            <p className="text-sm text-slate-500 mb-8">
              Complete the form below to process your one-time payment for InsureCareCenter.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Policy Number*</label>
                  <input
                    type="text"
                    name="policyNumber"
                    placeholder="PO-12345"
                    value={formData.policyNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">ZIP Code*</label>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="12345"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Amount ($)*</label>
                  <input
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-[#00a98f] transition"
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="PayPal">PayPal</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#00a98f] hover:bg-[#008f79] text-white font-bold rounded-lg transition duration-200 mt-4 shadow-md"
              >
                Submit Payment Details
              </button>
            </form>
          </div>
          
          {/* Right Column: Decorative/Info */}
          <div className="hidden md:flex flex-1 bg-[#0B2545] text-white p-12 flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold mb-4">InsureCareCenter</h3>
            <p className="text-blue-200">Secure, fast, and reliable insurance payments at your fingertips.</p>
          </div>
        </div>
      </main>
    </div>
  );
}