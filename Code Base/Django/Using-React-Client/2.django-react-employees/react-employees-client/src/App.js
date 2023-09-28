import { useState, useEffect } from "react";
import axios from "axios"

function App() {
  const [employees, setEmployees] = useState([])

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/employees/details')
      .then((response) => setEmployees(response.data))
  }, [])
  
  return (
    <div className="col-md-6 offset-md-3">
      <h3 className="text-center mt-3">All Employees</h3>
      {employees.length !== 0 && (
        <table className="table table-hover table-striped table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr>
                <td>{employee['id']}</td>
                <td>{employee['first-name']}</td>
                <td>{employee['last-name'] === 'null' ? '-' : employee['last-name']}</td>
                <td>{employee['address']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
