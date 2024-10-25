import React from 'react'

export default function HomeCards() {
  return (
    <div className='container' >
          <div className='d-lg-flex flex-dir-col pt-5 gap-5 justify-content-center'>
            <div className='bg-primary p-3 m-sm-4'>
               <h4 className='fw-bold'>For Devlopers</h4> 
                 <p className='lead'>Browse our React jobs and start your career today</p>
                 <button className="bg-dark text-light p-2 rounded-2">Browse Jobs</button>
                 </div>

                 <div className='bg-primary p-3 m-sm-4'>
               <h4 className='fw-bold ' >For Devlopers</h4> 
                 <p className='lead'>Browse our React jobs and start your career today</p>
                 <button className="bg-dark text-light p-2 rounded-2 ">Browse Jobs</button>
                 </div>
          </div>
    </div>
  )
}
