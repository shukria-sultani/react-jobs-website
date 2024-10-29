import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeLink = ({ isActive }) =>
    isActive ? 'nav-link active text-light' : 'nav-link text-light';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand text-light fw-bold" style={{ fontSize: '2rem' }} to="/">
          React Jobs
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mt-2">
            <li className="nav-item">
              <NavLink className={activeLink} aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={activeLink} to="/jobs"> 
                Jobs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={activeLink} to="/add-job">
                Add Job
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
