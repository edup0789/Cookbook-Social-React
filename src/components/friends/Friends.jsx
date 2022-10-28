import React from "react";
import FriendsAll from "./FriendsAll";
import { useNavigate } from "react-router-dom";
// import { FaUserNinja  } from "react-icons/ai"
import { FaTerminal, FaUserNinja } from "react-icons/fa"

// import * as friendsService from "../../services/friendsService"
// import AddFriend from "./AddFriend";

function Friends(props){
 


    const goToAddFriend = useNavigate()

    const onClickAdd = () => {
        goToAddFriend(`/Friends/add`)
    }




    return (
        <React.Fragment>
        <div>
           <div className="row">
            <h1 className="col" >
            <FaTerminal className="m-3"/>  Friends {props.name} <button className="btn btn-warning border-0 shadow m-2 col-" onClick={onClickAdd}>AddFriend <FaUserNinja/> </button>
            
            </h1>
            <div className="container">
                <div className="row"> <FriendsAll ></FriendsAll> </div>
                {
                    <div className="container row"></div>
                }
            </div>
            </div>
        
            <hr />
            
        </div>
            
        </React.Fragment>
    )
}


export default Friends;