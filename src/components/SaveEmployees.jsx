import React, { useState } from "react";

const SaveEmployees = ({ addEmployees }) => {
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Age, setAge] = useState("");
  const [WorkPosition, setWorkPosition] = useState("");
  const [inputData, setinputData] = useState();

  const handleChangeName = (e) => {
    setName({ ...Name, [e.target.name]: e.target.value });
  };
  const handleChangeLastName = (e) => {
    setLastName({ ...LastName, [e.target.name]: e.target.value });
  };
  const handleChangeAge = (e) => {
    setAge({ ...Age, [e.target.name]: e.target.value });
  };
  const handleChangeWorkPosition = (e) => {
    setWorkPosition({ ...WorkPosition, [e.target.name]: e.target.value });
  };

  const btnAddEmployee = () => {
    //logica para agg el empleado
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
        />
        <input
          type="text"
          className="form-control mb-2 w-50"
          placeholder="Last name"
          onChange={handleChangeLastName}
        />
        <input
          type="number"
          className="form-control mb-2 w-50"
          placeholder="Age"
          onChange={handleChangeAge}
        />
        <input
          type="text"
          className="form-control mb-2 w-50"
          placeholder="Work position"
          onChange={handleChangeWorkPosition}
        />
        <button className="btn btn-primary w-50">Save</button>
      </div>
    </div>
  );
};

export default SaveEmployees;
