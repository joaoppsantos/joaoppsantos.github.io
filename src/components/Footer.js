import React from 'react'
import { GitHub } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <a href='https://www.linkedin.com/in/joaopedropsantos/'>
              <LinkedIn />
            </a>
            <a href='https://github.com/joaoppsantos'>
              <GitHub />
            </a>
        </div>
        <p> &copy; 2023 </p>
    </div>
  )
}

export default Footer