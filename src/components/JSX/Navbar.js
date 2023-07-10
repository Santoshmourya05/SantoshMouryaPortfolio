import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Css/Navbar.css";
import { FaBars } from 'react-icons/fa';
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >

          <FaBars  />
        </button>
      </div>
      
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/education"> Eduction </Link>
        <Link to="/skills"> Skills </Link>
        <Link to="/experience"> Experience </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/resume"> Resume </Link>
        <Link to="/contact"> Contact </Link>
        
        
      </div>
    </div>
  );
}

export default Navbar;