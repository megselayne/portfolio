import React from 'react'
import {Link} from 'gatsby';
const NavBar = () =>{

    return(
        <>
        <nav>
        <ul className='navlinks'>
            <li><Link to='/' activeClassName='active'>Home</Link></li>
            <li><Link to='/about' activeClassName='active'>About</Link></li>
            <li><Link to='/projects' activeClassName='active'>Projects</Link></li>
        </ul>
        </nav>
        </>
    )


}

export default NavBar;