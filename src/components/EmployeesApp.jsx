import React, { useState } from "react";
import SaveEmployees from "./SaveEmployees";
import ListEmployees from "./ListEmployees";

const EmployeesApp = () => {
  const [dataEmployee, setdataEmployee] = useState([]);

  const addEmployees = (newEmploye) => {
    setdataEmployee([...dataEmployee, newEmploye]);
    console.log("Employee added");
  };

  return (
    <>
      <div className="welcome-message">
        <h1>Employees App</h1>
        <h3>Welcome to the Employees App!</h3>
        <h3>This app was create with React + Vue </h3>
      </div>
      <SaveEmployees OnaddEmployees={addEmployees} />
      <ListEmployees data={dataEmployee} />
    </>
  );
};

export default EmployeesApp;
