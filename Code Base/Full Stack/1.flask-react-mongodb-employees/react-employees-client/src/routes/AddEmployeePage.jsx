import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddEmployeePage() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    age: null,
    position: ''
  });

  const formOnChangeHandler = (event) => {
    event.preventDefault();

    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  const formOnSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://127.0.0.1:5000/employees", employee)
    alert(response.data.message)

    // clearing the current employee
    setEmployee({ name: "", position: "", age: null });

    // navigating the user to the home page
    navigate("/");
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h4 className="text-center mt-3 mb-3">Fill out the details</h4>
      <form onChange={formOnChangeHandler} onSubmit={formOnSubmitHandler}>
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
        </div>
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
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
