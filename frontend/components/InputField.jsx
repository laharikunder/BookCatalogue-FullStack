import React from "react";

export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isTextArea = false,
  rows = 3,
}) {
  return (
    <div className="mb-2">
      {label && <label className="block mb-1 font-semibold">{label}</label>}
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      )}
    </div>
  );
}
