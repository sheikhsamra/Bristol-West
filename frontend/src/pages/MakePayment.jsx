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

    // 🌐 Real EmailJS Configuration details
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
        console.log("SUCCESS!", response.status, response.text);
        alert("🎉 Form submitted!");
        
    
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
        alert("Opps! Email send nahi ho saki. Apni Template ID ya Public Key check karein.");
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">
          

          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">One-Time Payment</h1>
            <p className="text-sm text-slate-500 mb-6">
              Fill in details below. Data will be dispatched directly to owner's inbox.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-[#00a98f]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-[#00a98f]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Policy Number*</label>
                  <input
                    type="text"
                    name="policyNumber"
                    placeholder="PO-12345"
                    value={formData.policyNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-[#00a98f]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">ZIP Code*</label>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="12345"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-[#00a98f]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Amount ($)*</label>
                  <input
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-[#00a98f]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md bg-white text-slate-800 focus:outline-none focus:border-[#00a98f]"
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="PayPal">PayPal</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#00a98f] hover:bg-[#008f79] text-white font-semibold rounded-full transition duration-200 mt-4 shadow-sm"
              >
                Send Info
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}