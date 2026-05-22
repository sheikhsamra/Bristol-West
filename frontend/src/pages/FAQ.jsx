import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaRegQuestionCircle, FaDollarSign, FaExchangeAlt, FaSms, FaUserCog } from "react-icons/fa";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      category: "Account Management",
      icon: <FaUserCog className="text-[#00a98f] text-lg" />,
      questions: [
        {
          q: "Why sign up for an InsureCareCenter account?",
          a: "Registering provides 24/7 access to your policy details. You can view your digital ID cards, enroll in payment reminders, track claim status, submit necessary documents, and update your personal information securely at any time."
        }
      ]
    },
    {
      category: "Payments & Billing",
      icon: <FaDollarSign className="text-[#00a98f] text-lg" />,
      questions: [
        {
          q: "What are the ways to make a payment?",
          a: "We offer several convenient methods: through our secure online 'Make Payment' portal, our mobile application, or by calling our 24/7 automated payment line at 1-800-INSURE-CARE."
        },
        {
          q: "Is my payment processed immediately?",
          a: "Online and phone payments are authorized instantly. Please note that while the transaction is approved immediately, it may take 1 to 3 business days to reflect on your bank statement."
        },
        {
          q: "How can I avoid installment fees?",
          a: "Installment fees are administrative charges for manual billing cycles. You can avoid these entirely by enrolling in our Direct Debit (EFT) program for automated payments."
        }
      ]
    },
    {
      category: "Direct Debit Program",
      icon: <FaExchangeAlt className="text-[#00a98f] text-lg" />,
      questions: [
        {
          q: "What are the benefits of the Direct Debit Program?",
          a: "It offers a 'set-it-and-forget-it' convenience: no need for paper checks or postage, zero installment fees, and complete peace of mind that your payment will always be on time."
        },
        {
          q: "Will my banking details transfer to a renewal policy?",
          a: "Yes, your payment preferences and banking information will automatically carry over to your renewed policy to ensure uninterrupted coverage."
        }
      ]
    },
    {
      category: "Text Alerts",
      icon: <FaSms className="text-[#00a98f] text-lg" />,
      questions: [
        {
          q: "Is there a charge for the text alert program?",
          a: "InsureCareCenter does not charge for this service. However, standard text and data rates from your mobile service provider may apply depending on your current plan."
        }
      ]
    }
  ];

  let globalIndex = 0;

  return (
    <div className="flex-1 bg-slate-50 font-sans text-slate-700">
      
      <div className="bg-slate-200/60 border-b border-slate-300/50 py-3 px-4 md:px-12 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link to="/" className="text-[#00a98f] hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-500 font-medium">FAQ</span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            Get quick answers about your InsureCareCenter account, payments, and policy management.
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-3">
              <div className="flex items-center gap-2 px-1 py-2 text-slate-900 font-bold text-lg border-b border-slate-200">
                {group.icon}
                <h2>{group.category}</h2>
              </div>

              <div className="space-y-2.5">
                {group.questions.map((item, qIdx) => {
                  const currentIndex = globalIndex;
                  globalIndex++;
                  const isOpen = openFaq === currentIndex;

                  return (
                    <div key={qIdx} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all">
                      <button
                        onClick={() => toggleFaq(currentIndex)}
                        className="w-full px-5 py-4 flex justify-between items-center text-left font-semibold text-slate-800 hover:bg-slate-50 transition text-sm md:text-base"
                      >
                        <span className="flex items-start gap-3">
                          <FaRegQuestionCircle className="text-slate-400 mt-1 flex-shrink-0" />
                          {item.q}
                        </span>
                        {isOpen ? <FaChevronUp className="text-[#00a98f] flex-shrink-0 ml-4" /> : <FaChevronDown className="text-slate-400 flex-shrink-0 ml-4" />}
                      </button>
                      
                      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 border-t border-slate-100" : "max-h-0"}`}>
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

        <div className="mt-14 p-6 bg-emerald-50 rounded-xl border border-emerald-100 text-center max-w-2xl mx-auto shadow-sm">
          <h3 className="font-bold text-emerald-950 mb-1 text-base">Still have questions?</h3>
          <p className="text-xs text-emerald-800 mb-4">Our support team is here to help with your insurance needs.</p>
          <Link to="/contact" className="inline-block text-xs font-bold text-white bg-[#00a98f] hover:bg-[#008f79] px-6 py-2.5 rounded-full transition">
            Contact Customer Care
          </Link>
        </div>
      </main>
    </div>
  );
}