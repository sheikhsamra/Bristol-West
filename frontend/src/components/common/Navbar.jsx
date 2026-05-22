import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaGlobe, FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const toggleLangDropdown = () => setLangDropdown(!langDropdown);

  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="InsureCareCenter Logo" className="h-10 md:h-14" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-[#00a98f] items-center">
          <li><Link to="/" className="hover:text-[#ff6a00] transition">Home</Link></li>
          <li><Link to="/why-us" className="hover:text-[#ff6a00] transition">Why InsureCare</Link></li>
          <li><Link to="/insurance-101" className="hover:text-[#ff6a00] transition">Insurance Basics</Link></li>
          <li><Link to="/claims" className="hover:text-[#ff6a00] transition">Claims Center</Link></li>
          <li>
            <Link to="/" className="text-[#ff6a00] font-semibold hover:text-[#008571] transition">
              Get A Quote
            </Link>
          </li>
          <li>
            {/* <Link to="/login" className="flex items-center space-x-1 hover:text-[#ff5100] transition">
              <span className="text-lg md:text-base">Login</span>
            </Link> */}
          </li>
          <li className="relative">
            <button
              onClick={toggleLangDropdown}
              className="flex items-center space-x-1 hover:text-[#ff6a00] transition focus:outline-none"
            >
              <FaGlobe className="w-5 h-5" />
              <span>Español</span>
              {langDropdown ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
            </button>
            {langDropdown && (
              <ul className="absolute top-full mt-1 left-0 bg-white border shadow-lg rounded-md w-40 py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Español</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Français</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Deutsch</li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl text-[#00a98f]"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 font-medium text-[#00a98f] px-4">
          <li><Link to="/" className="block py-2 hover:text-[#ff6a00]">Home</Link></li>
          <li><Link to="/why-us" className="block py-2 hover:text-[#ff6a00]">Why InsureCare</Link></li>
          <li><Link to="/insurance-101" className="block py-2 hover:text-[#ff6a00]">Insurance Basics</Link></li>
          <li><Link to="/claims" className="block py-2 hover:text-[#ff6a00]">Claims Center</Link></li>
          <li><Link to="/" className="block py-2 text-[#ff6a00] font-semibold hover:text-[#008571]">Get A Quote</Link></li>
          {/* <li><Link to="/login" className="block py-2 hover:text-[#ff5100]">Login</Link></li> */}
          <li className="relative">
            <button
              onClick={toggleLangDropdown}
              className="flex justify-between w-full py-2 hover:text-[#ff6a00] items-center"
            >
              <span>Español</span>
              {langDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {langDropdown && (
              <ul className="mt-1 bg-white border-l border-r border-b rounded-md py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Español</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Français</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Deutsch</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}