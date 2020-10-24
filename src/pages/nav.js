import React from 'react'
import {Link} from 'gatsby';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () =>{

    return(
        <>
        <Navbar className='nav-container' expand="lg">
            <Navbar.Brand>
                <h3><Link className='home' to='/'>ML</Link></h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='nav'>
                <ul className='navlinks'>
                    <li><Link to='/' activeClassName='active'>Home</Link></li>
                    <li><Link to='/#stack-section' activeClassName='active'>Stacks</Link></li>
                    <li><Link to='/#project-section' activeClassName='active'>Projects</Link></li>
                </ul>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )

}

export default Navigation;