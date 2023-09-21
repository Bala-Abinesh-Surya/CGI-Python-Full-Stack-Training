import React from "react";

import Counter from "./configuration/Counter";
import store from './configuration/store'

import { Provider } from "react-redux";

export default function IncrementDecrement(){
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}