import React from "react";

export const Button = ({ children, className = "", ...props }) => (
  <button
    className={`rounded-lg px-4 py-2 text-sm font-medium bg-pink-600 text-white hover:bg-pink-700 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);
