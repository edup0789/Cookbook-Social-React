import React from "react";
import { FaTerminal } from "react-icons/fa" 
// import toastr from "toastr";

function Jobs(props){

    return (
        <React.Fragment>
            <h1>
            <FaTerminal className="m-3"/>  Jobs {props.name}
            </h1>
            <hr />
        </React.Fragment>

        
    )
}


export default Jobs;