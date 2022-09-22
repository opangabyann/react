import React from "react";
import "../styles/style.css"

export default function Input({ label, isError, textError, ...props }) {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input {...props} className="input-text border " id={label} />
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
