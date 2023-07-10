import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar((prev) => !prev)}>
          <FaBars />
        </button>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/flexbox-playground">Flexbox</NavLink>
        <NavLink to="/grid-playground">Grid</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
