import React from 'react'
import Card from './Card'
import {FaMapMarker} from "react-icons/fa"
export default function HomeCards() {
  const style1 = {
     backgroundColor : "#e5eaf5",
 
  }
  const style2 = {
    backgroundColor : "#c3e3f3 "
 }
  return (
    <div className='container' >
          <div className='d-lg-flex flex-row flex-wrap pt-5 gap-5 justify-content-center'>
               <Card style={style1}>
               <h4 className='fw-bold'>For Devlopers</h4> 
                 <p className='lead'>Browse our React jobs and start your career today</p>
                 <button className="bg-dark home-card-button text-light p-2 rounded-3"><a href="#"  className='text-light text-decoration-none'>Browse Jobs</a> </button>
                 </Card>

                 <Card style={style2}>    
               <h4 className='fw-bold ' >For Employers</h4> 
                 <p className='lead'>List your job to find the prefect devloper for the role.</p>
                 <button className="bg-dark home-card-button text-light p-2 rounded-3 "><a href="#" className='text-light text-decoration-none'> Add job</a></button>
                 </Card> 

                
          </div>
    </div>
  )
}
