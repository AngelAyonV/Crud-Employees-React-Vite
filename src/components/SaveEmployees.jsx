import React, { useState } from "react";

const SaveEmployees = ({ OnaddEmployees }) => {
  let ID = 0;
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Age, setAge] = useState("");
  const [WorkPosition, setWorkPosition] = useState("");
  const [Employee, setEmployee] = useState([]);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeWorkPosition = (event) => {
    setWorkPosition(event.target.value);
  };

  const btnAddEmployee = () => {
    // Crear el nuevo empleado con los valores actuales
    const newEmployee = { ID, Name, LastName, Age, WorkPosition };
    console.log(newEmployee);
    // Llamar directamente a addEmployees con el nuevo objeto
    OnaddEmployees(newEmployee);

    // Limpiar los inputs
    setName("");
    setLastName("");
    setAge("");
    setWorkPosition("");
    ID++; // Incrementar el ID para el próximo empleado
  };

  return (
    <div className="component-SaveEmployees">
      <h4>Write a new employee</h4>
      <div className="my-3 d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control mb-2 w-50"
          placeholder="Name"
          onChange={handleChangeName}
          value={Name}
        />
        <input
          type="text"
          className="form-control mb-2 w-50"
          placeholder="Last name"
          onChange={handleChangeLastName}
          value={LastName}
        />
        <input
          type="number"
          className="form-control mb-2 w-50"
          placeholder="Age"
          onChange={handleChangeAge}
          value={Age}
        />
        <input
          type="text"
          className="form-control mb-2 w-50"
          placeholder="Work position"
          onChange={handleChangeWorkPosition}
          value={WorkPosition}
        />
        <button onClick={btnAddEmployee} className="btn btn-primary w-50">
          Save
        </button>
      </div>
    </div>
  );
};

export default SaveEmployees;
