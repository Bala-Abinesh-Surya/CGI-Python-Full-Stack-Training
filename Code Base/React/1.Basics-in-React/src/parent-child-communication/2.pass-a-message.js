import React,{ Component } from "react"

// Passing message from parent component to Child component
class PassTheMessage extends Component{
    constructor(props){
      super(props)
      
      this.state = {
        message: ''
      }
    }
    
    handleChange = (event) => {
      this.setState({
        message: event.target.value
      })
    }
    
    render(){
        return (
          [
                <h1>Parent Component</h1>,
                <p>Type a message to pass to the child component</p>,
              <input type='text' value={this.state.message} onChange={this.handleChange} />,
              <ChildComponent message={this.state.message} />,
          ] 
        )
    }
  }
  
class ChildComponent extends Component{
    constructor(props){
      super(props)
    }
    
    render(){
      return (
          [
            <h1>Child component</h1>,
          <p>Message : {this.props.message}</p>
          ]
      )
    }
}
  
export default PassTheMessage