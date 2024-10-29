import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HomeCards from "./Components/HomeCards"
import JobsListing from './Components/JobsListing'
import ViewAllJobs from './Components/ViewAllJobs'
function App() {
    
        
  return (
    <>
       <Navbar></Navbar>
       <Hero></Hero>
       <HomeCards></HomeCards>
       <JobsListing></JobsListing>
       <ViewAllJobs></ViewAllJobs>
    </>
  )
}


export default App
