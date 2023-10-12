import { configureStore } from "@reduxjs/toolkit"

const initialState = {
  bookId: ''
}

function reducer(state = initialState, action){
  switch(action.type){
    case 'MODIFY':
      return {...state, bookId: action.newId}

    default:
      return state
  }
}

export default configureStore({reducer})