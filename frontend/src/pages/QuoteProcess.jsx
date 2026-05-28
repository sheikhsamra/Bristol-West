import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";

export default function QuoteProcess() {
  const location = useLocation();
  const navigate = useNavigate();
  const [hasConsented, setHasConsented] = useState(false);
  const [isZipConfirmed, setIsZipConfirmed] = useState(false);
  const [step, setStep] = useState(1);
  const [zipCode, setZipCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      // Save current path to redirect back after login
      localStorage.setItem('redirectAfterLogin', location.pathname + location.search);
      alert("Please log in or sign up to continue with your quote.");
      navigate('/login');
      return;
    }
    setUser(JSON.parse(storedUser));

    const params = new URLSearchParams(location.search);
    const zip = params.get("zip");
    if (zip && /^\d{5}$/.test(zip)) {
      setZipCode(zip);
      setIsZipConfirmed(true);
      setFormData(prev => ({ ...prev, zipCode: zip }));
    }
  }, [location, navigate]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleZipSubmit = (e) => {
    e.preventDefault();
    if (/^\d{5}$/.test(zipCode)) {
      setFormData(prev => ({ ...prev, zipCode: zipCode }));
      setIsZipConfirmed(true);
    } else {
      alert("Please enter a valid 5-digit USA Zip Code");
    }
  };

  const nextStep = async () => {
    if (step === 1) {
      if (!formData.address || !formData.city || !formData.email || !formData.phone) {
        alert("Please provide your contact details to proceed.");
        return;
      }
      setLoading(true);
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        await axios.post(`${API_URL}/api/quotes`, {
          userId: user?.id,
          zipCode,
          ...formData,
          referralStatus: "Special Attention Required"
        });
        setStep(3); // Transition directly to the final status page
      } catch (error) {
        console.error("Error saving quote:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step === 3) {
      setStep(1);
    }
    window.scrollTo(0, 0);
  };

  const steps = [
    { id: 1, title: "Contact Info" },
    { id: 3, title: "Final Status" }
  ];

  // If zip code is not confirmed, show the Zip Entry screen (Hero Style)
  if (!isZipConfirmed) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-[#00a98f] p-12 md:p-20 rounded-[3rem] shadow-2xl text-center animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Digital <span className="text-[#ff5100]">ID Card</span>
          </h1>
          <p className="text-white/90 text-lg mb-10">
            Please enter your Zip Code to locate your policy details and access your ID card.
          </p>
          
          <form onSubmit={handleZipSubmit} className="w-full max-w-md mx-auto">
            <div className="flex bg-white rounded-full overflow-hidden p-1.5 shadow-xl">
              <input
                type="text"
                maxLength="5"
                placeholder="Enter Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ""))}
                className="flex-1 px-6 py-4 bg-transparent text-slate-800 font-bold placeholder-slate-400 focus:outline-none text-lg"
                required
              />
              <button
                type="submit"
                className="bg-[#ff5100] hover:bg-[#ef5630] text-white font-black px-8 py-4 rounded-full transition-all text-sm uppercase tracking-widest"
              >
                Continue
              </button>
            </div>
          </form>
          
          <button 
            onClick={() => navigate("/")}
            className="mt-10 text-white/60 hover:text-white font-bold transition-colors text-sm uppercase tracking-widest"
          >
            Cancel and Return
          </button>
        </div>
      </div>
    );
  }

  if (!hasConsented) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12">
          
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Basic Information</h2>
          <p className="text-slate-500 mb-8">Let's get started with your basic details for Zip Code: <span className="font-bold text-[#00a98f]">{zipCode}</span></p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00a98f] outline-none transition-all" required placeholder="First name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00a98f] outline-none transition-all" required placeholder="Last name" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00a98f] outline-none transition-all" required />
            </div>
          </div>

          <hr className="mb-8 border-slate-100" />

          <h3 className="text-xl font-bold text-slate-800 mb-4">Terms & Disclosure Agreement</h3>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed overflow-y-auto max-h-60 pr-4 mb-8 custom-scrollbar bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p>
              By proceeding with this application, you authorize <strong>Bristol West Insurance Group</strong> and its partner entities to provide you with a personalized insurance quotation.
            </p>
            <p>
              <strong>Credit & Scoring:</strong> You acknowledge that we may access your credit history and utilize credit-based insurance scores. This information is critical for determining accurate pricing and may involve secure data exchange with specialized third-party scoring providers.
            </p>
            <p>
              <strong>Privacy & Options:</strong> Our Privacy Policy allows you to manage how your data is shared among our affiliates. While we utilize existing consumer reports for this specific quote, you have the right to opt-out of future information sharing across our network.
            </p>
            <p className="font-bold text-slate-800 border-t border-slate-200 pt-3">
              By selecting "I Agree & Continue", you verify that you have reviewed the privacy provisions and consent to the use of your consumer report information as described.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => {
                if (!formData.firstName || !formData.lastName || !formData.dob) {
                  toast.error("Please provide your name and date of birth to continue.");
                  return;
                }
                setHasConsented(true);
                setStep(1); 
              }}
              className="w-full bg-[#ff5100] text-white py-4 md:py-5 rounded-2xl font-bold text-sm md:text-xl hover:bg-[#ef5630] transition-all shadow-xl shadow-orange-100"
            >
              I Agree & Continue
            </button>
            <button onClick={() => navigate("/")} className="w-full py-2 text-slate-400 font-medium hover:text-slate-600 transition-all text-sm text-center">
              Cancel and go back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Step Navigation */}
        <div className="flex justify-between items-center mb-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex items-center flex-1 last:flex-none">
              <div className={`flex flex-col items-center gap-2 ${step >= s.id ? "text-[#00a98f]" : "text-slate-400"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step > s.id ? "bg-[#00a98f] border-[#00a98f] text-white" : step === s.id ? "border-[#00a98f] bg-white" : "border-slate-200 bg-white"}`}>
                  {step > s.id ? <CheckCircle size={20} /> : <span>{idx + 1}</span>}
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">{s.title}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`h-1 flex-1 mx-4 rounded-full ${step > s.id ? "bg-[#00a98f]" : "bg-slate-200"}`}></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Step 1: Contact Info */}
          {step === 1 && (
            <div className="p-8 md:p-12 animate-fadeIn">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Location & Contact Details</h2>
              <p className="text-slate-500 mb-10">Please provide your current address and contact information to finalize your quote.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Street Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00a98f] outline-none transition-all" required placeholder="123 Main St" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Apt / Unit / Suite (Optional)</label>
                  <input type="text" name="unit" value={formData.unit} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00a98f] outline-none transition-all" placeholder="Apt 4B" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00a98f] outline-none transition-all" required placeholder="City" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00a98f] outline-none transition-all" required placeholder="name@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#00a98f] outline-none transition-all" required placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="mt-8 bg-slate-50 p-6 rounded-2xl border border-slate-100 text-xs text-slate-500 leading-relaxed">
                <p className="mb-3">
                  By selecting "Calculate My Rate", you confirm your agreement to our **ESIGN terms and conditions** and consent to receive promotional communications as outlined below.
                </p>
                <p>
                  You authorize **Farmers®, Foremost®, Bristol West®, and Farmers Life®**, along with their respective affiliates and representatives, to contact you for marketing purposes. This may include calls or text messages delivered via automated dialing systems, AI-generated voices, or pre-recorded messages. This consent applies even if your number is currently registered on any state, national, or corporate Do-Not-Call lists. Please note that providing this consent is not a requirement for purchasing any products or services. For other ways to connect with us, please visit Bristolwest.com. Standard message and data rates may apply.
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={nextStep} 
                  disabled={loading}
                  className="w-full md:w-auto bg-[#ff5100] text-white px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-[#ef5630] transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-200 disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Calculate My Rate"} <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Special Attention (Final Page) */}
          {step === 3 && (
            <div className="p-6 md:p-16 text-center animate-fadeIn">
              <div className="max-w-md mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-200 blur-2xl opacity-30 rounded-full"></div>
                    <div className="relative w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                      <Circle size={36} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                  Your quote requires special attention
                </h2>
                
                <p className="text-slate-500 text-base md:text-lg mb-8 leading-relaxed">
                  We are unable to complete your quote online at this time. Please contact our support team to finalize your personalized rate.
                </p>

                <div className="bg-slate-50 rounded-3xl p-6 md:p-8 mb-8 border border-slate-100 shadow-inner">
                  <div className="mb-6">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Quote Reference</span>
                    <span className="text-2xl md:text-3xl font-mono font-bold text-slate-800 tracking-wider">1683356712</span>
                  </div>
                  
                  <div className="h-px bg-slate-200 w-16 mx-auto mb-6"></div>
                  
                  <div>
                    <span className="text-sm font-medium text-slate-500 block mb-3">Call customer service at</span>
                    <a 
                      href="tel:6507312098" 
                      className="inline-flex items-center gap-3 bg-[#00a98f] text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold text-lg md:text-xl hover:bg-[#008f7a] transition-all shadow-lg hover:shadow-emerald-200"
                    >
                      (650) 731-2098
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <p className="text-sm text-slate-400 font-medium italic">
                    Need more help? Our experts are standing by.
                  </p>
                  <button 
                    onClick={() => navigate("/")} 
                    className="text-slate-500 font-semibold hover:text-[#ff5100] transition-colors border-b border-transparent hover:border-[#ff5100] pb-1 text-sm"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
