import React from 'react'
import { Link } from 'react-router-dom';

import "./header.css";

function Header() {
    return (
    <div className="header-main-container">         
        
        <div>
        <Link className="logo" to="/">Indian Food Hub</Link>
        </div>
        
        <div>
        <button className="sign-up-button">Sign Up</button>
        </div>

    </div>
    )
}

export default Header
