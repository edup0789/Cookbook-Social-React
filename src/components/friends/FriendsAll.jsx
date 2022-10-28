import React, { useState, useEffect, useCallback } from "react";
import "./friends.css"
import * as friendsService from "../../services/friendsService"
import Friend from "./Friend";
import toastr from "toastr";
import "rc-pagination/assets/index.css";
// import {FcSearch} from "react-icons/fc"
import {BiSearchAlt} from "react-icons/bi"
import {FaRegEye} from "react-icons/fa"
// import locale from "rc-pagination/lib/locale/en_US";



function FriendsAll(){

    const [ pageData, setPageData ] = useState({friendsArray:[], friendComponents:[]}); // friendsArray is located inside of pageData rather than in a separate function... friendsArray is nested inside of pageData
    // const [friendsArray, setFriendsArray] =useState([]);
    const [ count, setCount ] = useState(0)
    // const [ page] = useState()
    const [ search, setSearchData ] = useState({
      searchInput: "",
  })

  false && console.log(search)

  const onFormFieldChange = (e) => {
      // console.log("search field change", {syntehticEvent: e}) // this is used to capture the values that the user is inputting into the form. to show if the field is capturing the values of not

      const target = e.target; 
      const value = target.value;
      const searchFormField = target.name; //the name attribute assigned to the form field. ensure we are updating the correct field.

      // console.log(target, addFormField)

      setSearchData((prevState) => { // setting the value of the current object to the values that the user inputs into the form.
          // console.log("add friend updater")

          const newSearchObj = {
              ...prevState
          }

          newSearchObj[searchFormField] = value;
          // console.log(newSearchObj)
          return newSearchObj 
      })
    }
    
      false && console.log(pageData.friendsArray)

    useEffect (() => {
      console.log("Firing useEffect getFriendsPaginated")
      friendsService.getAllPaginated().then(onGetPaginatedFriendSuccess).catch(onGetPaginatedFriendError)
    }, [])

    const onGetPaginatedFriendSuccess = (response) => {
      // console.log("Get all paginated success", response.data.item.pagedItems)
      let myFriends = response.data.item.pagedItems
      // console.log(myFriends) 

      setPageData((prevState) => { // this is an update function... always use prevState...
        const allPageDate = {...prevState}
        allPageDate.friendsArray = myFriends;
        allPageDate.friendComponents = myFriends.map(mapFriend); // as soon we know our array, we want to map it once. 
        return allPageDate;
    })
  }

    const onGetPaginatedFriendError = (error) => {
      console.error("Get all error", error)
    }


    const onHeaderClicked = () => {
      setCount((prevState) => {
        return prevState + 1;
      })
    }




    const onClickSearch = () => {
      friendsService.getBySearch(0, 10, search.searchInput).then(onSearchSuccess).catch(onSearchError)
  
  }

  const onSearchSuccess = (response) =>
  {
      let friendSearch = response.data.item.pagedItems
      console.info(friendSearch)
      // return friendSearch
      
      setPageData((prevState) => {
        const searchPageData = {...prevState}
        searchPageData.friendsArray = friendSearch;
        searchPageData.friendComponents = friendSearch.map(mapFriend);
          return searchPageData
      })

  }


  const onSearchError = (error) =>
  {
      console.info(error)
  }

    const onDeleteClicked = useCallback((myFriend, e) => {
      console.log(myFriend.id, myFriend, e) // data coming in... we are doing something with this data.. this example we are deleting

      friendsService.deleteFriend(myFriend.id).then(onDeleteSuccess).catch(onDeleteError)
    }, [])

    const onDeleteSuccess =(idToBoDeleted) => {
      setPageData(prevState => {

    toastr.success("onDeleteSuccess", idToBoDeleted)


    const pageData = {...prevState}; // copy over a copy of the previous state. copied the entire object using the spread operator  
    pageData.friendsArray = [...pageData.friendsArray]; //spreading the friend array as well. Pointer pointing at new array
 
    const fndIdx = pageData.friendsArray.findIndex(friend => { // using indexOf function we are finding the index of the thing in the array... that thing being the id
      let result = false 

      if (friend.id === idToBoDeleted){
        result = true
        }

          return result
        })

        if (fndIdx >= 0) // if it works, then we will get back a 0 or greater than 0. 
        {
          pageData.friendsArray.splice(fndIdx,1) // if index if greater than 0 than we will remove(splice). 
          pageData.friendComponents = pageData.friendsArray.map(mapFriend) //generating a new array of componenents with the remaining items
        }
        return pageData
      })
    }

    const onDeleteError = (error) =>
    {
      console.log(error)
      toastr.error(error)
    }

    const mapFriend = (aFriend) => {
      // console.log("mapping", aFriend)
        return (

          <Friend 
          friend={aFriend} 
          key={"Friend ID " + aFriend.id} 
          onPersonClicked={onDeleteClicked}>  
          </Friend>
      
        )
    }

  const toggleVisibility = () => setVisibility(!visible)

  const [visible, setVisibility] = useState(true);

    return (
        <React.Fragment>
          <form className="row-col-6 input-group">
                <div className="col-2" >
                    <label htmlFor="friendSearch" className="visually-hidden">"Search</label>
                    <input 
                    type="search" 
                    className="friendSearch form-control shadow border-0 m-2" 
                    onChange={onFormFieldChange} 
                    id="friendSearch" 
                    placeholder="Search..." 
                    value={search.searchInput} 
                    name="searchInput" ></input> 
                </div>
                <div>
                    <button type="button" className="btn btn-warning shadow border-0 m-2" onClick={onClickSearch}>Search <BiSearchAlt /></button>
                </div>
            </form>

          

          
          <div className="row m-5">
            <div className="col-md-4">
            <h3 onClick={onHeaderClicked}>Friends: {count}</h3>
            <button className="btn btn-white shadow" onClick={toggleVisibility}>{visible ? 'Hide' : 'Show'} <FaRegEye/> </button>
            </div>
          </div>
          {visible && <div onPersonClicked={onDeleteClicked} className="container row"> 
            {pageData.friendsArray.map(mapFriend)}
          </div>}
          {/* {visible && <div onEditClicked={onEditClicked} className="container row"> 
          </div>} */}


          
        </React.Fragment>
    )
}


export default FriendsAll;