import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const API_URL = 'https://bristol-west-backend.vercel.app';
      const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      const user = response.data.user;
      localStorage.setItem('user', JSON.stringify(user));
      
      // If Admin, go straight to dashboard
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
        return;
      }

      // For regular users, check if there was a redirect path
      const redirectPath = localStorage.getItem('redirectAfterLogin');
      if (redirectPath) {
        localStorage.removeItem('redirectAfterLogin');
        navigate(redirectPath);
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
          
          {/* Left Column: Input Form */}
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-2">Log in to InsureCareCenter</h2>
            <p className="text-sm text-slate-500 mb-8">
              Don't have an account? <Link to="/register" className="text-[#00a98f] font-medium hover:underline">Create an account</Link>
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition text-base"
                  required
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Password*
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition text-base"
                  required
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#00a98f] hover:bg-[#008f79] text-white font-bold rounded-lg transition duration-200 shadow-md disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Log In'}
              </button>
            </form>
          </div>

          {/* Right Column: Quick Actions */}
          <div className="flex-1 p-8 md:p-12 bg-slate-50/50 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-[#0B2545] mb-2">Secure Your Future</h3>
            <p className="text-sm text-slate-500 mb-6">
              Logging in allows you to manage your quotes, access digital ID cards, and make secure payments.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-semibold text-[#00a98f]">
                <span className="text-lg">🛡️</span> 
                <span>Personalized Protection Plans</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-[#00a98f]">
                <span className="text-lg">📄</span> 
                <span>Instant Digital ID Access</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
