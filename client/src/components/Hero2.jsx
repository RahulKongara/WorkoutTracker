import React from 'react'
import { Link } from 'react-router-dom'
import vid from '../assets/hero2.mp4'
// import { FaArrowRight } from 'react-icons/fa'
import { IoMdArrowDropright } from "react-icons/io";

const Hero2 = () => {
  return (
    <div className="hero2-section">
      <div className="video-div">
        <video autoPlay loop muted id='bg-video'>
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="hero2-text">
        <h3>Learn new exercises.</h3>
        <Link to="/workouts" className='exercise-btn'>Workouts <IoMdArrowDropright /></Link>
      </div>
    </div>
  )
}

export default Hero2