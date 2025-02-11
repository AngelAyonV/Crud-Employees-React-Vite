import React, { useState } from "react";
import SaveEmployees from "./SaveEmployees";
import ListEmployees from "./ListEmployees";

const EmployeesApp = () => {
  const [dataEmployee, setdataEmployee] = useState([]);

  const addEmployees = (newEmploye) => {
    setdataEmployee([...dataEmployee, newEmploye]);
  };

  const onDeleteEmployee = (id) => {
    setdataEmployee(dataEmployee.filter((employee) => employee.ID !== id));
  };

  return (
    <>
      <div className="welcome-message">
        <h1>Employees App</h1>
        <h3>Welcome to the Employees App!</h3>
        <h3>This app was create with React + Vue </h3>
      </div>
      <SaveEmployees OnaddEmployees={addEmployees} />
      <ListEmployees data={dataEmployee} onDelete={onDeleteEmployee} />
    </>
  );
};

export default EmployeesApp;
