import React from "react";
import ReactDOM from 'react-dom'
import axios from "axios";
import auth from "./auth";
import UserData from "../components/UserData";

export const signIn = async (username , password, confirmPassword, remember) => {
    let token;

    await auth().then(response => {
        token = response.data.data.token
        }) 


    const response = await axios({
        url: "https://dev-mrp.insby.tech/api/session/sign-in",
        method: 'POST',
        data: {
            login: username,
            password: password,
            confirmPassword: confirmPassword,
            rememberMe: remember,
            autoRegister: true,
            admin: false
        },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    console.log(response)

    ReactDOM.render(<UserData test={response.data.data.user}/>, document.getElementById("userInfo"))
  
}



