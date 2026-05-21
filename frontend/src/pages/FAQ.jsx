import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaRegQuestionCircle, FaDollarSign, FaExchangeAlt, FaSms, FaUserCog } from "react-icons/fa";

export default function FAQ() {
  // Accordion state handle karne ke liye (Sawal kholne aur band karne ke liye)
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ Data Structure grouped logically by categories
  const faqData = [
    {
      category: "Registration Benefits",
      icon: <FaUserCog className="text-[#00a98f] text-lg" />,
      questions: [
        {
          q: "Why sign up as a registered customer?",
          a: "Signing up is simple and gives you 24/7 online access to: View your policy ID cards, enroll in Text Alerts for payment reminders, report/view claim status, submit policy documents, check payment history, make payments, change your email address, or enroll in our Direct Debit (EFT) program."
        }
      ]
    },
    {
      category: "Payments & Fees",
      icon: <FaDollarSign className="text-[#00a98f] text-lg" />,
      questions: [
        {
          q: "How can I make a payment?",
          a: "You can make a fast and easy payment online through our 'Make Payment' portal, via our mobile application, or by calling our automated 24/7 Phone Pay line at 1-888-888-0080. Please have your policy number ready."
        },
        {
          q: "Can I make a payment using a pre-paid debit or credit card?",
          a: "Yes, as long as the card features a valid Visa, MasterCard, or American Express logo."
        },
        {
          q: "Is my payment accepted immediately?",
          a: "Online and phone payments are generally authorized instantly, though processing onto your bank statement may take 1 to 3 business days."
        },
        {
          q: "Can I change my payment due date?",
          a: "Due date adjustments depend on your state guidelines and billing schedule. Please contact customer support to review your eligibility."
        },
        {
          q: "What happens if I mail my payment on or after the due date?",
          a: "Mailing a payment on or after the due date may cause processing delays and risk policy cancellation. We highly recommend digital or phone payments if your due date is near."
        },
        {
          q: "What is an installment fee and how can I avoid it?",
          a: "An installment fee is a small administrative charge applied to each manual billing cycle. You can completely avoid these fees by enrolling in our automatic Direct Debit Program."
        }
      ]
    },
    {
      category: "Automatic Payments (Direct Debit)",
      icon: <FaExchangeAlt className="text-[#00a98f] text-lg" />,
      questions: [
        {
          q: "What are the advantages to enrolling in the Direct Debit Program?",
          a: "It offers maximum convenience: no handwritten checks, no postage stamps, no installment fees, and zero risk of missing your payment deadline."
        },
        {
          q: "How can I enroll or change my automatic payment account information?",
          a: "Log in to your account, navigate to 'My Profile' or billing settings, and select Direct Debit Enrollment to link or update your checking account, savings account, or debit card details safely."
        },
        {
          q: "If I make a payment before the due date, will that stop the automatic withdrawal?",
          a: "To prevent duplicate withdrawals, manual payments must usually be completed at least 3 business days prior to your automated draft schedule."
        },
        {
          q: "Will my enrollment in the Direct Debit Program carry over to my renewal policy?",
          a: "Yes, your payment preferences and banking integrations automatically transfer to your renewed policy framework unless specified otherwise."
        }
      ]
    },
    {
      category: "Text Alerts Program",
      icon: <FaSms className="text-[#00a98f] text-lg" />,
      questions: [
        {
          q: "What is the text alert program and do I have to pay for it?",
          a: "Our text alert service delivers payment reminders and policy notifications straight to your mobile device. We do not charge for this service, but standard text/data rates from your mobile provider still apply."
        },
        {
          q: "How do I stop or restart receiving text messages?",
          a: "You can stop alerts at any time by replying 'STOP' to any text notification. To re-activate, log into your user dashboard and update your communication preferences under Text Alerts."
        }
      ]
    }
  ];

  // Helper index count track karne ke liye across groups
  let globalIndex = 0;

  return (
    <div className="flex-1 bg-slate-50 font-sans text-slate-700">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-200/60 border-b border-slate-300/50 py-3 px-4 md:px-12 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link to="/" className="text-[#00a98f] hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-500 font-medium">FAQ</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            Find immediate answers regarding account setups, premium payments, policy modifications, and automated direct deposits.
          </p>
        </div>

        {/* FAQ Mapping grouped by category blocks */}
        <div className="space-y-8">
          {faqData.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-3">
              
              {/* Category Heading Card */}
              <div className="flex items-center gap-2 px-1 py-2 text-slate-900 font-bold text-lg border-b border-slate-200">
                {group.icon}
                <h2>{group.category}</h2>
              </div>

              {/* Category Questions Grid */}
              <div className="space-y-2.5">
                {group.questions.map((item, qIdx) => {
                  const currentIndex = globalIndex;
                  globalIndex++; // Unique dynamic ID allocate karne ke liye
                  const isOpen = openFaq === currentIndex;

                  return (
                    <div 
                      key={qIdx} 
                      className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-2xs transition-all duration-200"
                    >
                      {/* Question Trigger Bar */}
                      <button
                        onClick={() => toggleFaq(currentIndex)}
                        className="w-full px-5 py-4 flex justify-between items-center text-left font-semibold text-slate-800 hover:bg-slate-50/60 transition text-sm md:text-base"
                      >
                        <span className="flex items-start gap-3">
                          <FaRegQuestionCircle className="text-slate-400 mt-1 flex-shrink-0" />
                          {item.q}
                        </span>
                        {isOpen ? (
                          <FaChevronUp className="text-[#00a98f] flex-shrink-0 ml-4" />
                        ) : (
                          <FaChevronDown className="text-slate-400 flex-shrink-0 ml-4" />
                        )}
                      </button>

                      {/* Expandable Smooth Answer Box */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? "max-h-96 border-t border-slate-100" : "max-h-0"
                        }`}
                      >
                        <div className="p-5 text-sm md:text-base bg-slate-50/40 text-slate-600 leading-relaxed">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Support Panel */}
        <div className="mt-14 p-6 bg-emerald-50 rounded-xl border border-emerald-100 text-center max-w-2xl mx-auto shadow-2xs">
          <h3 className="font-bold text-emerald-950 mb-1 text-base">Still have questions?</h3>
          <p className="text-xs text-emerald-800 mb-4">Our dedicated operations teams are standing by 24/7 to solve your complex insurance requirements.</p>
          <Link 
            to="/contact" 
            className="inline-block text-xs font-bold text-white bg-[#00a98f] hover:bg-[#008f79] px-6 py-2.5 rounded-full transition shadow-xs"
          >
            Contact Customer Care
          </Link>
        </div>

      </main>
    </div>
  );
}