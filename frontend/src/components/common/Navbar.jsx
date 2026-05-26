import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaGlobe, FaBars, FaTimes, FaChevronDown, FaChevronUp, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [location]); // Re-run when route changes (like after login/logout)

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    setMobileOpen(false);
  };

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const toggleLangDropdown = () => setLangDropdown(!langDropdown);

  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="InsureCareCenter Logo" className="h-10 md:h-14" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-medium text-[#00a98f] items-center">
          <li><Link to="/" className="hover:text-[#ff6a00] transition">Home</Link></li>
          <li><Link to="/why-us" className="hover:text-[#ff6a00] transition">Why InsureCare</Link></li>
          <li><Link to="/insurance-101" className="hover:text-[#ff6a00] transition">Insurance Basics</Link></li>
          <li><Link to="/claims" className="hover:text-[#ff6a00] transition">Claims Center</Link></li>
          
          <div className="h-6 w-px bg-slate-200 mx-2"></div>

          {user ? (
            <div className="flex items-center gap-4">
              <Link 
                to={user.role === 'admin' ? "/admin-dashboard" : "#"}
                className={`flex items-center gap-2 text-slate-700 font-bold bg-slate-50 px-4 py-2 rounded-full border border-slate-100 transition-all ${user.role === 'admin' ? 'hover:bg-[#00a98f]/10 hover:border-[#00a98f]/30' : ''}`}
              >
                <FaUserCircle className="text-[#00a98f]" size={20} />
                <span className="text-sm truncate max-w-[100px]">{user.fullName.split(' ')[0]}</span>
              </Link>
              <button 
                onClick={handleLogout}
                className="text-sm font-bold text-slate-400 hover:text-[#ff5100] transition-colors uppercase tracking-wider"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link 
                to="/login" 
                className="px-5 py-2 text-sm font-bold border-2 border-[#00a98f] text-[#00a98f] rounded-full hover:bg-[#00a98f] hover:text-white transition-all"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-5 py-2 text-sm font-bold bg-[#ff5100] text-white rounded-full hover:bg-[#ef5630] transition-all shadow-md shadow-orange-100"
              >
                Sign Up
              </Link>
            </div>
          )}

          <li className="relative ml-4">
            <button
              onClick={toggleLangDropdown}
              className="flex items-center space-x-1 hover:text-[#ff6a00] transition focus:outline-none text-slate-500"
            >
              <FaGlobe className="w-4 h-4" />
              <span className="text-sm">English</span>
              {langDropdown ? <FaChevronUp className="w-3" /> : <FaChevronDown className="w-3" />}
            </button>
            {langDropdown && (
              <ul className="absolute top-full mt-2 right-0 bg-white border shadow-xl rounded-xl w-40 py-2 animate-fadeIn border-slate-100">
                <li className="px-4 py-2 hover:bg-slate-50 cursor-pointer text-sm">Español</li>
                <li className="px-4 py-2 hover:bg-slate-50 cursor-pointer text-sm font-bold text-[#00a98f]">English</li>
                <li className="px-4 py-2 hover:bg-slate-50 cursor-pointer text-sm">Français</li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-2xl text-[#00a98f]"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-inner overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen border-t border-slate-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col font-medium text-[#00a98f] px-6 py-6 gap-2">
          <li><Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-[#ff6a00] border-b border-slate-50">Home</Link></li>
          <li><Link to="/why-us" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-[#ff6a00] border-b border-slate-50">Why InsureCare</Link></li>
          <li><Link to="/claims" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-[#ff6a00] border-b border-slate-50">Claims Center</Link></li>
          
          <div className="py-4 space-y-3">
            {user ? (
              <>
                <div className="flex items-center gap-3 py-2">
                  <FaUserCircle size={30} />
                  <div>
                    <p className="text-slate-900 font-bold leading-none">{user.fullName}</p>
                    <p className="text-slate-400 text-xs mt-1">{user.email}</p>
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full py-4 bg-slate-100 text-slate-700 font-bold rounded-xl"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-4 border-2 border-[#00a98f] text-[#00a98f] font-bold rounded-xl text-center"
                >
                  Log In
                </Link>
                <Link 
                  to="/register" 
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-4 bg-[#ff5100] text-white font-bold rounded-xl text-center shadow-lg"
                >
                  Create Account
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
}