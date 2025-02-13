import React, { useState } from "react";
import SaveEmployees from "./SaveEmployees";
import ListEmployees from "./ListEmployees";
import { Validations } from "../helpers/Validation";

const EmployeesApp = () => {
  const [dataEmployee, setdataEmployee] = useState([]);
  const [employeeEdit, setemployeeEdit] = useState(null);

  // Funcion para agregar a data employee los nuevos empleados
  const addEmployees = (newEmploye) => {
    if (Validations(newEmploye)) {
      setdataEmployee([...dataEmployee, newEmploye]);
    }
  };

  const onDeleteEmployee = (id) => {
    setdataEmployee(dataEmployee.filter((employee) => employee.ID !== id));
  };

  const onEditEmployee = (id) => {
    // Implementar el código para editar un empleado
    console.log("Editar empleado #" + id);
    const employee = dataEmployee.find((emp) => emp.ID === id);
    if (employee) {
      setemployeeEdit(employee);
    }
  };
  //Funcion para agregar a data employee los employees ya editados
  const newEditEmployee = (employee) => {
    // Actualizar solo el empleado con el mismo ID en dataEmployee
    if (Validations(employee)) {
      setdataEmployee((dataEmployee) =>
        dataEmployee.map((emp) => (emp.ID === employee.ID ? employee : emp))
      );
      setemployeeEdit(null);
    }
  };

  return (
    <>
      <div className="welcome-message">
        <h1>Employees App</h1>
        <h3>Welcome to the Employees App!</h3>
        <h3>This app was create with React + Vue </h3>
      </div>
      <SaveEmployees
        OnaddEmployees={addEmployees}
        OneditEmployee={employeeEdit}
        newEditEmployee={newEditEmployee}
      />
      <ListEmployees
        data={dataEmployee}
        onDelete={onDeleteEmployee}
        onEdit={onEditEmployee}
      />
    </>
  );
};

export default EmployeesApp;
