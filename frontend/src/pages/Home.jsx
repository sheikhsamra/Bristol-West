import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import HeroCar from "../assets/hero-family-car.jpg";
import QuickLinks from "./QuickLink";
import WhyBristol from "./WhyBristol";

export default function Home() {
  const [zipCode, setZipCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleZipSubmit = (e) => {
    e.preventDefault();
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(zipCode)) {
      toast.error("Please enter a valid 5-digit USA Zip Code");
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setShowModal(true);
    } else {
      navigate(`/quote-process?zip=${zipCode}`);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Almost There!</h2>
            <p className="text-slate-600 mb-6">To continue with your personalized quote, please log in or create an account.</p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => {
                  localStorage.setItem('redirectAfterLogin', `/quote-process?zip=${zipCode}`);
                  navigate('/login');
                }}
                className="w-full bg-[#00a98f] text-white py-3 rounded-xl font-bold hover:bg-[#008f79] transition-all"
              >
                Log In
              </button>
              <button 
                onClick={() => {
                  localStorage.setItem('redirectAfterLogin', `/quote-process?zip=${zipCode}`);
                  navigate('/register');
                }}
                className="w-full bg-[#ff5100] text-white py-3 rounded-xl font-bold hover:bg-[#ef5630] transition-all"
              >
                Create Account
              </button>
              <button onClick={() => setShowModal(false)} className="text-slate-400 font-bold mt-2 hover:text-slate-600 transition-all">Not now</button>
            </div>
          </div>
        </div>
      )}

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
              <div className="flex bg-white rounded-full overflow-hidden p-1 shadow-md w-full">
                <input
                  type="text"
                  maxLength="5"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ""))}
                  className="flex-1 px-4 py-3 bg-transparent text-slate-800 font-medium placeholder-slate-400 focus:outline-none text-sm md:text-base w-16"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#ff5100] hover:bg-[#ef5630] text-white font-bold px-4 md:px-6 py-3 rounded-full transition-colors text-xs md:text-sm uppercase tracking-wider whitespace-nowrap flex-shrink-0"
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
