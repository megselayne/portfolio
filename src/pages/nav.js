import React from 'react'
import {Link} from 'gatsby';

const NavBar = () =>{

    return(
        <nav>
        <ul className='navlinks'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
        </ul>
        </nav>
    )


}

export default NavBar;