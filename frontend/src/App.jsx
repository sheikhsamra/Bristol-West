import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Components (Navbar aur Footer ko yahan ek baar import karein)
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Pages
import Home from "./pages/Home";
import WhyUs from "./pages/WhyUs";
import Insurance101 from "./pages/Insurance101";
import Claims from "./pages/Claims";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import MakePayment from "./pages/MakePayment";
import FindPolicy from "./pages/FindPolicy";
import CustomerBenefits from "./components/common/CustomerBenefits";
import CommonCarInsurance from "./components/common/CommonCarInsurance";
import AutoInsuranceQuoteBanner from "./components/common/AutoInsuranceQuoteBanner";
import ScrollToTop from "./components/common/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      {/* 1. Navbar fixed fixed on top */}
      <Navbar />
      <div className=" min-h-screen flex flex-col bg-slate-50">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/insurance-101" element={<Insurance101 />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/MakePayment" element={<MakePayment />} />
          <Route path="/FindPolicy" element={<FindPolicy />} />
          <Route path="/CustomerBenefits" element={<CustomerBenefits />} />
          <Route path="/CommonCarInsurance" element={<CommonCarInsurance />} />
          <Route path="/AutoInsuranceQuoteBanner" element={<AutoInsuranceQuoteBanner />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/TermConditions" element={<TermsConditions />} />
          
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;