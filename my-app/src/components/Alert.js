import React from "react";

export function Alert({ message }) {
  return (
    <div className="alert">
      <span className="alertMessage">{message}</span>
    </div>
  );
}
