import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HomeCards from "./Components/HomeCards"
import JobsListing from './Components/JobsListing'
function App() {
    
        
  return (
    <>
       <Navbar></Navbar>
       <Hero></Hero>
       <HomeCards></HomeCards>
       <JobsListing></JobsListing>
    </>
  )
}


export default App
