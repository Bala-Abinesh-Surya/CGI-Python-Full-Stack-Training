import { Component } from "react";

export default class EchoBox extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: ''
        }
    }

    updateInput = (event) => {
        this.setState({message: event.target.value})
    }

    render(){
        return (
            <>
                <p>Echo Box</p>
                <input type="text" value={this.state.message} onChange={this.updateInput}/>
                <Text message={this.state.message} />
            </>
        )
    }
}

class Text extends Component{
    render(){
        return (
            <p>{this.props.message}</p>
        )
    }
}