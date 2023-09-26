import { Link } from "react-router-dom"

export default function RegisterPage(){
    return (
        <div className="col-md-6 offset-md-3 mt-5">
            <p>Register form</p>
            <form>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="tex" class="form-control" id="floatingFirstName" placeholder="First Name" required/>
                    <label for="floatingFirstName">First Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingLastName" placeholder="Last Name" required/>
                    <label for="floatingLastName">Last Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingLastName" placeholder="Address" required/>
                    <label for="floatingLastName">Address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingLastName" placeholder="Password" required/>
                    <label for="floatingLastName">Password</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingLastName" placeholder="Confirm Password" required/>
                    <label for="floatingLastName">Confirm Password</label>
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