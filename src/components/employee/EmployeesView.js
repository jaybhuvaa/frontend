import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./EmployeeView.css";

const EmployeesView = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);
  const loadEmployees = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const result = await axios.get(
        `http://localhost:9192/employee/user/${userId}`,
        {
          validateStatus: () => true,
        }
      );

      
        console.log(result.data); // Add this line to check the data in the console
        setEmployees(result.data);
      
    } catch (error) {
      console.error("Error loading employees:", error);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9192/employee/delete/${id}`);
    loadEmployees();
  };

  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Description</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.description}</td>
              <td className="mx-2">
                <Link
                  to={`/employeeProfile/${employee.id}`}
                  className="btn btn-info"
                >
                  {" "}
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/editEmployee/${employee.id}`}
                  className="btn btn-warning"
                >
                  {" "}
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(employee.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EmployeesView;
