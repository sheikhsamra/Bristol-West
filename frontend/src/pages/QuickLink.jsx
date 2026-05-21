import React from "react";
import { Link } from "react-router-dom";
import { FaCreditCard, FaFileInvoice, FaIdCard } from "react-icons/fa";

export default function QuickLinks() {
  const links = [
    {
      title: "Make a Payment",
      icon: <FaCreditCard className="text-white text-7xl mb-2" />,
      path: "/MakePayment",
    },
    {
      title: "Report/View a Claim",
      icon: <FaFileInvoice className="text-white text-7xl mb-2" />,
      path: "/Claims",
    },
    {
      title: "View ID",
      icon: <FaIdCard className="text-white text-7xl mb-2" />,
      path: "/FindPolicy",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-[#00a98f] text-center mb-2">
          Quick Links
        </h2>
        <p className="text-center text-[#00a98f] mb-8">No Login Required</p>

        {/* Flex container with justify-between */}
        <div className="flex flex-col md:flex-row justify-between mt-10 gap-8 w-full max-w-5xl mx-auto">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="bg-[#00a98f] flex flex-col items-center justify-center py-10 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#056557] flex-1"
            >
              {link.icon}
              <h3 className="text-white font-bold text-2xl mb-2 hover:underline">
                {link.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
