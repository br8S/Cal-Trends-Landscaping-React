import React from 'react';
import './styles/Nav.css';
import logo from './images/caltrendsLogo.png';
import { Link } from 'react-router-dom';

function Nav() {

    const mobileMenu = () => {

    }

    return(
        <div>
            <nav className="nav-container"> 
                <div class="burger" onClick={ mobileMenu }></div>
                <Link to="/"><img className="logo" src={ logo } alt=''></img></Link>
                <ul className="nav-bar">
                    <Link to="/"><li className="nav-links"> Home </li></Link>
                    <Link to="/about"><li className="nav-links"> About </li></Link>
                    <Link to="/gallery"><li className="nav-links"> Gallery </li></Link>
                    <Link to="/commercial"><li className="nav-links"> Commercial/Residential </li></Link>
                    <Link to="/contact"><li className="nav-links"> Contact </li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;