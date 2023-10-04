import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeDetailsPage() {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});

  console.log(employeeId);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/employees/${employeeId}`)
      .then((reponse) => setEmployee(reponse.data));
  }, []);

  return (
    <div className="col-md-6 offset-md-3">
      <h3 className="text-center mt-3 mb-3">Employee</h3>
      {employee.name ? (
        <table className="table table-hover table-striped table-bordered caption-top">
          <caption>Employee Details</caption>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{employee["_id"]}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{employee["name"]}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{employee["age"]}</td>
            </tr>
            <tr>
              <th>Position</th>
              <td>{employee["position"]}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
