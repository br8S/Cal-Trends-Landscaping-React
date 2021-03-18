import React from 'react';
import './styles/Home.css'

function Home() {
    return(
        <div>
            <header>
                <div className="content">
                    <h1>Let's craft a landscape you'll love.</h1>
                    <h4>Landscaping in all parts of San Diego, Bonita, and Chula Vista.</h4>
                </div>
            </header>

            <section>
                <div className="section-container">
                    <p className="home-motto"><span>Your perfect landscape... made a reality: </span> Whether you're updating existing landscaping or embarking on an entirely new project, we treat your vision as a work of art: beautiful, timeless, expressive.</p>
                    <div className="flex-box">
                        <div className="flex-item">
                            <img className="step-pic"></img>
                            <p className="step"> Plan </p>
                            <p className="description">Our planning process is built around you. We'll plan every detail without breaking your budget.</p>
                        </div>
                        <div className="flex-item">
                            <img className="step-pic"></img>
                            <p className="step"> Design </p>
                            <p className="description">We don't build until you approve our design to the very last detail. Thanks to our patented three-step process. we-re confident you'll love our designs.</p>
                        </div>
                        <div className="flex-item">
                            <img className="step-pic"></img>
                            <p className="step"> Install </p>
                            <p className="description">It's a thrill seeing your vision implemented right in front of you. Our installers are seasoned veterans with hundreds of projects just like your under their belts. </p>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Home;