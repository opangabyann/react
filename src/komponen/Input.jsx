import React from "react";
import "../styles/style.css";

export default function Input({ inputStyle, label, isError = false, textError, ...props }) {
  return (
    <div className="input flex flex-col">
      <label className="label text-white" htmlFor={label}>
        {label}
      </label>
      <input
        {...props}
        className={`${inputStyle} text-white`}
        id={label}
      />
      {isError && (
        <p className="error text-red-600 italic font-semibold text-sm">
          {textError}
        </p>
      )}
    </div>
  );
}
