import React, { useState } from "react";
import './Menu.css';

const BallMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <ul id="menu" className={menuOpen ? "open" : ""}>
        {/* Menu open and close buttons */}
        <a
          className="menu-button icon-plus"
          id="open-menu"
          href="#menu"
          title="Show navigation"
          onClick={toggleMenu}
          style={{ display: menuOpen ? "none" : "block" }}
        ></a>
        <a
          className="menu-button icon-minus"
          href="#0"
          title="Hide navigation"
          onClick={toggleMenu}
          style={{ display: menuOpen ? "block" : "none" }}
        ></a>

        {/* Menu items */}
        <li className="menu-item">
          <a href="https://github.com">
            <span className="fa fa-github"></span>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://linkedin.com">
            <span className="fa fa-linkedin"></span>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://instagram.com">
            <span className="fa fa-instagram"></span>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://twitter.com">
            <span className="fa fa-twitter"></span>
          </a>
        </li>
      </ul>

      <div className="content">
        <div className="text">
          <h3>Click circle!</h3>
          <h6>Tada...!</h6>
        </div>
      </div>
    </div>
  );
};

export default BallMenu;
