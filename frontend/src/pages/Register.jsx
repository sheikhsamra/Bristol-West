import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({ 
    fullName: "", 
    email: "", 
    phone: "", 
    password: "", 
    confirmPassword: "" 
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${API_URL}/api/auth/register`, {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error registering user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
          
          {/* Left Column: Registration Form */}
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
            <h1 className="text-2xl font-bold text-[#0B2545] mb-2">Create your InsureCareCenter account</h1>
            <p className="text-sm text-slate-500 mb-6">
              Already have an account?{" "}
              <Link to="/login" className="text-[#00a98f] font-medium hover:underline">
                Log in
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Full Name*</label>
                <input 
                  type="text" name="fullName" placeholder="John Doe" value={formData.fullName} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition" 
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Email Address*</label>
                <input 
                  type="email" name="email" placeholder="name@example.com" value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition" 
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Phone Number</label>
                <input 
                  type="text" name="phone" placeholder="+1 (555) 000-0000" value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Password*</label>
                  <input 
                    type="password" name="password" placeholder="••••••••" value={formData.password} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Confirm Password*</label>
                  <input 
                    type="password" name="confirmPassword" placeholder="••••••••" value={formData.confirmPassword} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition" 
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-[#00a98f] hover:bg-[#008f79] text-white font-bold rounded-lg transition duration-200 shadow-md mt-2 disabled:opacity-50"
              >
                {loading ? "Registering..." : "Register Account"}
              </button>
            </form>
          </div>

          {/* Right Column: Benefits Panel */}
          <div className="flex-1 p-8 md:p-12 bg-slate-50/50 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-[#0B2545] mb-2">Why register with us?</h3>
            <p className="text-sm text-slate-500 mb-6">Create an account to unlock full access to InsureCareCenter services.</p>

            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <span className="text-[#00a98f] text-lg">⚡</span>
                <div><strong className="block text-slate-900">Fast & Secure Access</strong> Manage your policy data with enterprise-grade security.</div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <span className="text-[#00a98f] text-lg">📋</span>
                <div><strong className="block text-slate-900">Track Everything</strong> View your complete service activity and claim history.</div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <span className="text-[#00a98f] text-lg">🔔</span>
                <div><strong className="block text-slate-900">Instant Updates</strong> Stay informed with real-time notifications on your policy status.</div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
