import React from 'react'
import logolarge from './logos/SIMPLEREAD_LOGO.png'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>

        <ul>
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

    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }  

export default Navbar