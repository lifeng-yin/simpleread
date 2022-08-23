import React, {useContext} from 'react'
import logolarge from './logos/SIMPLEREAD_LOGO.png'
import Hamburger from "./components/navbar/Hamburger/Hamburger.js"
import CustomLink from "./components/navbar/CustomLink/CustomLink.js"
import TokenContext from "./components/signin/TokenContext/TokenContext"

const Navbar = () => {
    const {token} = useContext(TokenContext)
    
  return (
    <nav>

        <ul className="nav__logo">
          <CustomLink to = '/simpleread/'>
            <img src = {logolarge} alt = 'logo' style = {{width: '15%', minWidth: '70px', listStyleType: 'none'}}></img>
          </CustomLink>
        </ul>

        <ul className="desktop nav__links">
          
          <CustomLink to = '/simpleread/explore'>Explore</CustomLink>
          
          <p className = 'navspacer'>{' | '}</p>
          
          <CustomLink to = '/simpleread/add'>Add Review</CustomLink>
          
          <p className = 'navspacer'>{' | '}</p>
          
          <CustomLink to = '/simpleread/about'>About</CustomLink>
          
          <p className = 'navspacer'>{' | '}</p>
          
          <CustomLink to = '/simpleread/signin'><button className="sign-in__page-button" disabled={token ? true : false}>Sign in</button></CustomLink>
          
        </ul>
        
        <Hamburger />

    </nav>
  )
}


export default Navbar