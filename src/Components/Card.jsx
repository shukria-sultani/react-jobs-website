import React from 'react'

export default function Card({children, style ={backgroundColor: "#fff"}}) {
  return (
    <div className={`card p-4 m-sm-4 `} style={style}>
          {children} 
    </div>
  )
}
