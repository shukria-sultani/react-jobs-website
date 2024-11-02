import { useState } from 'react'

import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import JobsPage from './Pages/JobsPage'
import {Route,
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider} from "react-router-dom"
import NotFoundPage from './Pages/NotFoundPage'

  const router  = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element ={<MainLayout />}>
       <Route index element= {<HomePage />}/>
       <Route path ="/jobs" element= {<JobsPage />}/>
       <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
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
