import React from 'react'
import { Link } from 'react-router-dom'
export default function ViewAllJobs() {
  return (
     <div className="container d-flex align-items-center justify-content-center p-3 w-100 mt-5" >
          <Link to="/jobs" className='bg-dark text-decoration-none text-light rounded-3 text-center ps-5 pe-5 pt-3 view-jobs pb-3'> View All Jobs</Link>
     </div>
  )
}
