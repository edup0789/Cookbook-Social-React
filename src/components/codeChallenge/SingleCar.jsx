import React from "react";
// import { Card } from "react-bootstrap";

function SingleCar({carData}) {

    console.log(carData)
    return (
        <div>
            <div className="card-div row">
                {carData.map((carData) =>
                {
                    return (
                        <div key={`001${carData.year}-${carData.model}`} className="card row-col-6 m-2 shadow border-0">
                            <div className="card-body">
                                    <h5 className="card-title">Make: {carData.make}</h5>
                                    <h5 className="card-text">Model: {carData.model}</h5>
                                    <h5 className="card-text">Year: {carData.year}</h5>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default SingleCar