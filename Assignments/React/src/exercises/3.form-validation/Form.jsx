import { Component } from "react";

const style = {
    'color' : 'red'
}

export default class FormComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            success: false,
            helpText: null
        }
    }

    formOnChangeHandler = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.value})

        this.formValidityChecker()
    }

    formValidityChecker = () => {
        let {username, email, password, confirmPassword} = this.state
        this.setState({success: false})

        // username
        if(username.length < 6){
            this.setState({helpText: 'Username must be atleast 6 characters long'})
            return
        }

        // email
        if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            this.setState({helpText: 'Enter a valid email address'})
            return
        }

        // password
        if(password.length < 6){
            this.setState({helpText: 'Password must be atleast 6 characters long'})
            return
        }

        if(password.length > 20){
            this.setState({helpText: 'Password must not exceed 20 characters'})
            return
        }

        // confirm password
        if(confirmPassword.length < 6){
            this.setState({helpText: 'Password must be atleast 6 characters long'})
            return
        }

        if(confirmPassword.length > 20){
            this.setState({helpText: 'Password must not exceed 20 characters'})
            return
        }
        
        // checking if the two password are equal
        if(! password.valueOf() === confirmPassword.valueOf()){
            this.setState({helpText: 'Passwords do not match'})
            return
        }

        this.setState({success: true})
    }

    render(){
        const {username, email, password, confirmPassword, success, helpText} = this.state
        return (
            <div className="col-md-6 offset-md-3">
                <h2 className="text-center m-3">Form validation</h2>
                {helpText && <span className="help-text" style={style}>{helpText}</span>}

                <form onChange={this.formOnChangeHandler}>
                    <label>Username</label>
                    <input type='text' name="username" minLength='6' maxLength='10' required/> <br/>
                    <label>Email</label>
                    <input type='email' name="email" maxLength='30' required/> <br/>                    
                    <label>Password</label>
                    <input type='password' name="password" minLength='6' maxLength='20' required/> <br/>
                    <label>Confirm password</label>
                    <input type='password' name="confirmPassword" minLength='6' maxLength='20' required/> <br/>
                    {this.state.success && <button>Submit</button>}
                    {!this.state.success && <button disabled>Submit</button>}
                </form>
            </div>
        )
    }
}