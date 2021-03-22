import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';

import logo from './images/caltrendsLogo.png'

function Footer(){

    return(
        <div className="footer-container" >
            <nav className="footer"> 
                <img className="logo" src={ logo } alt=''></img>
                <ul className="footer-bar">
                    <Link to="/"><li className="nav-links"> Home </li></Link>
                    <Link to="/about"><li className="nav-links"> About </li></Link>
                    <Link to="/gallery"><li className="nav-links"> Gallery </li></Link>
                    <Link to="/commercial"><li className="nav-links"> Commercial/Residential </li></Link>
                    <Link to="/contact"><li className="nav-links"> Contact </li></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;