import React from 'react'
import Hero from '../Components/Hero'
import HomeCards from '../Components/HomeCards'
import JobsListing from '../Components/JobsListing'
import ViewAllJobs from '../Components/ViewAllJobs'
export default function HomePage() {
  return (
    <>
     <Hero />
     <HomeCards/>
     <JobsListing />
     <ViewAllJobs />
    </>
  )
}
