import React from 'react'
import logolarge from '../logos/SIMPLEREAD_LOGO.png'

import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate(); 

  return (
    <>
        <img alt = 'logo' className = 'center' src = {logolarge} style = {{width: '15%'}}></img>
        <h1 className = 'title' style = {{color: '#506491', fontWeight: '900', marginTop: '-2%'}}>SimpleRead</h1>
        <h1 style = {{color: '#a48dad'}}>Book reviewing made simple</h1>
        
        <button className = 'center' style = {{marginTop: '2%'}}>
          {'Review A Book '}
          <i class="bi bi-book"></i>
        </button>
        
        <button className = 'center' style = {{marginTop: '20px'}} onClick = {
        () =>{ 
          navigate('/simpleread/explore');
        }}>
          {'Read Some Reviews '}
          <i class="bi bi-list-stars"></i>
        </button>
    </>
  )
}

export default Home