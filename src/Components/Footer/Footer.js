import React from 'react';
import { Github, Linkedin } from 'react-bootstrap-icons';
import "./footer.css";

export default function Footer() {
    return (
        <div className="social-media-container">        
            <a className="icon" href="https://github.com/rana3399"><Github /></a>
            <a className="icon" href="https://www.linkedin.com/in/rana-ahmed-rana/"><Linkedin /></a>      
        </div>
    )
}
