import React, {Component} from 'react'
import NavBar from './nav';
import Footer from './footer';
import upreadsImg from '../assets/upreads.png'
import covidTrackerImg from '../assets/covidTracker.png'
import betaBouldersImg from '../assets/betaBoulders.png'
import pokeBattleImg from '../assets/pokeBattle.png'

class Projects extends Component{
    constructor(props){
        super(props);

        this.state={ isOpen: false};
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
    return(
    <div className='main'>
      <NavBar />
      <div className='container'>
      <div className='project-grid'>
       <div className='project'>
        <h3>UpReads</h3>
        <a className='project-link' href='https://upreads.herokuapp.com' rel="noopener noreferrer" target='_blank'><img className='project-img' src={upreadsImg} alt='UpReads'/></a> 
        <div className='row'>
            <a className='project-link' href='https://upreads.herokuapp.com' rel="noopener noreferrer" target='_blank'>Deployed</a> 
            <a className='project-link' href='https://github.com/megselayne/UpReads' rel="noopener noreferrer" target='_blank'>Github</a>
        </div>
       </div>
       <div className='project'>
        <h3>Covid Tracker</h3>
        <a className='project-link' href='https://uscovidtracker.herokuapp.com' rel="noopener noreferrer" target='_blank'><img className='project-img' src={covidTrackerImg} alt='UpReads'/></a> 
        <div className='row'>
            <a className='project-link' href='https://uscovidtracker.herokuapp.com' rel="noopener noreferrer" target='_blank'>Deployed</a> 
            <a className='project-link' href='https://github.com/kimmyparkw/covidtracker' rel="noopener noreferrer" target='_blank'>Github</a>
        </div>
       </div>
       <div className='project'>
        <h3>Beta Boulders</h3>
        <a className='project-link' href='https://quiet-taiga-45663.herokuapp.com' rel="noopener noreferrer" target='_blank'><img className='project-img' src={betaBouldersImg} alt='UpReads'/></a> 
        <div className='row'>
            <a className='project-link' href='https://quiet-taiga-45663.herokuapp.com' rel="noopener noreferrer" target='_blank'>Deployed</a> 
            <a className='project-link' href='https://github.com/megselayne/betaBoulders' rel="noopener noreferrer" target='_blank'>Github</a>
        </div>
       </div>
       <div className='project'>
        <h3>pokeBattle</h3> 
        <a className='project-link' href='https://megselayne.github.io/pokeBattle' rel="noopener noreferrer" target='_blank'><img className='project-img' src={pokeBattleImg} alt='UpReads'/></a> 
        <div className='row'>
            <a className='project-link' href='https://megselayne.github.io/pokeBattle' rel="noopener noreferrer" target='_blank'>Deployed</a> 
            <a className='project-link' href='https://github.com/megselayne/pokeBattle' rel="noopener noreferrer" target='_blank'>Github</a>
        </div>
       </div>
      </div>
      <Footer />
      </div>
    </div>
    )
    }
}

export default Projects;