import React from 'react';
import jobs from "../jobs.json";
import ListJob from './ListJob';
export default function JobsListing() {
  
  const recentJobs = jobs.slice(0, 3)
  return (
    <div className="container-fluid p-3 w-100 mt-5" style={{ backgroundColor: "#e5f6ff" }}>
      <h2 className='text-center pt-5' style={{color: "#8458B3", fontWeight: "900"}}>Browse Jobs</h2>
      <div className="d-lg-flex flex-lg-row align-items-center justify-content-center gap-5 flex-wrap mt-4">
        {recentJobs.map((job) => (
             <ListJob job={job} key={job.id}></ListJob>
        ))}
      </div>
    </div>
  );
}
