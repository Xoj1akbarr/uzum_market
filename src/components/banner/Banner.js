import React from 'react'
import './Banner.css'
import bannerPhoto from '../../assets/photo_2024-05-03_17-20-15.jpg'


function Banner() {
  return (
    <div className='banner container'>
      <img src={bannerPhoto} alt="" />
    </div>
  )
}

export default Banner