import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useSelector } from "react-redux";
import "react-router-dom";




const NavBar = () => {
  const status = useSelector(state => state.auth.status)
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
 

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <Link className="text-xl font-bold" to={"/"}>
          JOB PORTAL
        </Link>
        <button
          className="lg:hidden ml-auto p-2 border border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden lg:flex lg:items-center lg:w-auto" id="navbarNav">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
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
              ) : (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/login"}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>);
};

export default NavBar;
