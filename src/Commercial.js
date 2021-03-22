import React from 'react';
import planPic from './images/plan-pic.jpg';
import designPic from './images/design-pic.jpg';
import installPic from './images/install-pic.jpg';

function Commercial() {
    return(
        <div>
            <header>
                <div className="headerContent">
                    <h3 className="section-name">Commercial/Residential &#9473;&#9473;</h3>
                    <h1 className="section-title">Make your space a personal.</h1>
                </div>
            </header>

            <div className="homeContent">
                <div className="section-container">
                    <p className="home-motto"><span>Your perfect landscape... made a reality: </span> Whether you're updating existing landscaping or embarking on an entirely new project, we treat your vision as a work of art: beautiful, timeless, expressive.</p>
                    <div className="flex-box">
                        <div className="flex-item">
                            <img className="step-pic" src={ planPic } alt=''></img>
                            <p className="step"> Plan </p>
                            <p className="description">Our planning process is built around you. We'll plan every detail without breaking your budget. <br /><br />The planning phase happens like this:
                            <br /><br />1. Initial consultation between you and a professional designer. ‍
                            <br /><br />2. Delivery of detailed plan and budget proposal.
                            <br /><br />3. Follow up meeting with you to answer questions and get your stamp of approval.</p>
                        </div>
                        <div className="flex-item">
                            <img className="step-pic" src={ designPic } alt=''></img>
                            <p className="step"> Design </p>
                            <p className="description">We don't build until you approve our design to the very last detail. Thanks to our patented three-step process. we-re confident you'll love our designs.
                            <br /><br />The design phase happens as following:
                            <br /><br />1. Creation of initial design that captures the essence of your project. ‍
                            <br /><br />2. Formal review of initial design between you the customer and designer. ‍
                            <br /><br />3. Final design delivered to you for approval​.</p>
                        </div>
                        <div className="flex-item">
                            <img className="step-pic" src={ installPic } alt=''></img>
                            <p className="step"> Install </p>
                            <p className="description">It's a thrill seeing your vision implemented right in front of you. Our installers are seasoned veterans with hundreds of projects just like your under their belts. 
                            <br /><br />The install phase happens like this:
                            <br /><br />1. Pre-install walk through with your principal installer.
                            <br /><br />2. Installation of your landscape down to the last detail. ‍
                            <br /><br />3. Post-install walk through with your principal installer to ensure we've nailed it.</p>
                        </div>
                    </div>

                    <p className="home-motto"><span>Our work speaks for itself.</span> We've collaborated with an array of wonderful clients on the most rewarding projects.</p>
                </div>
            </div>
        </div>
    )
}

export default Commercial;