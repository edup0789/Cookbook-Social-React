import React from "react";
import { FaTerminal } from "react-icons/fa"
// import CurrentUser from "../CurrentUser/currentUser";

function Home(props){

    return (
        <React.Fragment>

            <div className="bg-transparent shadow-sm border-0">
            <h1>
            {/* <span>Hello {JSON.stringify(props)}</span> */}
            <span><FaTerminal className="m-3"/>  Hello {props.currentUser.userObj.name} ...</span>
            </h1>
            <hr />
            </div>
        </React.Fragment>
    )
}


export default Home;