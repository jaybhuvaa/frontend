import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeesView = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:9192/employee", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setEmployees(result.data);
    }
  };

  return (
    <section>
      <table className="table table-bordered table-hover">
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
                <button className="btn btn-info">View</button>
              </td>
              <td className="mx-2">
                <button className="btn btn-warning">Update</button>
              </td>
              <td className="mx-2">
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EmployeesView;
