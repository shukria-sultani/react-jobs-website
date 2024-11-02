import React from 'react'
import {FaExclamationTriangle} from "react-icons/fa"
import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return (
     <div className="container d-flex align-items-center justify-content-center flex-column mt-5">
        <FaExclamationTriangle className="text-warning" style={{ fontSize: '48px' }} />
          <h1 className='mt-3 fw-bolder'>404 Not Found</h1>
          <p>The page does not exist</p>
          <Link to="/" className='go-back p-2 text-decoration-none'>Go Back</Link>
     </div>
  )
}
