import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

// Destructuring the type, className, children and onClick props, applying them to the button element
export function FormBtn({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ float: "center", marginBottom: 10 }} className={"btn"}>
      {children}
    </button>
  );
}

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn">
//       {props.children}
//     </button>
//   );
// }
