import React from 'react';
import './styles/Nav.css';
import logo from './images/caltrendsLogo.png'

function Nav() {

    const mobileMenu = () => {

    }

    return(
        <div>
            <nav className="nav-container"> 
                <div class="burger" onClick={ mobileMenu }></div>
                <img className="logo" src={ logo } alt=''></img>
                <ul className="nav-bar">
                    <li className="nav-links"> Home </li>
                    <li className="nav-links"> About </li>
                    <li className="nav-links"> Gallery </li>
                    <li className="nav-links"> Commercial/Residential </li>
                    <li className="nav-links"> Contact </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;