import React from 'react'
import MuscleGroup from '../components/MuscleGroup'
import { useNavigate, Link } from 'react-router-dom'
import cardio from '../assets/cardio.jpg'
import { CardioImgContainer } from '../components/StyledComponents'




const Exercises = () => {

  return (
    <>
      <div className='ex-div'>
        <Link to='/workouts/chest' className='ex-links'><MuscleGroup name="chest" /></Link>
        <Link to='/workouts/back' className='ex-links'><MuscleGroup name="back" /></Link>
        <Link to='/workouts/shoulder' className='ex-links'><MuscleGroup name="shoulder" /></Link>
        <Link to='/workouts/legs' className='ex-links'><MuscleGroup name="legs" /></Link>
        <Link to='/workouts/arms' className='ex-links'><MuscleGroup name="arms" /></Link>
        <Link to='/workouts/abs' className='ex-links'><MuscleGroup name="abs" /></Link>  
      </div>
      <div className="ex-cardio-div">
        <Link to='/workouts/cardio' className='ex-links'>
          <CardioImgContainer src={cardio} />
          <h3 className='ex-cardio-txt'>Cardio</h3>
        </Link>
      </div>
    </>
  )
}

export default Exercises