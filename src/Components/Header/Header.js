import React from 'react'
// import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Github, Linkedin } from 'react-bootstrap-icons'; // BOOTSTRAP

import "./header.css";

function Header() {
    return (
    <div className="header-main-container">         
        <div>
        <a className="logo" href="index.html">Indian Food Hub</a>
        </div>

        <div className="social-media-container">
            {/* <FontAwesomeIcon icon={faCoffee}>  </FontAwesomeIcon> */}
            {/* <SocialIcon className="social-icon" url="https://github.com/rana3399" /> */}
            
            <a className="icon" href="https://github.com/rana3399"><Github /></a>
            <a className="icon" href="https://www.linkedin.com/in/rana-ahmed-rana/"><Linkedin /></a>      
        </div>
        
        <div>
        <button className="sign-up-button">Sign Up</button>
        </div>

    </div>
    )
}

export default Header
