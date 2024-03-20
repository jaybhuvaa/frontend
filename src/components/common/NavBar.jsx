import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const status = useSelector((state) => state.auth.status);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const toggleNavbar = (shouldClose = true) => {
    if (shouldClose) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white fixed top-0 left-0 right-0 z-50 h-16">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="logo-text-container">
          <h1 className="text-xl font-bold">EMPLOYEE PORTAL
          </h1>
        </div>

        <div
          className={`lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbarNav"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto space-y-0 lg:space-y-0 lg:space-x-4">
            <li className="nav-item">
              <NavLink className="nav-link mt-2 hover:text-black" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link mt-2 hover:text-gray-200" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mt-2 hover:text-gray-200"
                to="/contactus"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <div className="relative">
                <button
                  className="nav-link mt-2 hover:text-gray-200"
                  onClick={() => toggleNavbar()}
                >
                  Employee
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        to="/addEmployee"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => toggleNavbar(false)}
                      >
                        Add
                      </Link>
                      <Link
                        to="/viewEmployee"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => toggleNavbar(false)}
                      >
                        View
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className="nav-item">
              {status ? (
                <button
                  className="nav-link mt-2 hover:text-gray-200"
                  onClick={logout}
                >
                  Logout
                </button>
              ) : (
                <Link className="nav-link mt-2 hover:text-gray-200" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
