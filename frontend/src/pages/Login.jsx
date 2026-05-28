import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      const user = response.data.user;
      localStorage.setItem('user', JSON.stringify(user));
      
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
        return;
      }

      const redirectPath = localStorage.getItem('redirectAfterLogin');
      if (redirectPath) {
        localStorage.removeItem('redirectAfterLogin');
        navigate(redirectPath);
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
          
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

              <div className="relative">
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Password*
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a98f] focus:ring-1 focus:ring-[#00a98f] transition text-base"
                  required
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-10 text-slate-400 hover:text-[#00a98f]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
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
