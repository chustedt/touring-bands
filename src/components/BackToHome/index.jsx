import { ChevronLeft } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const BackToHome = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb navigation">
      <NavLink to="/" className="flex mb-4">
        <ChevronLeft aria-hidden role="presentation" tabIndex="-1" />
        Back to home
      </NavLink>
    </nav>
  );
};

export default BackToHome;
