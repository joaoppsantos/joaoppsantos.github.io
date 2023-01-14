import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from '@material-ui/icons'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className='vertical-timeline-element--work' iconStyle={{background: "#3e497a", color: "#fff"}}
        date="2022-2023"
        icon={<Work />}>
          <h3 className='vertical-timeline-element-title'>Front-End Developer @ PriceHubble</h3>
          <h4 className='vertical-timeline-element-subtitle'>Remote</h4>
          <p>
          * Product development for PriceHubble partners' website.
          </p>
          <p>
          * Migrate Angular application to React in order to deprecate and remove Angular legacy code.
          </p>
          <p>
          * Interview developers for the following roles: Senior Front-End Software Engineer and Tech Lead, and be part of the hiring committee for the mentioned roles.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background: "#3e497a", color: "#fff"}}
        date="2018-2022"
        icon={<Work />}>
          <h3 className='vertical-timeline-element-title'>Software Engineer @ Farfetch</h3>
          <h4 className='vertical-timeline-element-subtitle'>Porto, Portugal</h4>
          <p>
          * Product development on farfetch.com website following Kanban/Scrum methodology.
          </p>
          <p>
          * Development on the creation of Farfetch Beauty.
          </p>
          <p>
          * Works on company's tooling, delivered internal trainings and organized internal hackathons.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background: "#3e497a", color: "#fff"}}
        date="2016-2017"
        icon={<Work />}>
          <h3 className='vertical-timeline-element-title'>Frontend Developer @ Blip.pt | Paddy Power Betfair</h3>
          <h4 className='vertical-timeline-element-subtitle'>Porto, Portugal</h4>
          <p>
          * Worked on an internal app meant to fill a logistical gap present in the company.
          </p>
          <p>
          * Development on paddy power sportsbook website.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background: "#5f9ea0", color: "#fff"}}
        icon={<School />}>
          <h3 className='vertical-timeline-element-title'>Universidade do Porto</h3>
          <p>Bachelor</p>
          <p>Computer Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience