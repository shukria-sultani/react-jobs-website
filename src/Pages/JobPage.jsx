import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
function JobPage({deleteJob}) {
    const id = useParams();
    const navigate = useNavigate()
    const job = useLoaderData();
    const onDeleteClick = (jobId)=>{
 
       const confirm = window.confirm("Are you sure you want to delete this job?")
        
       if(!confirm) return

       deleteJob(jobId)
       toast.success("Job Deleted Successfully!")
       navigate("/jobs")

    }
  return (
    <>
    <div className="container  main-container p-3">
               <FaArrowLeft className='me-2 ' /> <Link to="/jobs"  className='text-decoration-none fw-bolder' style={{color: "#8458B3"}}>Go Back to Job Listing</Link>
            </div>

            <div className="container-fluid d-flex  flex-lg-row flex-column p-5 m-0 w-100 full-height" style={{ backgroundColor: '#dff1fa' }}>
                <div className="container col-lg-6 d-flex gap-4 flex-column p-4">
                    <div className="container bg-light p-4">
                        <small style={{color:"#8458B3", fontWeight: "900"}}>{job.type}</small>
                        <h4 className='fw-bolder'>{job.title}</h4>
                      <FaMapMarker className='text-danger' />  <span style={{color:'#63beeb', fontWeight: '900'}}>{job.location}</span>
                    </div>

                    <div className="container d-flex flex-column col-12 bg-light p-4">
                        <span style={{color:"#8458B3", fontWeight: "900"}}>Job Description</span>
                        <p className='p-3'>{job.description}</p>
                        <small style={{color:"#8458B3", fontWeight: "900"}}>{job.salary}/Year</small>
                    </div>
                </div>

                <div className="container  col-lg-4 d-flex flex-column gap-4">
                    <div className="container d-flex flex-column bg-light p-4">
                        <span className='fw-bolder'>Company Info</span>
                        <h6 className='pt-3 fw-bolder'>{job.company.name}</h6>
                        <p>{job.company.description}</p>
                        <span  className='fw-bolder'>Email:</span>
                        <span className= "p-2" style={{backgroundColor: "#cde6f3"}}>{job.company.contactEmail}</span>
                        <span className='fw-bolder'>Phone:</span>
                        <span className= "p-2" style={{backgroundColor: "#cde6f3"}}>{job.company.contactPhone}</span>
                    </div>

                    <div className="container d-flex flex-column bg-light p-4">
                        <h6 className='fw-bolder'>Manage Jobs</h6>
                        <Link className= "edit p-2 rounded-5 text-light" to={`/edit-job/${job.id}`} >Edit Job</Link>
                        <button className='p-2 rounded-5 mt-2 text-light border-0 bg-danger' onClick={()=> onDeleteClick(job.id)}>Delete Job</button>
                    </div>
                </div>

            </div>
    
    </>
  )
}


const jobLoader = async ({params}) =>{
     const res = await fetch(`/api/jobs/${params.id}`)
     const data = res.json();
     return data;
}

export {JobPage as default, jobLoader}