import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";
import { useSelector } from "react-redux";


const NavBar = () => {
  const status = useSelector(state => state.auth.status)
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          JOB PORTAL
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/viewEmployee"}
              >
                View All Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/addEmployee"}
              >
                Add Employees
              </Link>
            </li>
            <li className="nav-item">
              {status ? (
                <button className="nav-link active" onClick={logout}>
                  Logout
                </button>
              ) : 
              (<Link
                className="nav-link active"
                aria-current="page"
                to={"/login"}
              >
                Login
              </Link>)}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
