import React from "react";
import "../styles/PageError.css";

export default function PageError(props) {
  return (
    <div>
      <div className="PageError">
        Error:❌{props.error.message || props.error}
      </div>
    </div>
  );
}
