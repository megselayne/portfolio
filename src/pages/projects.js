import React from 'react'
import NavBar from './nav';

const Projects = () => {
    return(
        <div className='main'>
      <NavBar />
      <div className='project-grid'>
       <div className='project'>
        <h3>Title</h3>
        <div className='row'><a href='#'>Deployed</a> <a href='#'>Github</a></div>
       </div>
       <div className='project'>
        <h3>Title</h3>
        <div className='row'><a href='#'>Deployed</a> <a href='#'>Github</a></div>
       </div>
       <div className='project'>
        <h3>Title</h3> 
        <div className='row'><a href='#'>Deployed</a> <a href='#'>Github</a></div>
       </div>
       <div className='project'>
        <h3>Title</h3> 
        <div className='row'><a href='#'>Deployed</a> <a href='#'>Github</a></div>
       </div>
      </div>
    </div>
    )
}

export default Projects;