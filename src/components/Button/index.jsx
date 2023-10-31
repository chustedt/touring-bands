import React from "react";

const Button = ({ type = "button", children }) => {
  return (
    <button
      className="w-full h-10 py-2 px-4 bg-gray-900 text-white font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-100"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
