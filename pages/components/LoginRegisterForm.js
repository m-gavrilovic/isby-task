import React from "react"
import {signIn}  from "../api/signin"
import ReactDOM from "react-dom"
import MainContent from "./mainContent"
import reactDom from "react-dom"

class LoginRegisterForm extends React.Component {   
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        remember: false
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleRemember = event => {
        this.setState({ [event.target.name]: true})
    }

    handleSubmit = event => {
        const {username, password, confirmPassword, remember} = this.state
        

        event.preventDefault();
        signIn(username , password, confirmPassword, remember).then(()=> {
            reactDom.render(<MainContent />,document.getElementById("wrap"))
        }).catch(err => {
            err : ReactDOM.render(<p>Wrong credentials</p>, document.getElementById("errorInfo"))
        })

    }
    
    render(){
        return(
            <div id="wrap">
            <form onSubmit={this.handleSubmit} className="loginFormStyle">
                <div className="formRow">
                    <input type='text' 
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                        />
                </div>
                <div className="formRow">
                    <input type='password'
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="formRow">
                    <input type='password'
                        name="confirmPassword"
                        placeholder="Confirm password"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="formRow">
                    <input type="checkbox"
                        name="remember"
                        onChange={this.handleRemember}
                    /> Remember me  
                </div>

                <div className="formRow">
                    <button type="submit" className="loginBtn">Sign-up/Login</button>
                </div>
                <div className="formRow">
                    <div id="errorInfo">
                </div>
                </div>
            </form>
            </div>
        )
    }
}

export default LoginRegisterForm