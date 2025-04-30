import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Exercise from '../../components/Exercise';

const Chest = () => {
  const [exerciseData, setExerciseData] = useState({});
  const [selectedGrp, setSelectedGrp] = useState('chest');
  const [selEx, setSelEx] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/exercises')
      .then(response => response.json())
      .then(data => setExerciseData(data))
      .catch(error => console.error("Failed to load data", error));
  }, []);

  if (selEx) {
    return (
      <Exercise 
        exercise={selEx}
        onBack={() => setSelEx(null)}
      />
    )
  }

  if (!exerciseData[selectedGrp]) return <div>Loading...</div>;

  return (
    <div className='chest-div'>
      {exerciseData[selectedGrp].map((ex, i) => (
        <Link className='chest-ex-link' key={i} onClick={() => setSelEx(ex)}>
          <div className='chest-ex-div' key={i} >
            <h5>{ex.type}</h5>
            <img src={ex.img || 'https://picsum.photos/200'} alt={ex.name} width="200px"/>
            <h4>{ex.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Chest