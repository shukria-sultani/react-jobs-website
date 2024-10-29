import React from 'react'
import { useState } from 'react'
import {FaMapMarker} from "react-icons/fa"
export default function ListJob({job}) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    let description = job.description;
    if(!showFullDescription){
        description = description.substring(0, 90) +'...';
    }

  return (
    <div className="card col-lg-3 mt-5 p-4">
            <div>
              <small className='fs-5'>{job.type}</small>
              <h5 className='pt-3 fw-bolder'>{job.title}</h5>
            </div>
            <div>
              <p>{description}</p>
               <button className='bg-transparent fw-bolder text-dark border-0 ' onClick={()=> setShowFullDescription((preState) => !preState)}>{ showFullDescription ? "Less" : "More"}</button> <br /> <br />
              <span className='salary'>{job.salary}/ Year</span>
              <hr />
            </div>
            <div className='d-flex flex-lg-row'>
                <FaMapMarker className='d-inline me-2 text-danger'></FaMapMarker>
              <span style={{color:'#63beeb', fontWeight: '900'}}>{job.location}</span>
              <a href="#" className='bg-dark p-2 text-light text-center rounded-2 text-decoration-none ms-auto'>Read More</a>
            </div>
          </div>
  )
}
