import React from "react";
import "./style/Header.css";

function Header() {
  return (
    <header>
      <div className="specialities">
        <div className="nav-search">
          <select className="search-select">
            <option>All</option>
          </select>
          <input placeholder="Search Medicalcare.in" className="search-input" />
          <div className="Search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="nav-india border">
          EN<select className="nav-select"></select>
        </div>
        <div className="nav-signup border">
          <p><span>Hello, Sign Up</span></p>
          <p className="nav-second">Accounts & Lists</p>
        </div>
        <div className="special">
          <a href="specialities.html">Specialities</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
