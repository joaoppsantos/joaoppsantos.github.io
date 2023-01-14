import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import React from 'react'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hey, I'm João</h2>
        <div className='prompt'>
          <p>
            Front-end developer ready to create simple solutions for complex problems
          </p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span> Javascript, ReactJS, Typescript, Redux, HTML, CSS, NPM, Yarn, MaterialUI, React Context API, Hooks, Apollo GraphQL, Jenkins, CircleCI </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home