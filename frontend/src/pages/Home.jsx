import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroCar from "../assets/hero-family-car.jpg";
import QuickLinks from "./QuickLink";
import WhyBristol from "./WhyBristol";

export default function Home() {
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();

  const handleZipSubmit = (e) => {
    e.preventDefault();
    // USA Zip Code Validation: 5 digits
    const zipRegex = /^\d{5}$/;
    if (zipRegex.test(zipCode)) {
      navigate(`/quote-process?zip=${zipCode}`);
    } else {
      alert("Please enter a valid 5-digit USA Zip Code");
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <main className="container mx-auto bg-white font-['Roboto'] pt-5">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-0">
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={HeroCar}
              alt="Car Insurance"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="md:w-1/2 bg-[#00a98f] py-16 px-6 md:px-10 rounded-2xl flex flex-col justify-center min-h-[500px]">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Insure Care Center Smart Auto <span className="text-[#ff5100]">Coverage</span> for You
            </h1>
            <p className="text-[#eaeaea] text-lg mb-8">
              Get your personalized car insurance quote in minutes
            </p>

            <form onSubmit={handleZipSubmit} className="w-full max-w-md mb-6">
              <div className="flex bg-white rounded-full overflow-hidden p-1 shadow-md">
                <input
                  type="text"
                  maxLength="5"
                  placeholder="Enter Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ""))}
                  className="flex-1 px-5 py-3 bg-transparent text-slate-800 font-medium placeholder-slate-400 focus:outline-none text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#ff5100] hover:bg-[#ef5630] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm uppercase tracking-wider"
                >
                  Start Quote
                </button>
              </div>
            </form>

            <div className="pl-2 mt-6">
              <Link
                to="/login"
                className="text-white text-sm font-semibold underline decoration-1 underline-offset-4 hover:text-[#eaeaea] transition-colors"
              >
                Access your saved quote
              </Link>
            </div>
          </div>
        </section>

        <QuickLinks />
        <WhyBristol />
      </main>
    </>
  );
}