import React from 'react';
import './styles/Home.css'
import planPic from './images/plan-pic.jpg';
import designPic from './images/design-pic.jpg';
import installPic from './images/install-pic.jpg';
import imgOne from './images/gallery-1.jpg';
import imgTwo from './images/gallery-2.jpg';
import imgThree from './images/gallery-4.jpg';

function Home() {

    const currentSlide = () => {
        console.log("hello")
    }

    return(
        <div>
            <header>
                <div className="headerContent">
                    <h1>Let's craft a landscape you'll love.</h1>
                    <h4>Landscaping in all parts of San Diego, Bonita, and Chula Vista.</h4>
                </div>
            </header>

            <section className="homeContent">
                <div className="section-container">
                    <p className="home-motto"><span>Your perfect landscape... made a reality: </span> Whether you're updating existing landscaping or embarking on an entirely new project, we treat your vision as a work of art: beautiful, timeless, expressive.</p>
                    <div className="flex-box">
                        <div className="flex-item">
                            <img className="step-pic" src={ planPic } alt=''></img>
                            <p className="step"> Plan </p>
                            <p className="description">Our planning process is built around you. We'll plan every detail without breaking your budget.</p>
                        </div>
                        <div className="flex-item">
                            <img className="step-pic" src={ designPic } alt=''></img>
                            <p className="step"> Design </p>
                            <p className="description">We don't build until you approve our design to the very last detail. Thanks to our patented three-step process. we-re confident you'll love our designs.</p>
                        </div>
                        <div className="flex-item">
                            <img className="step-pic" src={ installPic } alt=''></img>
                            <p className="step"> Install </p>
                            <p className="description">It's a thrill seeing your vision implemented right in front of you. Our installers are seasoned veterans with hundreds of projects just like your under their belts. </p>
                        </div>
                    </div>
                </div>

                <div className="slideshow">
                    <div className="slideshow-container">

                        <div className="mySlides fade">
                            <div className="numbertext"> </div>
                            <img className="galleryImage" src={ imgOne } alt=''></img>
                            <div className="text"> </div>
                        </div>
        
                        <div className="mySlides fade">
                            <div className="numbertext"> </div>
                            <img className="galleryImage" src={ imgTwo } alt=''></img>
                            <div className="text"> </div>
                        </div>
        
                        <div className="mySlides fade">
                            <div className="numbertext"> </div>
                            <img className="galleryImage" src={ imgThree } alt=''></img>
                            <div className="text"> </div>
                        </div>
        
                        <a className="prev" onclick={ currentSlide }>&#10094;</a>
                        <a className="next" onclick={ currentSlide }>&#10095;</a>
                    </div>
        
                    <div className="dot-container">
                        <span className="dot" onclick={ currentSlide }></span>
                        <span className="dot" onclick={ currentSlide }></span>
                        <span className="dot" onclick={ currentSlide }></span>
                    </div>
                </div>
                
                
            </section>
        </div>
    )
}

export default Home;