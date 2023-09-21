import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    books: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD_BOOK':
            return {...state, books: [...state.books, action.newBook]}

        default:
            return state
    }
}

export default configureStore({reducer})