import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HomeCards from "./Components/HomeCards"
import JobsListing from './Components/JobsListing'
import ViewAllJobs from './Components/ViewAllJobs'
import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import {Route,
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider} from "react-router-dom"


      
  const router  = createBrowserRouter(
    createRoutesFromElements(
    <Route path='' element ={<MainLayout />}>
    <Route index element= {<HomePage />}/>
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
