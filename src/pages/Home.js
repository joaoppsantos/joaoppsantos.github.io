import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import { Link } from "react-router-dom"
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Tooltip } from '@material-ui/core'
import { useTypewriter } from 'react-simple-typewriter'
import React from 'react'
import "../styles/Home.css"

function Home() {
  const [typewriteText] = useTypewriter({
    words: ["Hey, I'm João!"],
    loop: 1
  })

  return (
    <div className='home'>
      <div className='about'>
        <div className='prompt'>
          <h2>{typewriteText}</h2> 
          <p className='description greetings'>
            My name is João Santos, I'm a front-end developer based in Porto, Portugal.
          </p>
          <p className='description details'>
            I have more than 6 years of experience in the area and I'm passionate in creating simple
            solutions to complex problems. Feel free to go to <Link to="/experience" className='experienceLink'>Experience tab</Link> to check on my past experiences. 
            <span class="fi fi-pt flag"></span> 
          </p>
          <div className='tooltips'>
            <Tooltip title={<h3 style={{ color: "white" }}>https://www.linkedin.com/in/joaopedropsantos/</h3>}>
              <a href='https://www.linkedin.com/in/joaopedropsantos/'>
                <LinkedIn />
              </a>
            </Tooltip>
            <Tooltip title={<h3 style={{ color: "white" }}>mailto: joaoppsantos@live.com</h3>}>
              <a href='mailto:joaoppsantos@live.com'>
                <Email />
              </a>
            </Tooltip>
            <Tooltip title={<h3 style={{ color: "white" }}>https://github.com/joaoppsantos</h3>}>
              <a href='https://github.com/joaoppsantos'>
                <GitHub />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span> Javascript, ReactJS, Typescript, Redux, HTML, CSS, MaterialUI, React Context API, Hooks, Apollo GraphQL, React Testing Library, Enzyme, Jest, Node.JS </span>
          </li>
          <li className='item'>
            <h2> Tooling and General Knowledge</h2>
            <span> NPM, Yarn, Webpack, Jenkins, CircleCI, Scrum, Kanban, Git, Gitlab, Selenium, Webdriver.IO </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home