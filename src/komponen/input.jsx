import React from "react";
import "../styles/style.css"

export default function Input({ label, error = false, textError, ...props }) {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input {...props} className="input-text border " id={label} />

      {error && <p className="error italic text-red-800">tidak sesuai isi input nya</p>}
    </div>
  );
}
