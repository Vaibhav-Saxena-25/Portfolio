import React from 'react'
import './Contact.css'
import { LightSpeed } from 'react-reveal';
import Rotate from 'react-reveal/Rotate';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
//import image from '../../assets/images/contact.jpg' 
import contactImage from '../../assets/images/contact.png';

const Contact = () => {
  return (
    <>
        <div className = 'contact mr-5 ' id = 'contact'>
            <div className =  'card card0 border-0 '>
              <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                  <div className = 'card1'>
                    <div className='row border-line'>
                      <LightSpeed>
                       <img src={contactImage} alt="Contact" className='image'/>
                       </LightSpeed>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <Rotate>

                  
                  
                    
                  
                  <div className='card2 d-flex card border-0 px-4 py-5'>
                     <div className='row'>
                      <div className='row'>
                        <h6> &nbsp;&nbsp;&nbsp;Contact with  
                         <FaLinkedin color='blue' size={30} className='ms-2'/>
                          <FaGithub color='black' size={30} className='ms-2'/>
                          <FaFacebook color='blue' size={30} className='ms-2'/>
                          <FaInstagramSquare color='red' size={30} className='ms-2'/>
                          
                        </h6>

                      </div>
                        
                      
                      
{/*                   
                      <div className='row px-3 mb-4' id = "ora">
                        <div className='line'/>
                           <small className='or text-center'>OR</small>
                           
                          <div className='line'/>
                         
                      </div> */}
                       <div className='row px-3 mb-4' id='ora'>
                          <div className='line'></div>
                          <small className='or text-center'>OR</small>
                          <div className='line'></div>
                        </div>
                      <div className = "nextLine">
                      <div className='row px-3'>
                        <input type = 'text' name = "name" placeholder='Enter your name' className='mb-3'/>
                      </div>
                      <div className='row px-3'>
                        <input type = 'email' name = "email" placeholder='Enter your email' className='mb-3'/>
                      </div>
                      <div className='row px-3' >
                        <textarea type = 'text' name = "msg" placeholder='write your message' className='mb-3'/>
                      </div>
                      <div className='row px-3'>
                        <button className ='button' type='submit'>SEND MSG</button>
                      </div>
                      </div>
                  </div>
                </div>
                </Rotate>
                </div>
              </div>
            </div>
        </div>



      
    </>
  )
}

export default Contact
