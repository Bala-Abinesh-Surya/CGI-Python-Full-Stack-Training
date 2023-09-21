import React from "react";

export default function Button(props){
    const {increment, increase} = props

    return (
        <button onClick={() => increase(increment)}>+{increment}</button>
    )
}