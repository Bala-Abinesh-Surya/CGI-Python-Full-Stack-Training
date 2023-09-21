import React, { Component } from "react";

export default class Ref extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: ''
        }

        this.myInput = React.createRef()
    }

    updateInput = (event) => {
        this.setState({message: event.target.value})
    }

    clearInput = (event) => {
        this.setState({message: ''})

        // focussing the input again using ref
        // this.myInput - React ref object
        // this.myInput.current - underlying DOM element (th this case, input)
        this.myInput.current.focus()
    }

    render(){
        return (
            <>
                <p>Ref</p>
                <input type="text" ref={this.myInput} value={this.state.message} onChange={this.updateInput}/>
                <button onClick={this.clearInput}>CLEAR</button>
                <p>Input will be in focus after clearing the text</p>
            </>
        )
    }
}
