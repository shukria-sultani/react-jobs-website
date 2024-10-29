import { useState } from 'react'

import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import JobsPage from './Pages/JobsPage'
import {Route,
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider} from "react-router-dom"

  const router  = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element ={<MainLayout />}>
       <Route index element= {<HomePage />}/>
       <Route path ="/jobs" element= {<JobsPage />}/>

    </Route>
  )
  )

function App() {

        
  return (
    <>
       {/* <Navbar></Navbar>
       <Hero></Hero>
       <HomeCards></HomeCards>
       <JobsListing></JobsListing>
       <ViewAllJobs></ViewAllJobs> */}

        <RouterProvider router = {router}/>
    </>
  )
}


export default App
