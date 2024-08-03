import React from 'react'
import './Projects.css'
import Spin from 'react-reveal/Spin'
import detectImage from '../../assets/images/detect.png';
import detects from '../../assets/images/chat.png';
import air from '../../assets/images/airbnb.png';

const Projects = () => {
  return (
    <>
      <div className = 'container project' id='projects'>
      
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top Recent Projects</h2>
        <hr/>
        
         
        Recently I have made a clone of AirBnB,MERN chat app,and Detection App:
        Certainly! Here are brief descriptions of my Projects:
        <dl>
          <dt>1. Airbnb Clone</dt>
          <dd>Developed a comprehensive clone of Airbnb, a leading online marketplace for lodging reservations. This project involved creating a robust platform that allows users to browse through various accommodations worldwide, filter results based on preferences, read detailed property descriptions, view high-quality images, and book stays directly through the site. The backend was designed to handle complex queries efficiently, ensuring a smooth user experience. Key features include user authentication, dynamic search algorithms, secure payment integration, and a sophisticated messaging system for communication between hosts and guests.<br />
          <i>Technologies Used➡️</i> React for the frontend UI, Node.js and Express for the backend, MongoDB for database management, and Socket.IO for real-time communication.</dd>
          <dt>2. MERN Chat Application</dt>
          <dd>Built a real-time chat application using the MERN stack (MongoDB, Express, React, and Node.js). This project emphasizes my proficiency in developing interactive, data-driven applications. Users can register, log in, and engage in live conversations within groups or privately. The application leverages WebSockets for real-time data exchange, ensuring minimal latency in message delivery. Additionally, it incorporates features like user status indicators, read receipts, and the ability to send media files, enhancing the overall communication experience.<br/>
            <i>Technologies Used➡️</i> MongoDB for storing user data and messages, Express and Node.js for handling server-side logic, React for building the user interface, and Socket.IO for managing WebSocket connections.
          </dd>
          <dt>3. Detection App</dt>
          <dd>Created a detection application focused on identifying specific objects or patterns within images or video streams. This project highlights my skills in computer vision and machine learning. Users can upload images or videos, and the application processes them using advanced algorithms to detect predefined targets. The backend is built with Node.js and Express, serving as the bridge between the frontend interface and the machine learning model hosted on a cloud service. The application provides real-time feedback on detections, making it suitable for various applications ranging from security surveillance to environmental monitoring.<br/>
           <i>Technologies Used➡️</i> Node.js and Express for server-side operations, React for the user interface, TensorFlow.js or another ML library for implementing the detection model, and cloud storage solutions for hosting the model.
           </dd>
        </dl>
         
         <hr/>
         
         <div className='row' id="ads">
            <Spin>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Full Stack </span>
                        <img src={air} alt="project1"/>

                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className = "card-detail-badge">Node</span>
                        <span className = "card-detail-badge">Express</span>
                        <span className = "card-detail-badge">ReactJS</span>
                        <span className = "card-detail-badge">MongoDB</span>




                    </div>
                    <div className="card-body text-center">
                        <div className='ad-title m-auto'>
                            <h5 className = "text-uppercase">AirBnB clone</h5>

                        </div>
                        <a className='ad-btn' href="https://airbnb-8pav.onrender.com/listings">View Project</a>

                    </div>
                       

                </div>

            </div>
            </Spin>

            <div className="col-md-4">
                <Spin>
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Full Stack </span>
                        <img src={detectImage} alt="project1"/>

                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className = "card-detail-badge">Node</span>
                        <span className = "card-detail-badge">ReactJS</span>
                        <span className = "card-detail-badge">MongoDB</span>
                        <span className = "card-detail-badge">SocketIO</span>





                    </div>
                    <div className="card-body text-center">
                        <div className='ad-title m-auto'>
                            <h5 className = "text-uppercase">MERN Chat App</h5>

                        </div>
                        <a className='ad-btn' href="https://talk-a-tive.herokuapp.com/">View Project</a>

                    </div>
                       

                </div>
                </Spin>

            </div>
            <div className="col-md-4">
                <Spin>
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Full Stack </span>
                        <img src={detects} alt="project1"/>

                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className = "card-detail-badge">Node</span>
                        <span className = "card-detail-badge">Express</span>
                        <span className = "card-detail-badge">ReactJS</span>
                        <span className = "card-detail-badge">MongoDB</span>




                    </div>
                    <div className="card-body text-center">
                        <div className='ad-title m-auto'>
                            <h5 className = "text-uppercase">Detection app</h5>

                        </div>
                        <a className='ad-btn' href="https://github.com/vaibhav-saxena25/thief-detection-alarm">View Project</a>

                    </div>
                       

                </div>
                </Spin>

            </div>
            

         </div>
         

          
        
      </div>

       
        
    </>
  )
  
}

export default Projects
