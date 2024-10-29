import React from 'react'

export default function ListJob({job}) {
  return (
    <div className="card col-lg-3 mt-5 p-4">
            <div>
              <small className='fs-5'>{job.type}</small>
              <h5 className='pt-3 fw-bolder'>{job.title}</h5>
            </div>
            <div>
              <p>{job.description}</p>
              <small>More</small> <br />
              <span className='salary'>{job.salary}/ Year</span>
              <hr />
            </div>
            <div className='d-flex flex-lg-row'>
              <span style={{color:'#63beeb', fontWeight: '900'}}>{job.location}</span>
              <a href="#" className='bg-dark p-2 text-light text-center rounded-2 text-decoration-none ms-auto'>Read More</a>
            </div>
          </div>
  )
}
