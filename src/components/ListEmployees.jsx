import React, { useEffect } from "react";

const ListEmployees = ({ data, onDelete, onEdit }) => {
  useEffect(() => {}, [data]);

  return (
    <div className="table-container">
      {data.length === 0 ? (
        <div>No employees found.</div> // Mensaje si no hay empleados
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Work position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.ID}>
                <td>{employee.Name}</td>
                <td>{employee.LastName}</td>
                <td>{employee.Age}</td>
                <td>{employee.WorkPosition}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(employee.ID)} // Eliminar el empleado
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary btn-sm mx-2"
                    onClick={() => onEdit(employee.ID)} // Eliminar el empleado
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListEmployees;
