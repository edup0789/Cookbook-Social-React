import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaUndoAlt } from "react-icons/fa"


function Friend(props){
  

    // console.log("friend", props.friend)
    const aFriend = props.friend;
    const friendNav = useNavigate() //used to navigate to a separate page. assigning a variable to the useNaveigate function


    const onLocalDeleteClicked = (e) => {
        e.preventDefault();
        props.onPersonClicked(props.friend, e)
        console.log(props.friend.title, e)
    }

    const onLocalEditClicked = (e) => {
        e.preventDefault();
        const state = {type: "EDIT_FRIEND", payload: aFriend}
        console.log("Edit Friend", state)
        // console.log(aFriend.id)
        // navToFriend(aFriend)
        friendNav(`/Friends/edit-${aFriend.slug}-${aFriend.id}`, {state: aFriend}) //when the edit button is clicked, we navigate back to the form to update... we are passing the payload/userdata to the location we are navigating to
    }


    return (

        <div  className="card-friends col-md-6 col-lg-3">
        <div>
          <div className="card bg-light shadow h-500 bg-secondary border-0">
            <img
              id="friend-image"
              src={aFriend.primaryImage.imageUrl}
              className="friends-image image-fluid"
              alt="Placeholder"/>
              <div id="friend" className=".friend-card">
              <strong><h3 className="friend-name mb-0">{aFriend.title}</h3></strong> 
              <span id="friend-bio" className="template-summary text-black"><p>{aFriend.bio}</p></span>
              <span id="friend-headline" className="template-headline text-black"><p>{aFriend.summary}</p></span>
              <span id="friend-headline" className="template-headline text-black"><p>{aFriend.headline}</p></span>
              <span id="friend-slug" className="template-slug text-black d-none"><p>{aFriend.slug}</p></span>
              <span id="friend-slug" className="template-slug text-black d-none"><p>{aFriend.id}</p></span>
              </div>
              <div className="row">
                  <div className="col">
                  <button onClick={onLocalDeleteClicked} className=" row-col btn btn-primary deleteButton w-25 btn-warning border-0 shadow" >Delete <FaTimes/></button>
                  <button onClick={onLocalEditClicked} className=" row-col btn btn-primary editButton w-25 btn-info border-0 shadow" >Edit <FaUndoAlt/></button>
                  </div>
              </div>
              </div>
            </div>
        </div>

    )
}

export default React.memo (Friend);

