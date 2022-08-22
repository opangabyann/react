import React from "react";
import "../styles/style.css"

 function Input({ label, ...props }) {
  return (
    <React.Fragment>
      <div className="input border container">
        <input {...props}  id={label}></input>
      </div>
    </React.Fragment>
  );
}

function Textarea({ label, ...props }) {
    return (
      <React.Fragment>
        <div className="input border container mt-2">
          <textarea cols="30" rows="8" {...props} type="text" id={label}></textarea>
        </div>
      </React.Fragment>
    );
  }

  function Button ({disabled,title,...props}){
    return(
        <button 
        disabled={disabled}
        {...props}
        className="button bg-slate-800 text-slate-300 text-center"
        >{title}</button>
    )
  }

  export {Input,Textarea,Button}
