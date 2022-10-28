import React, { useState } from "react";
import * as userService from "../../services/usersService"
import toastr from "toastr";
import { useNavigate } from "react-router-dom";
import { FaTerminal } from "react-icons/fa";
// import UserRegister from "./Register"
// import Home from "../Home/Home"
// import { Alert } from 'react-alert'
// import toastr from "toastr";

import "./formStyle.css"
import "toastr/build/toastr.min.css";
// import { Link } from "react-router-dom";

function UserLogin (){

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    tenantId: "U0404SW8W6Q"
  })

  const navToHome = useNavigate()
  console.log(loginFormData)

  const onLogin = (event) =>{
    event.preventDefault();
    console.warn("Login clicked")
    userService.UserLogin(loginFormData).then(onLoginSuccess).catch(onLoginError);
    navToHome(`/Home`)
  }
  

  const onLoginSuccess = (response) =>{
    console.log("User successfully logged in", response)
    toastr.success("Login Success", response.data.item)
    return response

  }
  const onLoginError = (error) =>{
    console.log("Unsuccessful login", error)
    toastr.error("Login Error", error)
  }

  const onFormFieldChange = (event) => {
    console.log("on change", {syntehticEvent: event})
    const target = event.target;

    const value = target.value;

    const loginFormField = target.name;

    setLoginFormData((prevState) =>{
      console.log("Login updater onChange")

      const newLoginObj = {
        ...prevState
      }

      newLoginObj[loginFormField] = value;

      return newLoginObj
    })
  }


    return (
      <React.Fragment>
          <h1>
            {/* <span>Hello {JSON.stringify(props)}</span> */}
            <span><FaTerminal className="m-3"/>User Login</span>
            </h1>
<div>
            <form className="formLogin shadow userForm">
            <div className="row">
            <h3>User Login</h3>
            </div>
      <div className="row">
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10 ">
          <input type="email" 
          className="form-control shadow-sm bg-transparent border-0" 
          id="inputEmail3" 
          name="email"
          placeholder="example@email.com"
          value={loginFormData.email}  // this is the "state.name" resutling from the onFormChange
          onChange={onFormFieldChange}/>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" 
          className="form-control shadow-sm bg-transparent border-0" 
          id="inputPassword3" 
          placeholder="Enter Password"
          name="password"
          value={loginFormData.password} 
          onChange={onFormFieldChange}/>
        </div>
      </div>
      <div className="row mb-3 d-none">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">U0404SW8W6Q</label>
        <div className="col-sm-10">
          <input 
          type="TenantId" 
          className="form-control shadow-sm bg-secondary border-0" 
          id="inputTenantId" 
          placeholder="tenantId"
          name="TenantId"
          value={loginFormData.tenantId} 
          onChange={onFormFieldChange}/>
        </div>
      </div>
      <div className="row">
      <div className="col-3">
      <button type="button" className="btn btn-warning text-black shadow border-0 button" onClick={onLogin}>Sign in</button>
      </div>
      </div>
      </div>
    </form>
        </div>
      </React.Fragment>
        
        
    )
}

export default UserLogin 
