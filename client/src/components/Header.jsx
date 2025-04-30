import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  return (
    <>
        <header className="header">
            <div className="header-img">
                {/* <img src="" alt="Logo" /> */}
                <h3>Logo</h3>
            </div>
            <nav className="navbar">
                <ul className='nav-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/workouts">Workouts</Link></li>
                    <li><Link to="/split">Split</Link></li>
                    <li><Link to="/streak">Streak</Link></li> 
                    {/* icon */}
                    <li>
                        <div className="profile">
                            <Link to="/profile"><FaUser /></Link>
                        </div>
                    </li>
                </ul>
            </nav>
            {/* <div className="profile">
                <FaUser />
            </div> */}
        </header>
    </>
  )
}

export default Header