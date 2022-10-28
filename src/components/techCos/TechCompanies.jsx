import React from "react";
import {FaTerminal} from "react-icons/fa"

function TechComapnies(props){
    return (
        <React.Fragment>
            <h1>
            <FaTerminal className="m-3"/>  Tech Companies {props.name}
            </h1>
            <hr />
        </React.Fragment>
    )
}


export default TechComapnies;