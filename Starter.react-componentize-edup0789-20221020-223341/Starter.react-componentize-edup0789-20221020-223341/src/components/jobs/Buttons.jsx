import React from "react";
import JobData from "./JobData"
// import Jobs from "./Jobs";

function Buttons ({filterName, setJobData, jobCategory}) {

    return (
        <div>   
            {jobCategory.map((Value, id) => {
                return (
                    <button className="btn btn-light text-dark shadow m-1 w-auto"
                    onClick={() => filterName(Value)}
                    key={id}
                    >
                        {Value}
                    </button>
                )
            })}
            <button className="btn btn-warning text-dark shadow"
            onClick={() => setJobData(JobData)}
            >
                Show All
            </button>

        </div>
    )
}

export default Buttons