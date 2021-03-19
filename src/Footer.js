import React from 'react';
import './styles/Footer.css';

import logo from './images/caltrendsLogo.png'

function Footer(){

    return(
        <div className="footer-container" >
            <nav className="footer"> 
                <img className="logo" src={ logo } alt=''></img>
                <ul className="footer-bar">
                    <li className="nav-links"> Home </li>
                    <li className="nav-links"> About </li>
                    <li className="nav-links"> Gallery </li>
                    <li className="nav-links"> Commercial/Residential </li>
                    <li className="nav-links"> Contact </li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;