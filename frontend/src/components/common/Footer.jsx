import React from "react";
import { Link } from "react-router-dom";
import play from "../../assets/googleplay.png";
import app from "../../assets/appstore.png";
import logo2 from "../../assets/farmers.png";
import logo from "../../assets/logo2.png"; // Note: Agar aapne logo update kiya hai, toh file name change kar lein

export default function Footer() {
  const topLinks = [
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact Support", path: "/Contact" },
    { name: "Terms & Conditions", path: "/TermConditions" },
    { name: "Help Center (FAQ)", path: "/FAQ" },
  ];

  return (
    <footer className="bg-[#00a98f] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-6 text-sm md:text-base">
          {topLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <Link to={link.path} className="hover:underline hover:text-gray-200">
                {link.name}
              </Link>
              {idx !== topLinks.length - 1 && (
                <span className="mx-2 text-white/60">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Company Description */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <img src={logo} alt="InsureCareCenter Logo" className="h-10" />
          <img src={logo2} alt="Partner Logo" className="h-20 md:h-30" />
          <p className="text-gray-100 text-sm md:text-base mb-0 px-4 max-w-2xl text-center md:text-left">
            Insure Care Center is your dedicated resource for comprehensive protection. 
            We specialize in connecting you with premium home, life, commercial, 
            and auto insurance solutions designed to fit your unique lifestyle across the United States.
          </p>
        </div>

        {/* App Store / Google Play */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <a href="#" className="hover:opacity-90 transition">
            <img src={play} alt="Download on App Store" className="h-10" />
          </a>
          <a href="#" className="hover:opacity-90 transition">
            <img src={app} alt="Get it on Google Play" className="h-20" />
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-200 text-xs md:text-sm border-t border-white/20 pt-4">
          © 2026 Insure Care Center. All rights reserved. Providing smarter coverage for your peace of mind.
        </p>
      </div>
    </footer>
  );
}