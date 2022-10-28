import React, {useEffect, useState} from "react";
import "./App.css";
// import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import Product  from "./components/codeChallenge/Product";
import Events from "./components/events/Events";
import Friends from "./components/friends/Friends";
import Jobs from "./components/jobs/Jobs";
import TechCompanies from "./components/techCos/TechCompanies";
import Home from "./components/home/Home";
import TestandAjax from "./components/testandAjax/TestAndAjax";
import UserLogin from "./components/user/Login";
import UserRegister from "./components/user/Register";
import Footer from "./components/footer/Footer";
import * as usersService from "./services/usersService"
import SiteNav from "./components/siteNav/SiteNav"
import AddFriend from "./components/friends/AddFriend";
import Cars from "./components/codeChallenge/Cars"


function App () { 

  
  const [currentUserData, setCurrentUserData] = useState({name: "Guest", userObj:[], userComponents:[]});

  false && console.log(currentUserData)

  useEffect(() => {
    console.log("useEffect is firing from App")
    usersService.GetCurrentUser(currentUserData.name).then(onGetCurrentSuccess).catch(onGetCurrentError) }, []);
    console.log(currentUserData)

  const onGetCurrentSuccess = (response) => {
    // console.log("Current user", response)
    let myUser = response.data.item
    console.log("Current user", myUser)
    setCurrentUserData((prevState) =>
    {
      const userData = {...prevState}
      userData.userObj = myUser;    
      userData.userComponents = Object.values(myUser)
      console.log(myUser)
      console.log(userData)
      return userData // this function, we are updating the currentUser information with our ajax call and returning that value as useData. 
    })
    
  }

  const onGetCurrentError = (error) => {
    console.log("Get currrent error", error)
  }


    return (
      <React.Fragment>
        <SiteNav currentUser={currentUserData}></SiteNav>
        <div>
          <Routes>
            <Route path="/Home" element={<Home currentUser={currentUserData}></Home>}></Route>
            <Route path="/Friends" element={<Friends/>}></Route>
            <Route path="Friends/add" element={<AddFriend/>}></Route>
            <Route path="Friends/edit:friendId" element={<AddFriend/>}></Route>
            <Route path="/Jobs" element={<Jobs/>}></Route>
            <Route path="/TechCompanies" element={<TechCompanies/>}></Route>
            <Route path="/Events" element={<Events/>}></Route>
            <Route path="/TestandAjax" element={<TestandAjax/>}></Route>
            <Route path="/Login" element={<UserLogin/>}></Route>
            <Route path="/Register" element={<UserRegister/>}></Route>
            <Route path="/Cars" element={<Cars/>}></Route>
          </Routes>
        </div> 
      
      
      <Footer></Footer>
      </React.Fragment>
    );

}


export default App;
