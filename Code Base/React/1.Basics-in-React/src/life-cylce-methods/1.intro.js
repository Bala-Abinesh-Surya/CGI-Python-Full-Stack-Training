import { Component } from "react";

export default class LifeCycleMethodsIntro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: 0
        }
    }

    componentWillMount(){
        console.log('Component will MOUNT')
    }
    
    // executed after the render method
    componentDidMount(){
        console.log('Component did MOUNT')
    }

    componentWillUpdate(){
        console.log('Component will UPDATE')
    }
    
    // executed after the render method
    componentDidUpdate(){
        console.log('component did UPDATE')
    }

    increment = () => {
        this.setState({data: this.state.data + 1})
    }

    render() {
        return (
            <>
                <button onClick={this.increment}>INCREMENT</button>
                <Content count={this.state.data} />
                {console.log('component rendered')}
            </>
        )
    }
}

class Content extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
            <p>Count : {this.props.count}</p>
            </>
        )
    }
}