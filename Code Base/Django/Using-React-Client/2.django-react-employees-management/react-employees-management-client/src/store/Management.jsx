import { configureStore } from "@reduxjs/toolkit"

const initialEmployees = {
    employees: []
}

function reducer(state = initialEmployees, action){
    switch(action.type){
        case 'GET_ALL_EMPLOYEES':
            return state

        case 'ADD_ALL_EMPLOYEES':
            return {...state, employees: action.employees}

        default:
            return state
    }
}

export default configureStore({reducer})