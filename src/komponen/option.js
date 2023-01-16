import React from "react";

export default function Option({ label, option1,option2,optionStyle, ...props }) {
  return (
    <div className="flex flex-col ">
      <label
        class="block mb-2 text-md text-white"
      >
        {label}
      </label>
      <select
        {...props}
        className={`${optionStyle}`}
      >
        <option selected>{label}</option>
        <option >{option1}</option>
        <option >{option2}</option>
      </select>

      {/* <label className="text-white">{label}</label>
      <select {...props} className={`${optionStyle} `}>
        <option>pilih gender</option>
        <option>laki-laki</option>
        <option>perempuan</option>
      </select> */}
    </div>
  );
}