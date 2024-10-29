import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
   
  const [isActive, setActive] = useState()
 
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-light fw-bold" style={{ fontSize: '2rem' }} to="/">
          React Jobs
        </Link>
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
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/jobs">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/add-job">
                Add Job
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>

  );
}
