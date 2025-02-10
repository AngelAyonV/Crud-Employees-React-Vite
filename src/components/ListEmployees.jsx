import React from "react";

const ListEmployees = () => {
  return (
    <div className="table-container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Work position</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí puedes mapear los datos dinámicamente */}
          <tr>
            <td>Ejemplo</td>
            <td>Apellido Ejemplo</td>
            <td>25</td>
            <td>Desarrollador</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployees;
