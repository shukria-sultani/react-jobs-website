import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-light fw-bold" style={{ fontSize: '2rem' }} href="#">
          React Jobs
        </a>
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
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-light" href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Add Job
              </a>
            </li>
          </ul>
        </div>
      </div>

    </nav>

  );
}
