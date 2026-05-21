import React from "react";

export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#0085AD] text-white px-6 py-3 rounded hover:bg-[#48A9C5] transition ${className}`}
    >
      {children}
    </button>
  );
}