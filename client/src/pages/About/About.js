import React from 'react';
import './About.css';
import Jump from 'react-reveal/Jump';
import pic from '../../assets/images/pic.png';

const About = () => {
  return (
    <>
    <Jump top>
    <div>
      <div className='about' id = 'about'>
        <div className='row'>
          {/* Add a closing tag for the first div */}
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
            <img src={pic} alt="profile-pic"/>
          </div>
          {/* This was incorrectly placed outside the previous div, causing the syntax error */}
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
            <h1>About me</h1>
            <p>
              


Hi, I’m Vaibhav Saxena, a dedicated computer science engineer with a passion for software development. I have built projects like an Airbnb clone and a chat app featuring real-time messaging with WebSockets. I have strong expertise in Data Structures and Algorithms (DSA) using C++, which enhances my problem-solving skills and efficiency in coding. These experiences have honed my skills in front-end and back-end development, database management, and user interface design. I am committed to continuous learning and staying updated with industry trends. . Let’s connect and collaborate on innovative projects

            </p>
          </div>
        </div>
      </div>
    </div>
    </Jump>
    </>
  );
}

export default About;