import React from 'react';
import './styles/Nav.css';
import logo from './images/caltrendsLogo.png';
import { Link } from 'react-router-dom';

function Nav() {
    var mobileOn = false;

    const closeMobileMenu = () => {
        if(mobileOn === true){
            document.querySelector('.nav-bar').style.display = "none";
        }
    }

    const mobileMenu = () => {
        mobileOn = true;
        document.querySelector('.nav-bar').style.display = "flex";
    }

    return(
        <div>
            <nav className="nav-container"> 
                <div class="burger" onClick={ mobileMenu }></div>
                <Link to="/"><img className="logo" src={ logo } alt=''></img></Link>
                <ul className="nav-bar">
                    <Link to="/"><li className="nav-links" onClick={ closeMobileMenu }> Home </li></Link>
                    <Link to="/about"><li className="nav-links" onClick={ closeMobileMenu }> About </li></Link>
                    <Link to="/gallery"><li className="nav-links" onClick={ closeMobileMenu }> Gallery </li></Link>
                    <Link to="/commercial"><li className="nav-links" onClick={ closeMobileMenu }> Commercial/Residential </li></Link>
                    <Link to="/contact"><li className="nav-links" onClick={ closeMobileMenu }> Contact </li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;