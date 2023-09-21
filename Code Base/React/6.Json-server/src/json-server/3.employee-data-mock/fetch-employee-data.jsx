import { useEffect, useState } from "react"

import axios from "axios"

export default function FetchEmployeeData(){
    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/employees')
            .then((response) => setEmployees(response.data))
    }, [])

    return (
        <div className="col-md-6 offset-md-3">
            <h3 className="text-center mt-3">Employees list</h3>
            {employees.length != 0 ? (
                <table className="table table-hover table-striped caption-top mt-4">
                    <caption>Fetched from JSON server</caption>
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                     <tbody>
                       {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName ? employee.lastName : '-'}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <p className="text-center mt-3">Loading....</p>}
        </div>
    )
}