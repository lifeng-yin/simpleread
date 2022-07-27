import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className='container'>
        <h1 style = {{color: '#fff', fontSize: '85px'}}>About Us</h1>
        
        <p style = {{color: '#000', fontSize: '30px'}}>
          we exist
        </p>

        <Link to='/' className = 'navlink' style = {{ marginTop: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          Back To Home
        </Link>
      </div>
    </>
  )
}

export default About