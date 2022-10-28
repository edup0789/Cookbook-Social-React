import React from "react";
import { useState } from "react";
import JobCard from "./jobCard";
import JobData from "./JobData"
import Buttons from "./Buttons"
import { FaTerminal } from "react-icons/fa" 
// import toastr from "toastr";

function Jobs(props){

    const [jobData, setJobData] = useState(JobData)


    const jobCategory = [...new Set(JobData.map((Value) => Value.department))] //mapping through my jobs data... assigning the value of Value to the value of departments to be used later


    const filterName = (currentDepartment) => { 
        const newItem = jobData.filter((newValue) => { //filtering through jobdata... then assigning the value of 
            return newValue.department === currentDepartment;
        })
        setJobData(newItem)
    }

    false && console.log(filterName)

    return (
        <React.Fragment>
            <h1>
            <FaTerminal className="m-3"/>  Jobs {props.name}
            </h1>
            <div>
                <Buttons 
                filterName={filterName}
                setJobData={setJobData}
                jobCategory={jobCategory}
                ></Buttons>
            </div>
               <div className="row">
                <JobCard jobData={jobData}></JobCard>
                </div>
            <hr />
        </React.Fragment>

        
    )
}


export default Jobs;