import React from "react";

export default function Select ({label}){
    return(
        <React.Fragment>
            <label className="label" htmlFor={label}>
                {label}
            </label>

            <select name="" id={label}>
                <option value="laki-laki">laki-laki</option>
                <option value="perempuan">perempuan</option>
            </select>
        </React.Fragment>
    )
}