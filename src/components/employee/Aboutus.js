import React from "react";

const Aboutus = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-4">
        Welcome to our job portal! We are dedicated to connecting job seekers
        with their dream opportunities and helping employers find the perfect
        candidates for their roles.
      </p>
      <p className="text-lg mb-4">
        Our mission is to simplify the job search process and make it efficient
        for both job seekers and employers. We understand the challenges faced
        by both parties in the hiring process, and we strive to provide
        innovative solutions to address those challenges.
      </p>
      <h3 className="text-2xl font-bold mb-2">Our Features:</h3>
      <ul className="list-disc ml-6 mb-4">
        <li className="text-lg">
          Advanced search functionality to filter job listings based on various
          criteria such as location, industry, and experience level.
        </li>
        <li className="text-lg">
          User-friendly interface for easy navigation and seamless user
          experience.
        </li>
        <li className="text-lg">
          Personalized job recommendations based on user preferences and
          previous job searches.
        </li>
        <li className="text-lg">
          Efficient communication channels between employers and job seekers,
          including messaging and application tracking.
        </li>
        <li className="text-lg">
          Robust job posting and applicant tracking system for employers to
          manage their recruitment process effectively.
        </li>
      </ul>
      <h3 className="text-2xl font-bold mb-2">Our Team:</h3>
      <p className="text-lg mb-4">
        We are a dedicated team of developers, designers, and professionals
        passionate about revolutionizing the recruitment industry. With years of
        experience in technology and human resources, we are committed to
        delivering the best-in-class solutions for job seekers and employers
        alike.
      </p>
      <p className="text-lg">
        Feel free to explore our job portal and reach out to us if you have any
        questions or feedback. We are here to help you succeed in your job
        search or recruitment journey!
      </p>
    </div>
  );
};

export default Aboutus;
