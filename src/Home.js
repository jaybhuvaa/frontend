import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container mt-36 text-center"
      style={{
        backgroundImage: "url()",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <h1>Welcome to the Employee Portal</h1>
        <p>
          Find your dream job or post job openings. Explore and connect with the
          right talent.
        </p>
      </div>

      <div className="mt-16 d-flex justify-content-between">
        <div
          style={{
            width: "45%",
            backgroundColor: "#3282B8",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ color: "#BBE1FA" }}>Job Seekers</h2>
          <p style={{ color: "#BBE1FA" }}>
            Looking for a job? Explore our job listings and find your dream job.
          </p>
          <Link
            to="/viewEmployee"
            className="btn"
            style={{
              backgroundColor: "#BBE1FA",
              borderColor: "#BBE1FA",
            }}
          >
            Explore Employee
          </Link>
        </div>

        <div
          style={{
            width: "45%",
            backgroundColor: "#BBE1FA",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ color: "#0F4C75" }}>Employers</h2>
          <p style={{ color: "#0F4C75" }}>
            Post your job openings and connect with qualified candidates.
          </p>
          <Link
            to="/addEmployee"
            className="btn"
            style={{
              backgroundColor: "#0F4C75",
              color: "#BBE1FA",
              borderColor: "#0F4C75",
            }}
          >
            Add Employee
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
