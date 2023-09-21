import axios from "axios";
import { Component } from "react";

export default class PostRequestErrorHandling extends Component{
    constructor(props){
        super(props)

        this.state = {
            errorMessage: ''
        }
    }

    // executed after the component gets rendered
    componentDidMount(){
        axios.post('https://reqres.in/invalid-url', 0)
            .then(console.log('succesful'))
            .catch((error) => this.setState({errorMessage: error.message}))
    }

    render(){
        return(
            <div className="card text-center m-3 mt-5">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Error Message : {this.state.errorMessage}
                </div>
            </div>
        )
    }
}