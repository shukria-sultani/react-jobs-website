import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

function JobPage() {
    const id = useParams();
    const job = useLoaderData();
  return (
    <div>{job.title}</div>
  )
}

const jobLoader = async ({params}) =>{
     const res = await fetch(`/api/jobs/${params.id}`)
     const data = res.json();
     return data;
}

export {JobPage as default, jobLoader}