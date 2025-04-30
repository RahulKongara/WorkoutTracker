import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'

const Split = () => {
  const {id} = useParams();
  const split = useLoaderData();
  const navigate = useNavigate();

  

  return (
    <>
        <div>Hello</div>
    </>
  )
}

export default Split