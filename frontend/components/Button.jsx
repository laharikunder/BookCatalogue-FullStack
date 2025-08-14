import React from "react";

export default function Button({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[rgba(148,94,149,0.9)] hover:bg-[#8b4996] text-white px-4 py-2 rounded-lg hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed transition ${className}`}
    >
      {label}
    </button>
  );
}
