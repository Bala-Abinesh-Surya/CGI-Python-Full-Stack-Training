import React, { Component } from "react";

// user account component
import UserAccount from "./User-Account";

class FetchUsers extends Component{
  constructor(props){
    super(props)

    this.state = {
      users: [],
      loaded: false,
    }
  }

  // gets executed after the component gets rendered
  // fetch has two then blocks - remember
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => (response.json()))
      .then((data) => this.setState({users: data, loaded: true}))
  }

  render(){
    const {users, loaded} = this.state
    return ( 
      <div className="col-md-6 offset-md-3">
        <h3 className="text-center mt-5 mb-4">List of users</h3>
          {
            loaded ? (
              <ul>
                {
                  // executed only if the loaded is true
                  users.map((user) => (
                    <li className="list-unstyled">
                      <UserAccount user={user} />
                    </li>
                  ))
                }
              </ul>
            ) : <p className="text-center">Fetching users....</p>
          }
      </div>
    );
  }
}

export default FetchUsers;

