import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "./NavBar.css";
import { useSelector } from "react-redux";

const NavBar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const status = useSelector(state => state.auth.status);

 const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
 };

 // Updated toggleNavbar function to accept a parameter
 const toggleNavbar = (shouldClose = true) => {
    if (shouldClose) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
    }
 };

 return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
       
        <div className="logo-text-container">
      <Link to="/">
        <img src="https://logopond.com/logos/4a2e5570e552de48541f80b23794bb7a.png" alt="Job Portal" className="logo" />
      </Link>
      <Link className="text-xl font-bold" to={"/"}>
        JOB PORTAL
      </Link>
    </div>
        
        <button
          className="lg:hidden ml-auto p-2 border border-white"
          type="button"
          onClick={() => toggleNavbar()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`hidden lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbarNav">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Contact Us</Link>
            </li>
            <li className="nav-item">
              <div className="relative">
                <button className="nav-link" onClick={() => toggleNavbar()}>
                 Employee
                </button>
                {isOpen && (
                 <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link to="/addEmployee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => toggleNavbar(false)}>Add</Link>
                      <Link to="/viewEmployee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => toggleNavbar(false)}>View</Link>
                    </div>
                 </div>
                )}
              </div>
            </li>
            <li className="nav-item">
              {status ? (
                <button className="nav-link" onClick={logout}>
                 Logout
                </button>
              ) : (
                <Link className="nav-link" to="/login">
                 Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
 );
};

export default NavBar;

