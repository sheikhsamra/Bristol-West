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
      icon: <FaUserCog className="text-[#00a98f] text-xl" />,
      questions: [
        {
          q: "Why sign up for an InsureCareCenter account?",
          a: "Registering provides 24/7 access to your policy details. You can view your digital ID cards, enroll in payment reminders, track claim status, submit necessary documents, and update your personal information securely at any time."
        }
      ]
    },
    {
      category: "Payments & Billing",
      icon: <FaDollarSign className="text-[#00a98f] text-xl" />,
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
      icon: <FaExchangeAlt className="text-[#00a98f] text-xl" />,
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
      icon: <FaSms className="text-[#00a98f] text-xl" />,
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
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100 py-3 px-4 md:px-12 text-sm">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Link to="/" className="text-[#00a98f] hover:underline font-medium">Home</Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#0B2545] font-bold">Frequently Asked Questions</span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#00a98f] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Get quick answers about your InsureCareCenter account, payments, and policy management.
          </p>
        </div>

        <div className="space-y-12">
          {faqData.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              <div className="flex items-center gap-3 text-[#0B2545] font-bold text-xl border-b border-slate-200 pb-4">
                {group.icon}
                <h2>{group.category}</h2>
              </div>

              <div className="space-y-4">
                {group.questions.map((item, qIdx) => {
                  const currentIndex = globalIndex++;
                  const isOpen = openFaq === currentIndex;

                  return (
                    <div key={qIdx} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => toggleFaq(currentIndex)}
                        className="w-full px-6 py-5 flex justify-between items-center text-left font-bold text-[#0B2545] hover:bg-[#00a98f]/5 transition"
                      >
                        <span className="flex items-center gap-3">
                          <FaRegQuestionCircle className="text-[#00a98f]" />
                          {item.q}
                        </span>
                        {isOpen ? <FaChevronUp className="text-[#00a98f]" /> : <FaChevronDown className="text-slate-400" />}
                      </button>
                      
                      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 border-t border-slate-50" : "max-h-0"}`}>
                        <div className="p-6 text-slate-600 bg-slate-50/50 leading-relaxed">
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

        {/* Support Box */}
        <div className="mt-20 p-8 bg-[#00a98f] rounded-2xl text-center shadow-lg">
          <h3 className="font-bold text-white mb-2 text-lg">Still have questions?</h3>
          <p className="text-white mb-6 text-sm">Our support team is here to help with your insurance needs.</p>
          <Link to="/contact" className="inline-block font-bold text-[#00a98f] bg-white hover:bg-[#00a98f] hover:text-white px-8 py-3 rounded-xl transition">
            Contact Customer Care
          </Link>
        </div>
      </main>
    </div>
  );
}