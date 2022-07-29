import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  let navigate = useNavigate(); 

  return (
    <>
      <div className='container'>
        <h1 style = {{color: '#fff', fontSize: '85px'}}>About Us</h1>
        
        <p style = {{color: '#000', fontSize: '30px'}}>
          we exist
        </p>

        <button className = 'center' style = {{marginTop: '2%'}} onClick = {
          () =>{ 
            navigate('/');
          }          
        }>
          {'Back To Home'}
        </button>
      </div>
    </>
  )
}

export default About