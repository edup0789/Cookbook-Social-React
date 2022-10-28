import React from "react";
import { FaTerminal } from "react-icons/fa"
// import CurrentUser from "../CurrentUser/currentUser";

function Home(props){

    return (
        <React.Fragment>
            <div className="bg-transparent  border-0 m-2">
                    <h1>
                    {/* <span>Hello {JSON.stringify(props)}</span> */}
                    <span><FaTerminal className="m-3"/>  Welcome Home {props.currentUser.userObj.name}</span>
                        </h1>
                </div>

                <div id="carouselExampleDark" class="carousel carousel-white slide w-50 center-carousel" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner food-carousel">
                        <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://i.pinimg.com/originals/fa/4a/99/fa4a997054a3a1981bb86724412c16dc.gif" class="d-block w-75 h-100 center shadow" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://media2.giphy.com/media/RltQlCSRa2UMg/giphy.gif" class="d-block w-75 h-100 center" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://i.pinimg.com/originals/ee/ac/14/eeac14de5c06993495660d2852d0841e.gif" class="d-block w-75 h-100 center" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>


                <div className="container-food bg-transparent border-0 row card-container w-100 row-col-sm-3 row-col-md-6">
                <div class="card m-2 border-0 shadow-sm" aria-hidden="true">
                    <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                            </p>
                            <button href="/" tabindex="-1" class="btn btn-primary disabled placeholder col-6">Go to Page</button>
                        </div>
                    </div>
                    <div class="card m-2 border-0 shadow-sm" aria-hidden="true">
                    <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                            </p>
                            <button href="/" tabindex="-1" class="btn btn-primary disabled placeholder col-6">Go to Page</button>
                        </div>
                    </div>
                    <div class="card m-2 border-0 shadow-sm" aria-hidden="true">
                    <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                            </p>
                            <button href="/" tabindex="-1" class="btn btn-primary disabled placeholder col-6">Go to Page</button>
                        </div>
                    </div>
                    <div class="card m-2 border-0 shadow-sm" aria-hidden="true">
                    <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                            </p>
                            <button href="/" tabindex="-1" class="btn btn-primary disabled placeholder col-6">Go to Page</button>
                        </div>
                    </div>
            </div>
           
        </React.Fragment>
    )
}


export default Home;