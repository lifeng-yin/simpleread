import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./About.scss"

const About = () => {
  let navigate = useNavigate(); 

  return (
    <>
      <div className='container' style = {{width: 'max(60%, 400px)'}}>
        <h1 style = {{color: '#fff', fontSize: 'max(50px, 8vw)'}}>About Us</h1>
        
        <p style = {{color: '#000', fontSize: 'max(20px, 2vw)'}}>
          we exist
        </p>

        <button className = 'center' style = {{marginTop: '2%'}} onClick = {
          () =>{ 
            navigate('/simpleread/');
          }          
        }>
          {'Back To Home'}
        </button>
      </div>
    </>
  )
}

export default About