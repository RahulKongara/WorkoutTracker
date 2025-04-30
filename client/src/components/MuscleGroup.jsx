import React from 'react'
import { ImgContainer } from './StyledComponents'
import { images } from '../assets/ImageExporter';

const MuscleGroup = ({name}) => {
    const imgName = name;
  return (
    <div className='mG-div'>
        <ImgContainer src={images[imgName]} alt={`${imgName} image`} />
        <div className="mG-text">
          <h3>{imgName}</h3>
        </div>
    </div>
  )
}

export default MuscleGroup