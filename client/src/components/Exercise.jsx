import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa'

const Exercise = ({ exercise, onBack }) => {
    if (!exercise) return <div><FaExclamationCircle />Exercise not found!</div>
  return (
    <>
        {onBack && <button className='ex-back-btn' onClick={onBack}>← Go to all exercises</button>}
        <div className='ex-head-div'>
            <h2 className='ex-name'>{exercise.name}</h2>
            <p>For: <span>{exercise.type}</span></p>
        </div>

        <div>
            <iframe
                width="100%"
                height="600"
                src={`https://www.youtube-nocookie.com/embed/${exercise.videoId}`}
                title={exercise.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
            <h4>Description</h4>
            <p>{exercise.description}</p>
        </div>
    </>
  )
}

export default Exercise