import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmployeeProfile = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    description: "",
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const result = await axios.get(
        `http://localhost:9192/employee/employee/${id}`
      );
      setEmployee(result.data);
    } catch (error) {
      console.error("Error loading employee:", error);
    }
  };

  return (
    <section className="shadow bg-gray-100">
      <div className="container py-8 mt-36">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4 h-full">
              <div className="text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-full mx-auto mb-4"
                  style={{ width: 150 }}
                />
                <h5 className="text-xl mb-3">{`${employee.firstName} ${employee.lastName}`}</h5>
                <div className="flex justify-center mb-4">
                  <button type="button" className="btn btn-primary mr-2">
                    Call
                  </button>
                  <button type="button" className="btn btn-warning">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4">
                <div>
                  <h5 className="text-lg font-semibold">First Name</h5>
                  <p className="text-sm text-gray-600">{employee.firstName}</p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold">Last Name</h5>
                  <p className="text-sm text-gray-600">{employee.lastName}</p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold">Email</h5>
                  <p className="text-sm text-gray-600">{employee.email}</p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold">Department</h5>
                  <p className="text-sm text-gray-600">{employee.department}</p>
                </div>
                <div className="col-span-2">
                  <h5 className="text-lg font-semibold">Description</h5>
                  <p className="text-sm text-gray-600">
                    {employee.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeProfile;
