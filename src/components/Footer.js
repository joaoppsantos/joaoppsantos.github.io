import React from 'react'
import { GitHub } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <GitHub />
            <LinkedIn />
        </div>
        <p> &copy; 2023 </p>
    </div>
  )
}

export default Footer