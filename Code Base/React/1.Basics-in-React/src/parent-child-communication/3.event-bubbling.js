import { Component } from "react";

export default class EventBubbling extends Component{
    constructor(props){
        super(props)

        this.state = {
            text: 'Initial data'
        }
    }

    // changing the value of the text in the child component
    // it is possible by passing this function as a prop to the child component
    changeText = (incomingText) => {
        this.setState({text: incomingText})
    }

    render(){
        return (
            <Content text={this.state.text} change={this.changeText}/>
        )
    }
}

class Content extends Component{
    render(){
        return (
            <>
                <p>{this.props.text}</p>
                <button onClick={() => this.props.change('Text from the child component...')}>Change text</button>
            </>
        )
    }
}