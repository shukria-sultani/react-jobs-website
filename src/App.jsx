import { useState } from 'react'

import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import JobsPage from './Pages/JobsPage'
import JobPage, {jobLoader} from './Pages/JobPage'
import AddJobPage from './Pages/AddJobPage'
import NotFoundPage from './Pages/NotFoundPage'


import {Route,
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider,
    } from "react-router-dom"


function App() { 
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
    });

    if (!res.ok) {
        throw new Error('Failed to add job');
    }

    const data = await res.json(); 
    return data; 
};
// delete job
 const deleteJob = async (id) =>{
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
   
});
return
   
 }
  const router  = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element ={<MainLayout />}>
       <Route index element= {<HomePage />}/>
       <Route path ="/jobs" element= {<JobsPage />}/>
       <Route path="/jobs/:id" element= {<JobPage  deleteJob = {deleteJob}/>}  loader={jobLoader} ></Route>
       <Route path="/addjob" element= {<AddJobPage addJobSubmit={addJob}/>}></Route>
       <Route path="*" element={<NotFoundPage />}></Route>
     
    </Route>
 
  )
  )
  return (
    <>
        <RouterProvider router = {router}/>
    </>
  )
}


export default App
