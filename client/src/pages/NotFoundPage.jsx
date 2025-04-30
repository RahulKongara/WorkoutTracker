import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
        <FaExclamationTriangle className='notFound-icon' />
        <h1>404</h1>
        <p>This page does not exist</p>
        <p>Go back to <Link to="/">Home</Link></p>
    </div>
  )
}

export default NotFoundPage