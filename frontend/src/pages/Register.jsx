import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ 
    fullName: "", 
    email: "", 
    phone: "", 
    password: "", 
    confirmPassword: "" 
  });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      await axios.post("/api/auth/register", formData);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Error registering user.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">
          
          {/* Left Column: Registration Form */}
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
            <h1 className="text-2xl font-bold text-[#0B2545] mb-2">Create Account</h1>
            <p className="text-sm text-slate-500 mb-6">
              Already have an account?{" "}
              <button onClick={() => navigate("/login")} className="text-[#00a98f] font-medium hover:underline">
                Log in
              </button>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Full Name*
                </label>
                <input 
                  type="text" 
                  name="fullName" 
                  placeholder="John Doe" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition text-slate-800" 
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Email Address*
                </label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="name@example.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition text-slate-800" 
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="+1 (555) 000-0000" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition text-slate-800"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Password*
                </label>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="••••••••" 
                  value={formData.password} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition text-slate-800" 
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Confirm Password*
                </label>
                <input 
                  type="password" 
                  name="confirmPassword" 
                  placeholder="••••••••" 
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition text-slate-800" 
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full py-3 bg-[#00a98f] hover:bg-[#008f79] text-white font-semibold rounded-full transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00a98f] mt-2"
              >
                Register
              </button>
            </form>
          </div>

          {/* Right Column: Information/Benefits Panel */}
          <div className="flex-1 p-8 md:p-12 bg-slate-50/50 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-[#0B2545] mb-2">Why register with us?</h3>
            <p className="text-sm text-slate-500 mb-6">
              Create an account today to unlock full access to all features and services instantly.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <span className="text-[#00a98f] text-base">⚡</span>
                <div>
                  <strong className="block text-slate-900">Fast & Secure Access</strong>
                  Manage your data safely with modern standard protocols.
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <span className="text-[#00a98f] text-base">📋</span>
                <div>
                  <strong className="block text-slate-900">Track Everything</strong>
                  View your complete service activity and document history.
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <span className="text-[#00a98f] text-base">🔔</span>
                <div>
                  <strong className="block text-slate-900">Instant Updates</strong>
                  Get notified immediately regarding important alerts and modifications.
                </div>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}