import React from "react";
import "../styles/style.css"

export default function Input({ label, isError = false, textError, ...props }) {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input {...props} className="input-text border " id={label} />
      {isError && <p className="error text-red-600 italic font-semibold text-sm">{textError}</p>}
    </div>
  );
}
