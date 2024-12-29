import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {toast} from "react-toastify"

function EditJobPage({updateJobSubmit}) {

    const job = useLoaderData()
     const navigate = useNavigate()

     const {id} = useParams()
      const [title, setTitle] = useState(job.title)
      const [type, setType] = useState(job.type)
      const [location, setLocation] = useState(job.location)
      const [description, setDescription] = useState(job.description)
      const [salary, setSalary] = useState(job.salary)
      const [companyName, setCompanyName] = useState(job.company.name)
      const [companyDescription, setCompanyDescription] = useState(job.company.description)
      const [contactEmail, setContactEmail] = useState(job.company.contactEmail)
      const [contactPhone, setContactPhone] = useState(job.company.contactPhone)
  
    const submitForm = async (e) => {
        e.preventDefault();
        const updatedJob = {
            id,
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone
            }
        };
    
        updateJobSubmit(updatedJob)
        toast.success("Job Updated Successfully!")
        return navigate(`/jobs/${id}`)
    };
    
    
  return (
    <div className="container-fluid d-flex gap-3 form-container pt-5 align-items-center">
    <form className="d-flex flex-column col-12  gap-2 col-lg-4 col-md-8" onSubmit={submitForm}>  
      <span className="text-center fw-bolder">Position Info</span>  
      
      <label htmlFor="positionType">Position Type: </label>
      <select id="positionType" required
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Select</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
      </select>
      
      <label htmlFor="title">Position Title: </label>
      <input type="text" id="title" placeholder="Senior React Developer" required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
      />
      
      <label htmlFor="location">Position Location:</label>
      <input type="text" id="location" placeholder="Brooklyn, NY" required
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
      /> 
      
      <label htmlFor="description">Position Description: </label> 
      <textarea id="description" placeholder="Describe the job here..." required
      
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      /> 
      
      <label htmlFor="salary">Salary per Year: </label>
      <input type="text" id="salary" placeholder="$80K - $90K" required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
      /> 
      
      <span className="text-center fw-bolder"> Company Info</span> 
      
      <label htmlFor="companyName">Company Name: </label>
      <input type="text" id="companyName" required 
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
      /> 
      
      <label htmlFor="companyDescription">Company Description:</label>
      <textarea id="companyDescription" placeholder="Describe the company here..." required 
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
      /> 
      
      <label htmlFor="email">Company Email: </label>
      <input type="email" id="email" placeholder="example@company.com" required 
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
      /> 
      
      <label htmlFor="phone">Company Phone: </label>
      <input type="tel" id="phone" placeholder="(123) 456-7890" required 
      
      value={contactPhone}
      onChange={(e) => setContactPhone(e.target.value)}
      />
      
      <button type="submit">Update Job</button>
    </form>
  </div>
  )
}

export default EditJobPage