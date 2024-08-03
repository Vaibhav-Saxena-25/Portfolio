import React from 'react'
import {useTheme} from '../../context/ThemeContext'
import './home.css'
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Resume.pdf'
import { RiMoonClearFill } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
const Home = () => {
  const[theme,setTheme]=useTheme();
  const handleTheme = () =>{
    setTheme((prevState)=>(prevState==="light"?"dark":"light"))
  }
  return (

    <>
      <div className="container-fluid home-container" id="home">
        <div className='theme-btn' onClick={handleTheme}>
          {theme === 'light' ? (<RiMoonClearFill size={30}/>):(<FiSun size={30}/>)}
        </div>
          <div className="container home-content">
            <Fade right>
            <h2>Hi 🙋‍♂️I m a</h2>
            <h1>
            <Typewriter
                options={{
                strings: ['FullStack Developer !', 'MERN stack Developer !','React Native Developer !'],
                autoStart: true,
                loop: true,
                }}
            />
            </h1>
            </Fade>
            <Fade bottom>
            <div className='home-buttons'>
            <a className = "btn btn-hire " href = "https://api.whatsapp.com/send?phone=919149284908" rel = "noreferrer" target = "_blank">whatsapp Me</a>
              <button className='btn btn-hire ml-3'>Hire Me</button>
              <a className='btn btn-cv' href={Resume} download="Vaibhav.pdf">My Resume</a>
            </div>
            </Fade>
            
          </div>
      </div> 
    </>
  )
}

export default Home
