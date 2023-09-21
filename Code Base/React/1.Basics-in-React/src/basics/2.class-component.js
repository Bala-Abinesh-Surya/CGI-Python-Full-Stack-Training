import { Component } from "react";

class ClassComponent extends Component{
    // if this class does not extend Component, it is just another javascript class    
    render(){    
        const myStyles = {
            fontSize: '300px',
            color: 'red'
        }

        return (
            // also, style={myStyles}
            <h1 style={{fontSize: '100px', color: 'blue'}}>Hello world!</h1>
        )
    }
}

export default ClassComponent;