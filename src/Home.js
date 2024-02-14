// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to the Job Portal</h1>
      <p>
        Find your dream job or post job openings. Explore and connect with the
        right talent.
      </p>

      <div className="mt-4">
        <h2>Job Seekers</h2>
        <p>Looking for a job? Explore our job listings and find your dream job.</p>
        <Link to="/viewEmployee" className="btn btn-primary">
          Explore Jobs
        </Link>
      </div>

      <div className="mt-4">
        <h2>Employers</h2>
        <p>Post your job openings and connect with qualified candidates.</p>
        <Link to="/addEmployee" className="btn btn-success">
          Post a Job
        </Link>
      </div>
    </div>
  );
};

export default Home;
