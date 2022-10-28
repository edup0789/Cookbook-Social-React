import React, { useState } from "react";
import * as userService from "../../services/usersService";
import toastr from "toastr";
import "./formStyle.css"
import "toastr/build/toastr.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaTerminal } from "react-icons/fa";

// import { Routes, Route } from "react-router-dom"
// import UserLogin from "./Login";
// import "./index.css";
// import "./services/serviceHelper";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap";




function UserRegister (){

  const navToLogin = useNavigate()
  
    const [regstrationFormData, setRegFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U0404SW8W6Q",
      isLoggedIn: false,
    })

    console.log(regstrationFormData)

    const onRegister = (e) =>{
      e.preventDefault();
      console.warn("Registration Clicked")
      userService.UserRegister(regstrationFormData).then(onRegisterSuccess).catch(onRegisterError); // taking the data from the form and submitting it to the API site. 
    }

    const onRegisterSuccess = (response) =>{
      console.log("User successfully registered", response)
      toastr.success("Register Success", response.data.item.firstName)
      navToLogin(`/Login`)
    }

    const onRegisterError = (error) => {
      console.log("Unsuccessful registration", error)
      toastr.error("Register Error")
    }


    const onFormFieldChange = (event) => {
      // console.log("Change", {syntehticEvent: event})

      const target = event.target;

      const value = target.value;

      const regFormField = target.name

      console.log(target, regFormField)
      setRegFormData ((prevState) =>{ // this is my updater function... it is creating another object of the state... not changing it. 
        console.log("updater onChange")

        const newUserObj = { //passing the data of preState to a newObj
          ...prevState
        }

        newUserObj[regFormField] = value; // replacing the data in the newObj with the data from the form 

        console.log(newUserObj)
        return newUserObj // returning the newObj with the data from the form.
      })
      
    }
    //add link to registration page to redirect to login... vice versa for login
    //on successfull login/reg nav to homepage or login
    // display user info on screen on homepage after successfull login 

return (
  <React.Fragment>
    <h1>
            {/* <span>Hello {JSON.stringify(props)}</span> */}
            <span><FaTerminal className="m-3"/>New User</span>
            </h1>
<div>
  <form className="formRegister shadow userForm">
              <div className="row">
              <h3>Registration</h3>
              </div>
      <div className="row">
      <div className="col-md-6">
      <label htmlFor="InputFirstName" className="form-label">FirstName</label>
      <input type="name" 
      className="form-control bg-tranparent border-0 shadow-sm" 
      id="inputFirstName" 
      placeholder="John" 
      name="firstName"
      value={regstrationFormData.firstName} 
      onChange={onFormFieldChange}/>
    </div>
    <div className="col-md-6">
      <label htmlFor="InputLastName" className="form-label">LastName</label>
      <input type="name" 
      className="form-control bg-tranparent border-0 shadow-sm" 
      id="inputLastName" 
      placeholder="Doe"
      name="lastName"
      value={regstrationFormData.lastName} 
      onChange={onFormFieldChange}/>
    </div>
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="form-label">Email</label>
      <input type="email" 
      className="form-control bg-tranparent border-0 shadow-sm" 
      id="inputEmail4" 
      placeholder="example@email.com"
      name="email"
      value={regstrationFormData.email} 
      onChange={onFormFieldChange}/>
    </div>
      </div>
   <div className="row">
    <div className="col">
      <label htmlFor="inputPassword4" className="form-label">Password</label>
      <input type="password" 
      className="form-control bg-tranparent border-0 shadow-sm" 
      id="inputPassword4" 
      placeholder="Enter Password"
      name="password"
      value={regstrationFormData.password} 
      onChange={onFormFieldChange}/>
    </div>
    <div className="col">
    <label htmlFor="inputPassword4" className="form-label">Re-Password</label>
      <input type="password"
      className="form-control bg-tranparent border-0 shadow-sm" 
      id="inputPassword4" 
      placeholder="Confirm Password"
      name="passwordConfirm"
      value={regstrationFormData.passwordConfirm} 
      onChange={onFormFieldChange}/>
    </div>
  </div>
  
    <div className="row">
    <div className="col-md-6">
      <label htmlFor="inputAvatarUrl" className="inputAvatarUrl form-label">Profile URL</label>
      <input type="URL" 
      className="form-control bg-tranparent border-0 shadow-sm" 
      id="inputCity" 
      placeholder="Paste Image URL"
      name="avatarUrl"
      value={regstrationFormData.avatarUrl} 
      onChange={onFormFieldChange}/>
    </div>
    <div className="col-md-2 d-none">
      <label htmlFor="inputTenantID" className="inputTenantID form-label ">Tenant ID</label>
      <input type="text" 
      className="form-control bg-tranparent border-0 shadow-sm" 
      id="staticTentantId" 
      disabled
      name="tenantId"
      value="U0404SW8W6Q" 
      onChange={onFormFieldChange}/>
    </div>
    </div>
   <div className="row">
    <div className="col-3 submitButton">
      <Link to="/userLogin" type="submit" onClick={onRegister} className="btn btn-warning text-black shadow border-0">Register</Link>
    </div>
   </div>
  </form>
  </div>
  <div>
      </div>
  </React.Fragment>
  )     

}

export default UserRegister 