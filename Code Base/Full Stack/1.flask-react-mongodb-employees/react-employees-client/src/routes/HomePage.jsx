import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function HomePage() {
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/employees")
      .then((response) => setEmployees(response.data));
  }, [reload]);

  const deleteEmployee = (id) => {
    axios
      .delete(`http://127.0.0.1:5000/employees/delete/${id}`)
      .then((response) => alert(response.data.message));

    setReload(!reload);
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h4 className="mt-3 text-center">All employees</h4>
      <table className="table table-hover table-striped table-bordered mt-3 caption-top">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>View</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee["_id"]}>
              <td>{employee["name"]}</td>
              <td>{employee["age"]}</td>
              <td>{employee["position"]}</td>
              <td>
                <Link to={`/employees/${employee["_id"]}`}>View</Link>
              </td>
              <td>
                <Link to={`/employees/update/${employee["_id"]}`}>Update</Link>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteEmployee(employee["_id"])}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <caption>List of employees</caption>
      </table>
    </div>
  );
}

export default HomePage;
