import React from 'react'
import './WorkExp.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiDiamondHard } from "react-icons/gi";

const WorkExp = () => {
  return (
    <>
      <div className=' work' id = 'workexp'>
        <div className=' container work-exp'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Work Experience</h2>
            <hr/>

        <VerticalTimeline lineColor='#1e1e2c'>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="April-May 202"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<GiDiamondHard />}
  >
    <h3 className="vertical-timeline-element-title">Front End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Octanet services pvt. Ltd.</h4>
    <p>
      I am completed 1 month internship as an  Front End Developer in Octanet services pvt. Ltd.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="April-May 2024"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<GiDiamondHard />}
  >
    <h3 className="vertical-timeline-element-title">Front End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Octanet services pvt. Ltd.</h4>
    <p>
      I am completed 1 month internship as an  Front End Developer in Octanet services pvt. Ltd.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="April-May 2024"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<GiDiamondHard />}
  >
    <h3 className="vertical-timeline-element-title">Front End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Octanet services pvt. Ltd.</h4>
    <p>
      I am completed 1 month internship as an  Front End Developer in Octanet services pvt. Ltd.
    </p>
  </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

      </div>
    </>
  )
}

export default WorkExp
