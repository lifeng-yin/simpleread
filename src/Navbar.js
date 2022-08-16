import React from 'react'
import logolarge from './logos/SIMPLEREAD_LOGO.png'
import Hamburger from "./components/navbar/Hamburger/Hamburger.js"
import CustomLink from "./components/navbar/CustomLink/CustomLink.js"

const Navbar = () => {
  return (
    <nav>

        <ul className="nav__logo">
          <li>
            <CustomLink to = '/simpleread/'>
              <img src = {logolarge} alt = 'logo' style = {{width: '15%', minWidth: '70px', listStyleType: 'none'}}></img>
            </CustomLink>
          </li>
        </ul>

        <ul className="desktop nav__links">
          <li>
              <CustomLink to = '/simpleread/explore'>Explore</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = '/simpleread/add'>Add Review</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = '/simpleread/about'>About</CustomLink>
          </li>
        </ul>
        
        <Hamburger />

    </nav>
  )
}


export default Navbar