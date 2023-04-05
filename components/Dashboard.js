import React from "react";
import Link from "next/link";

const Dashboard = ({ setView }) => {
  const logoutButton = () => {
    localStorage.removeItem("user_login");
    setView(false);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1 className="text-white font-weight-bold">Demo Client</h1>
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
            <ul className="navbar-nav ms-auto head">
              <li className="nav-item">
                <Link
                  href="/patient"
                  className="nav-link active text-white font-weight-bold"
                  aria-current="page"
                >
                  Patient Details
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="nav-link active text-white font-weight-bold"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={logoutButton}
                  className="nav-link active text-white font-weight-bold"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
