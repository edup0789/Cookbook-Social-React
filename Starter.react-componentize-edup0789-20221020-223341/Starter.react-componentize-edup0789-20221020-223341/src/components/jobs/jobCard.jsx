import React from "react";

function JobCard ({jobData}){
    
    return (
        <div className="container m-3">
            <div className="row justify-content-center"> 
                {jobData.map((Value) => {
                    return (
                        <div key={Value.id ++} className="col-lg-3 col-md-5 col-sm-10">
                        <div className=" card my-3 py-3 border-0 shadow">
                        <img src="https://www.cgsusa.org/wp-content/uploads/cropped-placeholder.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Title: {Value.title}</h5>
                        <p className="card-text">Department: {Value.department}
                        </p>
                        <p className="card-text">
                            Number of Employees: {Value.numberOfEmployees}
                        </p>
                        </div>
                    </div>
                        </div>     
                    
                    )
                })}
            </div>
        </div>
       

    )
}

export default JobCard