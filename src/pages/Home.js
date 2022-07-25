import React from 'react'
import logolarge from '../logos/SIMPLEREAD_LOGO.png'

const Home = () => {
  return (
    <>
        <img alt = 'logo' className = 'center' src = {logolarge} style = {{width: '15%'}}></img>
        <h1 className = 'title' style = {{color: '#506491', fontWeight: '900', marginTop: '-2%'}}>SimpleRead</h1>
        <h1 style = {{color: '#a48dad'}}>Book reviewing made simple</h1>
        
        <button className = 'center' style = {{marginTop: '3%'}}>
        {'Review A Book '}
        <i class="bi bi-book"></i>
        </button>
        
        <button className = 'center' style = {{marginTop: '1%'}}>
        {'Read Some Reviews '}
        <i class="bi bi-list-stars"></i>
        </button>
    </>
  )
}

export default Home