import { configureStore } from "@reduxjs/toolkit";

const initialStore = {
    cart: []
}

function reducer(state= initialStore, action){
    switch(action.type){
        case 'ADD_ITEM': 
            return {...state, cart: [...state.cart, action.newProduct]}

        default:
            return state
    }
}

export default configureStore({reducer})