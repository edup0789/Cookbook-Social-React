import React, { useState, useEffect } from "react";
import * as friendsService from "../../services/friendsService"
import toastr from "toastr";
import { useLocation, useNavigate } from "react-router-dom";
import {FaTerminal} from "react-icons/fa"

// import { Link } from "react-router-dom";


function AddFriend () {
    const goToFriends = useNavigate()
    
    const location = useLocation();
    const [addFriendFormData, setFriendFormData] = useState ({
        title: "",
        bio: "",
        summary: "",
        headline: "",
        slug: "",
        statusId: "",
        primaryImage: "",
        id: undefined
      })

      useEffect(() => { //retreiving information from the cards and displaying on form
        if (location.state) {
            console.log("location ->", location.state);
            setFriendFormData((prevState) => {
                var friendData = {...prevState} // pulls the info from addfriendformdata and assigned the values to friendData
                friendData.title = location.state.title
                friendData.bio = location.state.bio
                friendData.summary = location.state.summary
                friendData.headline = location.state.headline
                friendData.slug = location.state.slug
                friendData.primaryImage = location.state.primaryImage.imageUrl
                friendData.id = location.state.id
                friendData.statusId = location.state.statusId
                // manually assign the values of each item to the location properties from friend.jsx. assigning the values to addFriendForm.
                return friendData
            } )
        }
      }, [])


      

      const onAdd = (e) => {
        e.preventDefault();
        console.log("Add clicked")
         // assign a const to the id value we need for the if statement.
        console.log(location.state)
        if (location.state && location.state.id) //if statement for the form to either call the update function ajax call or add ajax call.
        {
            friendsService.updateById(location.state.id, addFriendFormData).then(onUpdateFriendSuccess).catch(onUpdateFriendError)
        }
        else
        {
            friendsService.addFriend(addFriendFormData).then(onAddFriendSuccess).catch(onAddFriendError)
        }
      }

      const onAddFriendSuccess = (response) => 
      {
        let cardId = response.data.item
        console.log("Friend added", cardId)
        toastr.success("Friend added successfully", response.data.item.title)
        goToFriends(`/Friends`) // on successfully adding a friend, we navigate back to the friends page and view all the friends
      }

      const onAddFriendError = (error) => 
      {
        console.log(error)
        toastr.success(error)
      }

      const onUpdateFriendSuccess = (response) => 
      {
        console.log("Friend updated successfully", response)
        toastr.info("Friend updated successfully", response)
        goToFriends(`/Friends`) // on successfully updating a friend, we navigate back to the friends page and view all the friends
      }

      const onUpdateFriendError = (error) => 
      {
        console.log(error)
        toastr.success(error)
      }
      



      const onFormFieldChange = (e) => {
        // console.log("add friend form field change", {syntheticEvent: e}) // this is used to capture the values that the user is inputting into the form. to show if the field is capturing the values of not

        const target = e.target; 
        const value = target.value;
        const addFormField = target.name; //the name attribute assigned to the form field. ensure we are updating the correct field.

        // console.log(target, addFormField)

        setFriendFormData((prevState) => { // setting the value of the current object to the values that the user inputs into the form.
            console.log("add friend updater")

            const newFriendObj = {
                ...prevState
            }

            newFriendObj[addFormField] = value;
            console.log(newFriendObj)
            return newFriendObj 
        })
      }

return (
        <React.Fragment>
            <div >
            <h1>
            {/* <span>Hello {JSON.stringify(props)}</span> */}
            <span><FaTerminal className="m-3"/>Add Friend</span>
            </h1>

            </div>
            <div className="container">
                <form className="userForm shadow">
                            <div className="row">
                            <h3>Add/Edit Friend</h3>
                </div>
                <div className="row">
                <div className="col-md-3">
                    <label htmlFor="friendID" className="form-label">ID</label>
                    <input 
                    disabled
                    type="name" 
                    className="form-control bg-tranparent border-0 shadow-sm" 
                    id="friendID"  
                    name="id"
                    value={addFriendFormData.id} 
                    onChange={onFormFieldChange}/>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <label htmlFor="InputTitle" className="form-label">Title</label>
                    <input type="name" 
                    className="form-control bg-tranparent border-0 shadow-sm" 
                    id="inputTitle" 
                    placeholder="Ex. Jane Doe" 
                    name="title"
                    value={addFriendFormData.title} 
                    onChange={onFormFieldChange}/>
                </div>
                </div>
                <div className="row">
                <div className="col">
                    <label htmlFor="InputLastName" className="form-label">Bio</label>
                    <textarea type="name" 
                    rows={3}
                    className="form-control bg-tranparent border-0 shadow-sm" 
                    id="inputBio" 
                    placeholder="Bio"
                    name="bio"
                    value={addFriendFormData.bio} 
                    onChange={onFormFieldChange}/>
                </div>
                </div>
                <div className="row">
                <div className="col">
                    <label htmlFor="InputSummary" className="form-label">Summary</label>
                    <textarea type="name" 
                    rows={1}
                    className="form-control bg-tranparent border-0 shadow-sm" 
                    id="inputSummary" 
                    placeholder="Summary"
                    name="summary"
                    value={addFriendFormData.summary} 
                    onChange={onFormFieldChange}/>
                </div>
                </div>
                
                <div className="col">
                    <label htmlFor="inputHeadline" className="form-label">Headline</label>
                    <input type="text" 
                    className="form-control bg-tranparent border-0 shadow-sm" 
                    id="inputHeadline" 
                    placeholder="Enter Headline"
                    name="headline"
                    value={addFriendFormData.headline} 
                    onChange={onFormFieldChange}/>
                </div>
                <div className="col">
                    <label htmlFor="inputSlug" className="form-label">Slug</label>
                    <input type="text"
                    className="form-control bg-tranparent border-0 shadow-sm" 
                    id="inputSlug" 
                    placeholder="Unique Slug"
                    name="slug"
                    value={addFriendFormData.slug} 
                    onChange={onFormFieldChange}/>
                </div>
                    <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="inputPrimaryImage" className="inputPrimaryImage form-label">Primary Image</label>
                        <input type="URL" 
                        className="form-control bg-tranparent border-0 shadow-sm" 
                        id="inputPrimaryImage" 
                        placeholder="Paste Image URL"
                        name="primaryImage"
                        value={addFriendFormData.primaryImage} 
                        onChange={onFormFieldChange}/>
                    </div>
                    <div>
                        <div className="col-md-4">
                            <label htmlFor="inputStatus" className="form-label">Status</label>
                                <select onChange={onFormFieldChange} id="inputStatusId" className="form-select border-0 shadow-sm" name="statusId" >
                                <option defaultValue>Choose Status ID</option>
                                <option value={"Active"}>Active</option>
                                <option value={"NotSet"}>Not Set</option>
                                <option value={"Deleted"}>Deleted</option>
                                <option value={"Flagged"}>Flagged</option>
                            </select>
                        </div>
                    </div>
                    </div>
                <div className="row">
                    <div className="col-4 submitButton">
                    <button type="submit" onClick={onAdd} className="btn btn-primary shadow border-0 m-2">Submit</button>
                    </div>
                </div>
                </form>
                </div>
                <div>
            </div>
        </React.Fragment>
        

  )     

}

export default AddFriend 