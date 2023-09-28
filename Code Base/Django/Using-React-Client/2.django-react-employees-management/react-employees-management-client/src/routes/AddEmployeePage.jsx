import React, { useEffect, useState } from "react"
import { Form } from "react-router-dom"
import axios from "axios"

// components
import NavBar from "../components/NavBar"

export default function AddEmployeePage(){
    const [formFields, setFormFields] = useState({
        name: '',
        gender: '',
        village: ''
    })

    const formOnChange = (event) => {
        setFormFields({...formFields, [event.target.name]: event.target.value})
    }

    const formSubmit = (event) => {
        event.preventDefault()

        axios.post('http://127.0.0.1:8000/', { name: 'bala' })
        .then((response) => console.log(response.data));
    }

    return (
        <>
        <NavBar />
        <div className="col-md-6 offset-md-3">
            <h4 className="text-center mt-3">Add an employee</h4>
            <Form onChange={formOnChange} onSubmit={formSubmit}>
                <div class="mb-3">
                    <label for="name-input" class="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name-input" 
                        name="name"
                        required 
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-3">
                    <label for="name-input" class="form-label">Gender</label>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            id="male-radio" 
                            value="Male"
                            required 
                        />
                        <label className="form-check-label" for="male-radio">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            id="female-radio"
                            value="Female" 
                            required />
                        <label className="form-check-label" for="female-radio">
                            Female
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            id="not-radio"
                            value="Rather not say" 
                            required />
                        <label className="form-check-label" for="not-radio">
                            Rather not say
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="village-input" className="form-label">Village</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="village-input" 
                        placeholder="Enter your village" 
                        required
                        name="village"
                    />
                </div>
                <input type="submit" className="btn btn-primary me-3" value="Submit" />
                <input type="button" className="btn btn-danger" value='Clear' />
            </Form>
        </div>
        </>
    )
}
