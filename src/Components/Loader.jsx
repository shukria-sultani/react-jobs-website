import React from 'react'
 import FadeLoader from "react-spinners/FadeLoader"
const override = {
     display: 'block',
     margin: '100px auto'
}

export default function Loader({loading}) {
  return (
      <FadeLoader  
      color ='#8458B3'
       loading ={loading}
       cssOverride={override}
       size ={150}
      
      />
  )
}
