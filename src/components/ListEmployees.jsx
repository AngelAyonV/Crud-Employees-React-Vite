import React from "react";

const ListEmployees = ({ data }) => {
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
          {data.length > 0 ? (
            data.map((emp, index) => (
              <tr key={index}>
                <td>{emp.Name}</td>
                <td>{emp.LastName}</td>
                <td>{emp.Age}</td>
                <td>{emp.WorkPosition}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No employees added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployees;
