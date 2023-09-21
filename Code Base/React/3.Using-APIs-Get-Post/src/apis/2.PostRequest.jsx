import { Component } from "react";

import axios from "axios";

export default class PostRequest extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: 0
        }
    }

    // executed after the component gets rendered
    componentDidMount(){
        axios.post('https://reqres.in/api/articles', {})
            .then((response) => this.setState({id: response.data.id}))
    }

    render(){
        return(
            <div className="card text-center m-3 mt-5">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Retuned id : {this.state.id}
                </div>
            </div>
        )
    }
}