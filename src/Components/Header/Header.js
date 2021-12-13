import React from 'react'
import { Github, Linkedin } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import "./header.css";

function Header() {
    return (
    <div className="header-main-container">         
        <div>
        <Link className="logo" to="/">Indian Food Hub</Link>
        </div>

        <div className="social-media-container">        
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
