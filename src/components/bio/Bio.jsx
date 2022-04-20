import React from 'react'
import './bio.css'

const Bio = () => {
  return (
    <div>
      <h1 className='section-header'>Biography</h1>
      <div className='section-info'>
        <div className="name">Full name</div>
        <div className="email">Email</div>
        <div className="phone-number">Phone Number</div>
      </div>
    </div>
  )
}

export default Bio