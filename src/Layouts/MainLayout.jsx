import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function MainLayout() {
  return (
  <>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <ToastContainer />
  </>
  )
}
