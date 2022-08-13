import React from "react";

export default function Isi({label, ...props}){
    return(
        <React.Fragment>
        <div className="input" >
        <label className="label" htmlFor={label}>
        {label}
        </label>

        <input {...props} className="input" id={label} />
        </div>
    </React.Fragment>
    )
}