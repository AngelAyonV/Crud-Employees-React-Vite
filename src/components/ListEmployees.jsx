import React from "react";

const ListEmployees = ({ data, onDelete }) => {
  return (
    <div className="table-container">
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
          {data.length > 0 ? (
            data.map((emp, index) => (
              <tr key={index}>
                <td>{emp.Name}</td>
                <td>{emp.LastName}</td>
                <td>{emp.Age}</td>
                <td>{emp.WorkPosition}</td>
                <td>
                  <button
                    onClick={onDelete(index)}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm mx-2">Delete</button>
                </td>
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
