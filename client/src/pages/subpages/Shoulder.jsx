import React, { useEffect, useState } from 'react'
import Exercise from '../../components/Exercise';
import { Link } from 'react-router-dom';

const Shoulder = () => {
    const [exData, setExData] = useState({});
    const selGrp = 'shoulder';
    const [selEx, setSelEx] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/exercises')
            .then(res => res.json())
            .then(data => setExData(data))
            .catch(err => console.error("Failed to load data", err));
    }, []);

    if (selEx) {
        return (
            <Exercise 
                exercise={selEx}
                onBack={() => setSelEx(null)}
            />
        );
    }

    if (!exData[selGrp]) return <div>Loading...</div>;

    return (
        <div className="chest-div">
            {exData[selGrp].map((ex, i) => (
                <Link className='chest-ex-link' key={i} onClick={() => setSelEx(ex)}>
                    <div className="chest-ex-div" key={i}>
                        <h5>{ex.type}</h5>
                        <img src={ex.img || 'https://picsum.photos/200'} alt={ex.name} width="200px" />
                        <h4>{ex.name}</h4>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default Shoulder