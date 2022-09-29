import React from "react";

// export default function Button({
//   title,
//   color = "red",
//   onClick,
//   name,
//   id,
//   disabled = false,
// }) {
//   return (
//     <React.Fragment>
//       <button
//         onClick={onClick}
//         name={name}
//         id={id}
//         disabled={disabled}
//         style={{
//           backgroundColor: color,
//         }}
//         className="button"
//       >
//         {title}
//       </button>
//     </React.Fragment>
//   );
// }

export default function Button({ title, text = "",color = "red", disabled, ...props }) {
  return (
    <React.Fragment>
      <button
        disabled={disabled}
        {...props}
        style={{
          backgroundColor: color,
          opacity: disabled ? 0.5 : 1,
          color: text,
        }}
        className="button border-2 border-black rounded-lg mx-2  px-5 py-1"
      >
        {title}
      </button>
    </React.Fragment>
  );
}
