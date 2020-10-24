import React from "react"
import NavBar from './nav';
import Footer from './footer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import upreadsImg from '../assets/upreads.png'
import covidTrackerImg from '../assets/covidTracker.png'
import betaBouldersImg from '../assets/betaBoulders.png'
import pokeBattleImg from '../assets/pokeBattle.png'
import Resume from '../assets/megan_lee_resume.pdf'


export default function Index() {
  return(
    <div className='main'>
        <NavBar />
        <div className='splash'>
          <h1>Developed by Lee</h1>
          <h3>Fullstack Software Engineer</h3>
          <p className='about'>
            I'm Megan Lee, a former product analyst turned software engineer seeking to build a more equitable world through code.
          </p>
          <div className='row'>
            <a className='soc-icon' href='https://github.com/megselayne' target='_blank'>
              <GitHubIcon style={{fontSize: 50}}>
            </GitHubIcon>
            </a>
            <a className='soc-icon' href='https://www.linkedin.com/in/megselee/' target='_blank'>
            <LinkedInIcon style={{fontSize: 50}}>
            </LinkedInIcon>
            </a>
            <a className='soc-icon' href={Resume}target='_blank'>
            <DescriptionIcon style={{fontSize: 50}}>
            </DescriptionIcon>
            </a>
          </div>
        </div>
        <div className='container'>
        {/* Tech Stacks */}
        <div className='stack-section' id='stack-section'>
            <h2>STACKS</h2>
            <div className='stack-row'>
              <i className="devicon-html5-plain-wordmark stack-icon"></i>
              <i className="devicon-css3-plain-wordmark stack-icon"></i>
              <i className="devicon-javascript-plain stack-icon"></i>
              <i className="devicon-react-original-wordmark stack-icon"></i>
              <i className="devicon-nodejs-plain-wordmark stack-icon"></i>
              <i className="devicon-express-original-wordmark stack-icon"></i>
              <i className="devicon-postgresql-plain-wordmark stack-icon"></i>
              <i className="devicon-ruby-plain-wordmark stack-icon"></i>
              <i className="devicon-rails-plain-wordmark stack-icon"></i>
              <i className="devicon-npm-original-wordmark stack-icon"></i>
              <i className="devicon-yarn-plain-wordmark stack-icon"></i>
            </div>
        </div>
        {/* Projects */}
        <div className='col' id='project-section'>

          <h2>PROJECTS</h2>
          <div className='proj-wrapper'>
            
            <div className='project'>
              <h2>UpReads</h2>
                <a className='project-link' href='https://upreads.herokuapp.com' rel="noopener noreferrer" target='_blank'><img className='project-img' src={upreadsImg} alt='UpReads'/></a> 
                <ul className='proj-desc'>
                  <li className='proj-bullet'>Full stack book discovery app with a social justice tilt.</li>
                  <li className='proj-bullet'>Created with React, Express, PSQL, Google Books API. </li>
                </ul>

                <div className='row'>
                    <a className='project-link' href='https://upreads.herokuapp.com' rel="noopener noreferrer" target='_blank'>Deployed</a> 
                    <a className='project-link' href='https://github.com/megselayne/UpReads' rel="noopener noreferrer" target='_blank'>Github</a>
                </div>
            </div>

          <div className='project'>
            <h2>Covid Tracker</h2>
              <a className='project-link' href='https://uscovidtracker.herokuapp.com' rel="noopener noreferrer" target='_blank'><img className='project-img' src={covidTrackerImg} alt='UpReads'/></a> 
              <ul className='proj-desc'>
                    <li className='proj-bullet'>Provide users frictionless access to Covid information for US states of interest.</li>
                    <li className='proj-bullet'>Created with React, Express, PSQL, Chart JS. </li>
              </ul>
            <div className='row'>
                <a className='project-link' href='https://uscovidtracker.herokuapp.com' rel="noopener noreferrer" target='_blank'>Deployed</a> 
                <a className='project-link' href='https://github.com/kimmyparkw/covidtracker' rel="noopener noreferrer" target='_blank'>Github</a>
            </div>
          </div>

          <div className='project'>
            <h2>Beta Boulders</h2>
            <a className='project-link' href='https://quiet-taiga-45663.herokuapp.com' rel="noopener noreferrer" target='_blank'><img className='project-img' src={betaBouldersImg} alt='UpReads'/></a> 
            <ul className='proj-desc'>
                  <li className='proj-bullet'>Rock climbing API and CRUD app: climbing search engine and personal tracker.</li>
                  <li className='proj-bullet'>Created with HTML5, CSS3, JavaScrip, Express, PSQL.</li>
            </ul>
            <div className='row'>
                <a className='project-link' href='https://quiet-taiga-45663.herokuapp.com' rel="noopener noreferrer" target='_blank'>Deployed</a> 
                <a className='project-link' href='https://github.com/megselayne/betaBoulders' rel="noopener noreferrer" target='_blank'>Github</a>
            </div>
          </div>

          <div className='project'>
            <h2>pokeBattle</h2> 
            <a className='project-link' href='https://megselayne.github.io/pokeBattle' rel="noopener noreferrer" target='_blank'><img className='project-img' src={pokeBattleImg} alt='UpReads'/></a> 
            <ul className='proj-desc'>
                  <li className='proj-bullet'>Single-player Pokemon battle game.</li>
                  <li className='proj-bullet'>Created with HTML5, CSS3, JavaScript.</li>
            </ul>
            <div className='row'>
                <a className='project-link' href='https://megselayne.github.io/pokeBattle' rel="noopener noreferrer" target='_blank'>Deployed</a> 
                <a className='project-link' href='https://github.com/megselayne/pokeBattle' rel="noopener noreferrer" target='_blank'>Github</a>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  ) 
}
