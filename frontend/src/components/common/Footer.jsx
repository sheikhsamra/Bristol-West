import React from "react";
import { Link } from "react-router-dom"; // Import Link
import play from "../../assets/googleplay.png";
import app from "../../assets/appstore.png";
import logo2 from "../../assets/farmers.png";
import logo from "../../assets/bristol_west_logo_white.png";

export default function Footer() {
  const topLinks = [
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact Us", path: "/Contact" },
    { name: "Terms and Condition", path: "/TermConditions" },,
    { name: "FAQ", path: "/FAQ" },
  ];

  return (
    <footer className="bg-[#00a98f] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-6 text-sm md:text-base">
          {topLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <Link to={link.path} className="hover:underline">
                {link.name}
              </Link>
              {idx !== topLinks.length - 1 && (
                <span className="mx-2 text-white">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Logos + Company Description in one line */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <img src={logo} alt="Company Logo" className="h-14" />
          <img src={logo2} alt="Farmers Insurance" className="h-30" />
          <p className="text-gray-300 text-sm md:text-base mb-0 px-4 w-200">
            Your Insurance Company is a proud member of the Farmers Insurance
            Group of Companies, offering a wide variety of home, life,
            specialty, commercial, and auto insurance products and services
            across the United States.
          </p>
        </div>

        {/* App Store / Google Play */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <a href="#">
            <img src={play} alt="App Store" className="h-12" />
          </a>
          <a href="#">
            <img src={app} alt="Google Play" className="h-25" />
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-300 text-sm md:text-base">
          © 2026 Bristal West Insurance Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}