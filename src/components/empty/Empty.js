import React from 'react'
import './Empty.css'
import { Link } from 'react-router-dom'


function Empty({ img, title, description, link }) {
  return (
    <div className='empty'>
      <div className="container">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <Link  className='empty-link' href="">Akkountga kirish</Link>
      </div>
    </div>
  )
}

export default Empty