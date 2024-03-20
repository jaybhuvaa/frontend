import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {
  let navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    description: "",
  });
  const { firstName, lastName, email, department, description } = employee;

  const handleInputChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const saveEmployee = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    console.log(userId);
    console.log(employee);
    await axios.post(`http://localhost:9192/employee/${userId}`, employee);
    navigate("/viewEmployee");
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow mt-20">
      <h2 className="mt-5"> Add Employee</h2>
      <form onSubmit={(e) => saveEmployee(e)}>
        <div className="input-group mb-5 mt-3">
          <label className="input-group-text" htmlFor="fristName">
            First Name
          </label>
          <input
            className="form-control col-sm-6 "
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Your Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="department">
            Department
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            required
            value={department}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="description">
            Description
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="description"
            id="description"
            required
            value={description}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="flex mb-3">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
          >
            Save
          </button>

          <Link
            to={"/viewEmployee"}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg ml-2" // Adjusted margin to ml-2
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
