import { Component } from "react";
import { Link } from "react-router-dom";

class LoginPage extends Component{
    render(){
        return (
            <div className="col-md-6 offset-md-3 mt-5">
                <p>Login form</p>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Show Password</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div class="text-center">
                    <p>Not a member? <Link to='/register'>Register</Link></p>
                </div>
            </div>
        )
    }
}

export default LoginPage