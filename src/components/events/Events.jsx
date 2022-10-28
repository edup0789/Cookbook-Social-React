import React from "react";
import {FaTerminal} from "react-icons/fa"

function Events(props){
    return (
        <React.Fragment>
            <h1>
            <FaTerminal className="m-3"/>  Events {props.name}
            </h1>
            <hr />
        </React.Fragment>
    )
}

export default Events;