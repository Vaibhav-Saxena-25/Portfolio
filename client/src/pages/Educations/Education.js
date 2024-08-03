
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
<>
    <div className='education' id='education'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education details</h2>
        <hr/>
     
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="2017-2018"
        iconStyle={{ background: '#138781', color: '#fff' }}
        icon={<IoSchool/>}
        >
         <h3 className="vertical-timeline-element-title">10th </h3>
         <h4 className="vertical-timeline-element-subtitle">B.J.S public school, Meerut</h4>
         <p>I have completed my 10th from B.J.S public school. </p>

       </VerticalTimelineElement>
       <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="2019 - 2020"
        iconStyle={{ background: '#138781', color: '#fff' }}
        icon={<IoSchool/>}
        >
         <h3 className="vertical-timeline-element-title">12 th </h3>
         <h4 className="vertical-timeline-element-subtitle">L.T.R public School,Kurali Meerut</h4>
         <p>I have completed my 12th from L.T.R public school. and I am currently pursuing my graduation.</p>
       </VerticalTimelineElement>
       <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="2021-2025"
        iconStyle={{ background: '#138781', color: '#fff' }}
        icon={<IoSchool/>}
        >
         <h3 className="vertical-timeline-element-title">Student </h3>
         <h4 className="vertical-timeline-element-subtitle">BIT, Meerut</h4>
         <p>I am currently pursuing my graduation.</p>

       </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
</>
  )
}

export default Education
