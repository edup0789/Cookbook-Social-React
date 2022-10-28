import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserFriends, FaBuilding, FaPencilRuler, FaDatabase, FaAsterisk, FaTerminal} from "react-icons/fa"




function Friends(props){

    return (
        <React.Fragment>
            <nav
        className="navbar navbar-expand-md navbar-dark bg-dark "
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <a className="navbar-brand" href="/Home">
            <img
              src="https://pw.sabio.la/images/Sabio.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Sabio"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link  to="/Home" className="nav-link px-2 link-warning link-button m-1">
                 |  Home  <FaHome className="link-light"/>
                </Link>
               </li>
                 <li className="nav-item dropdown m-1">
                  <Link className="nav-link dropdown-toggle link-warning link-button" to="/Friends" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   |  Friends <FaUserFriends className="link-light"/>
                  </Link>
                  <ul className="dropdown-menu bg-dark">
                    <li><Link className="dropdown-item link-warning" to="/Friends"> <FaTerminal className="text-white"/> View Friends</Link></li>
                    <li><Link className="dropdown-item link-warning" to="Friends/add"> <FaTerminal className="text-white"/> Add Friend</Link></li>
                  </ul>
                </li>
              <li className="nav-item">
                <Link
                  to="/Jobs"
                  className="nav-link px-2 link-warning link-button m-1"
                >
                 | Jobs <FaBuilding className="link-light"/>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/TechCompanies"
                  className="nav-link px-2 link-warning link-button m-1"
                >
                |  Tech Companies  <FaDatabase className="link-light"/>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Events"
                  className="nav-link px-2 link-warning link-button m-1"
                >
                |  Events  <FaAsterisk className="link-light"/>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/TestandAjax"
                  className="nav-link px-2 link-warning link-button m-1"
                >
                |  Test and Ajax Call  <FaPencilRuler className="link-light" />
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to="/Product"
                  className="nav-link px-2 text-white link-button"
                >
                  Products
                </Link>
              </li> */}
            </ul>
            <div className="text-end">
              <Link
                to="/"
                className="align-items-center mb-2 me-2 mb-lg-0 text-warning text-decoration-none"
               >
              <span className="m-6 text-light">  {props.currentUser.userObj.name} <div class="spinner-border text-warning spinner-border-sm " role="status"></div></span>
              </Link>
              <Link to="/Login" type="button" className="btn btn-outline-warning me-2">
                Login
              </Link>
              <Link to="/Register" type="button" className="btn btn-outline-warning">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>          
        </React.Fragment>
    )
}


export default Friends;