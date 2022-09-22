import React, { Children } from "react";
export default function Select({ label, isError, textError, Children,...props}) {
    return (
      <div className="input">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        <Select {...props} className="input-text border" id={label}>
            {Children}
        </Select>
        {isError && <p className="error">{textError}</p>}
      </div>
    );
  }