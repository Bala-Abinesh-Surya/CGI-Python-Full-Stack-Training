import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateEmployeePage() {
  const { employeeId } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    async function getEmployeeDetails() {
      const response = await axios.get(
        `http://127.0.0.1:5000/employees/${employeeId}`
      );

      setEmployee(response.data);
    }

    return getEmployeeDetails;
  }, []);

  const formOnChangeHandler = (event) => {
    event.preventDefault();

    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await axios.put(
      `http://127.0.0.1:5000/employees/update/${employee["_id"]}`,
      {
        name: employee["name"],
        age: employee["age"],
        position: employee["position"],
      }
    );

    alert(response.data.message);

    // navigating the user to the home page
    navigate("/");
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h3 className="text-center mt-3 mb-3">Update Employee</h3>
      {employee && (
        <form onChange={formOnChangeHandler} onSubmit={formSubmitHandler}>
          <div class="mb-3">
            <label for="employeeNameInput" class="form-label">
              Employee Name
            </label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="employeeNameInput"
              placeholder="Enter your name"
              value={employee.name}
              required
            />
            <div class="mb-3">
              <label for="employeeAgeInput" class="form-label">
                Employee Age
              </label>
              <input
                type="number"
                class="form-control"
                name="age"
                id="employeeAgeInput"
                placeholder="Enter your age"
                defaultValue={null}
                value={employee.age}
                required
              />
            </div>
            <div class="mb-3">
              <label for="employeePositionInput" class="form-label">
                Employee Position
              </label>
              <input
                type="text"
                class="form-control"
                name="position"
                id="employeePositionInput"
                placeholder="Enter your position"
                value={employee.position}
                required
              />
            </div>
            <button className="btn btn-success me-3" type="submit">
              Submit
            </button>
            <button className="btn btn-danger" type="submit" onClick={() => navigate('/')}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
