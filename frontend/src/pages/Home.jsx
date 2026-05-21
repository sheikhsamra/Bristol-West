import { useState } from "react";
import { Link } from "react-router-dom";
import HeroCar from "../assets/hero-family-car.jpg";
import QuickLinks from "./QuickLink";
import WhyBristol from "./WhyBristol";

export default function Home() {
  const [zipCode, setZipCode] = useState("");
  const [showText, setShowText] = useState(false); // Text show karne ke liye state

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (zipCode.trim().length === 5) {
      setShowText(true); // Kisi website par jaane ke bajaye text show karega
    } else {
      alert("Please enter a valid 5-digit Zip Code");
      setShowText(false);
    }
  };

  return (
    <>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <main className="container mx-auto bg-white font-['Roboto'] pt-5">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-6">
          {/* Image */}
          <div className="md:w-200 mt-8 md:mt-0">
            <img
              src={HeroCar}
              alt="Car Insurance"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Text Section (Original Theme & Size Retained) */}
          <div className="md:w-175 bg-[#00a98f] py-33.75 px-10 rounded-2xl flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Bristol West works to make Auto Insurance easy
            </h1>
            <p className="text-[#eaeaea] text-lg mb-6">
              Get a Car Insurance quote today
            </p>

            {/* Input Box and Get A Quote Button */}
            <form onSubmit={handleQuoteSubmit} className="w-full max-w-md mb-4">
              <div className="flex bg-white rounded-full overflow-hidden p-1 shadow-md">
                <input
                  type="text"
                  maxLength="5"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) => {
                    setZipCode(e.target.value.replace(/\D/g, ""));
                    if (showText) setShowText(false); // Agar user dobara type kare toh purana message hide ho jaye
                  }}
                  className="flex-1 px-5 py-3 bg-transparent text-slate-800 font-medium placeholder-slate-400 focus:outline-none text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#E24A24] hover:bg-[#c93e1c] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm uppercase tracking-wider"
                >
                  Get a Quote
                </button>
              </div>
            </form>

            {/* Dynamic Message: Jo click karne par yahan niche show hoga */}
            {showText && (
              <div className="mb-6 p-3 bg-white/20 border border-white/30 text-white rounded-xl text-sm font-medium animate-fadeIn">
                📍 Processing quote estimate for Zip Code: <span className="font-bold text-[#ff5100] bg-white px-2 py-0.5 rounded-md ml-1">{zipCode}</span>. Please wait a moment...
              </div>
            )}

            {/* Retrieve Saved Quote Link Underneath */}
            <div className="pl-2">
              <Link
                to="/login"
                className="text-white text-sm font-semibold underline decoration-1 underline-offset-4 hover:text-[#eaeaea] transition-colors"
              >
                Retrieve a Saved Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <QuickLinks />

        {/* Why Bristol West Section */}
        <WhyBristol />
      </main>
    </>
  );
}