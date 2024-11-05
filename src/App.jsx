import { useState } from 'react'

import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import JobsPage from './Pages/JobsPage'
import JobPage, {jobLoader} from './Pages/JobPage'
import NotFoundPage from './Pages/NotFoundPage'


import {Route,
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider} from "react-router-dom"

  const router  = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element ={<MainLayout />}>
       <Route index element= {<HomePage />}/>
       <Route path ="/jobs" element= {<JobsPage />}/>
       <Route path="/jobs/:id" element= {<JobPage />}  loader={jobLoader}></Route>
       <Route path="*" element={<NotFoundPage />}></Route>
     
    </Route>
  )
  )
function App() {   
  return (
    <>
        <RouterProvider router = {router}/>
    </>
  )
}


export default App
