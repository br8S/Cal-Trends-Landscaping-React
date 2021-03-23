import React from 'react';
import './styles/Contact.css';


function Contact() {
    return(
        <div>
            <header>
                <div className="headerContent">
                    <h3 className="section-name">Contact Us</h3>
                    <h1 className="section-title">Have a question for us? Go for it.</h1>
                </div>
            </header>
            <div className="homeContent">
                <div className="section-container">
                    <p className="home-motto"><span>Send us your enquiries. </span> Your dream landscape is only a call away.</p>
                    <p className="contact-info">Phone: <span>(619) 651-5179</span></p>
                    <p className="contact-info">Email: <span>jlabotz@gmail.com</span></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;