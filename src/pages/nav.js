import React from 'react'
import {Link} from 'gatsby';
const NavBar = () =>{

    return(
        <>
        <div className='nav-container'>
            <nav>
            <h3><Link className='home' to='/'>ML</Link></h3>
            <ul className='navlinks'>
                <li><Link to='/' activeClassName='active'>Home</Link></li>
                <li><Link to='/#stack-section' activeClassName='active'>Stacks</Link></li>
                <li><Link to='/#project-section' activeClassName='active'>Projects</Link></li>
            </ul>
            </nav>
        </div>
        </>
    )


}

export default NavBar;