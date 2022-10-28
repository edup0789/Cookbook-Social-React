import React, { useState} from "react";
import SingleCar from "./SingleCar";

function Cars (){

    const [carData, setCarData] = useState([
            {
                make: "Kia",
                model: "Sorento",
                year: 2020
            },
            {
                make: "Kia",
                model: "Optima",
                year: 2019
            },
            {
                make: "Tesla",
                model: "Model 3",
                year: 2021
            },
            {
                make: "Honda",
                model: "Civic",
                year: 2019
            },
            {
                make: "Honda",
                model: "Accord",
                year: 2018
            },
            {
                make: "Volkswagen",
                model: "Jetta",
                year: 2021
            },
            {
                make: "Toyota",
                model: "Camry",
                year: 2021
            },
            {
                make: "Ford",
                model: "Mustang",
                year: 2019
            },
            {
                make: "Ford",
                model: "F-150",
                year: 2019
            },
            {
                make: "Toyota",
                model: "Camry",
                year: 2020
            },
            {
                make: "Ford",
                model: "F-150",
                year: 2021
            }
        ] )
    
        const carYear = [...new Set(carData.map((carVal) => carVal.year))]

        const filterYear = (currentYear) => {
            const newItem = carData.filter((newYearValue) =>
            {
                return newYearValue.year === currentYear
            })
            setCarData(newItem)
        }

        console.log(filterYear, carYear)

        const toggleDisplay = () => setVisibility(!visible)

        const [visible, setVisibility] = useState(false)

    return(
        <div>
           
            <div className="container ">
                <button 
                className="btn btn-warning m-2 shadow" 
                type="button" 
                onClick={toggleDisplay}>
                    {visible ? "Hide Cars" : "Show Cars"}
                </button>
                <div>
                {visible && <div className="container">
                        {carYear.map((carVal) => 
                            {
                                return (
                                    <button className="btn btn-warning text-dark shadow ms-3  w-auto"
                                    onClick={() => filterYear(carVal)}
                                    id={`show-${carVal}-cars`}
                                    key={`001${carVal}`}
                                    >{`${carVal} Cars`}</button>
                                )
                            })}
                            
                    <SingleCar carData={carData}>
                    </SingleCar>
                    
                </div>}
                </div>
            </div>
        </div>
        
    )

}

export default Cars
