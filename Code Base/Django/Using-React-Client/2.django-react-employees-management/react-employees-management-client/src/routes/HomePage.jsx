import { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux"

// components
import NavBar from "../components/NavBar";

function HomePage({employees, addEmployees}) {
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/')
      .then((response) => addEmployees(response.data))
  }, [])

  return (
    <>
    <NavBar />
    <div className="col-md-6 offset-md-3">
        <h4 className="text-center mt-3">All employees</h4>
        {employees.length != 0 ? (
            <table className="mt-3 table table-hover table-hover table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Village</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee['id']}>
                            <td>{employee['id']}</td>
                            <td>{employee['name']}</td>
                            <td>{employee['gender']}</td>
                            <td>{employee['village']}</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : <span>Add an employee</span>}
    </div>
    </>
  );
}

const bindState = (state) => ({employees: state.employees})

const bindAction = (dispatch) => ({
  addEmployees: (employees) => dispatch({type: "ADD_ALL_EMPLOYEES", employees: employees})
})

export default connect(
  bindState,
  bindAction
)(HomePage)