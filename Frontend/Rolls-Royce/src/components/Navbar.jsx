import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Rolls-Royce</div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
      <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
        <li>
          <a href="#models" onClick={() => setIsOpen(false)}>
            Models
          </a>
        </li>
        <li>
          <a href="#bespoke" onClick={() => setIsOpen(false)}>
            Bespoke
          </a>
        </li>
        <li>
          <a href="#heritage" onClick={() => setIsOpen(false)}>
            Heritage
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
