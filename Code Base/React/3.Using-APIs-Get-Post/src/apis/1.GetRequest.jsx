import { Component } from "react";

import axios from "axios";

class GetPersonsList extends Component{
    constructor(props){
        super(props)

        this.state = {
            persons: []
        }
    }

    // executed after the component gets rendered
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                let users = response.data;
                this.setState({persons: users})
            }) // executed after the data is fetched
            .catch() // executed when an error occurs while fetching the data
            .finally() // executed regardless whatever happens (success or error)
    }

    render(){
        return (
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center mt-3 mb-3">Fetching users list using GET Request</h3>
                <table className="text-center table table-bordered table-hovers table-hover table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persons.map((person) => (
                            <tr>
                                <td>{person.id}</td>
                                <td>{person.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GetPersonsList