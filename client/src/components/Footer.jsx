import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-info">
          {/* <img src="" alt="" /> */}
          <h3>Logo</h3>
          <p>Reach your peak human potential by tracking your progress at every step you take.</p> 
        </div>
        <ul className='footer-nav-links'>
          <h5>Navigation</h5>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/split">Split</Link></li>
          <li><Link to="/streak">Streak</Link></li>
        </ul>
        <ul className="footer-socials">
          <h5>Get in Touch</h5>
          <li><Link to="https://www.instagram.com/rahul_kongara_/" target='_blank'>Instagram</Link></li>
          <li><Link to="https://in.linkedin.com/in/rahulkongara" target='_blank'>LinkedIn</Link></li>
          <li><Link to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCJDtnTpnfFQjWCgkVgPbkWfFcCCtRgLZXbjDTrLVTFlTNgXvRqdXFLhgBGjLhHpbjSFlB" target='_blank'>Mail</Link></li>
        </ul>
      </footer>
      <div className="final-footer">
        <p>&copy;2025 Logo. All rights reserved</p>
      </div>
    </> 
  )
}

export default Footer