import React from 'react'
import './TechStack.css'
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
import {TechstackList} from '../../utils/TechstackList';
const TechStack = () => {
  return (
    <>
      <div className='container techstack' id='techstack'>
        <RubberBand>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technologies Stack</h2>
        <hr/>
        <p className='pb-3 text-center'>👉 Inlcuding Programming Language Front-end Developer Backend-Developer MERN stack Developer Back end tools and APIs</p>
        </RubberBand>
        <div className='row'>
        {TechstackList.map((tech) => (
    <Fade key={tech._id} left>
        <div className='col-md-3'>
            <div className='card m-2'>
                <div className='card-content'>
                    <div className='card-body'>
                        <div className='media d-flex justify-content-center'>
                            <div className='align-self-center'>
                                {React.cloneElement(tech.icon, { className: 'tech-icon' })}
                            </div>
                            <div className='media-body'>
                                <h5>{tech.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fade>
))}
      </div>
      </div> 
           
    </>
  )
}

export default TechStack
