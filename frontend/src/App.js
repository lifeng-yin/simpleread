import React from 'react'
import logolarge from './logos/SIMPLEREAD_LOGO.png'

const App = () => {
  return (
    <>
      <img className = 'center' src = {logolarge} style = {{width: '15%', marginTop: '3%'}}></img>
      <h1 className = 'title' style = {{color: '#506491', fontWeight: '900', marginTop: '-2%'}}>SimpleRead</h1>
      <h1 style = {{color: '#a48dad'}}>Book reviewing made simple</h1>
      <button className = 'center' style = {{marginTop: '3%'}}>Review A Book</button>
      <button className = 'center' style = {{marginTop: '1%'}}>Read Some Reviews</button>
    </>
  )
}

export default App