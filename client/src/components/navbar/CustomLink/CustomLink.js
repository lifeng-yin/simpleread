import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <ul className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </ul>
    )
}  
export default CustomLink;
