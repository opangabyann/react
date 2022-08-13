import React from "react";

export default function Input({label, ...props}){
    return (
        <React.Fragment>

            <div className="input">
                <label className="label" htmlFor={label}>
                {label}:
                </label>

                <input {...props} className="input-text" id={label} />
            </div>
        </React.Fragment>
    )
}