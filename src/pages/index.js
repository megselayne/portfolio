import React from "react"
import NavBar from './nav';
import { Route, Redirect } from 'react-router-dom';
export default function Index() {
  return(
    <div className='main'>
      <NavBar />
      <div className='splash'>
        Home Test
      </div>
    </div>
  ) 
}
