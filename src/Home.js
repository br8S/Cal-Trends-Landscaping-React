import React from 'react';
import './styles/Home.css'
import planPic from './images/plan-pic.jpg';
import designPic from './images/design-pic.jpg';
import installPic from './images/install-pic.jpg';
import imgOne from './images/pic-1.jpg';
import imgTwo from './images/pic-2.jpg';
import imgThree from './images/pic-3.jpg';

function Home() {
    var slideIndex = 0;

    const startSlide = () => {
        var slides = document.querySelectorAll('.mySlides');
        slides[0].style.display = "block"
    }

    const showSlide = (event) => {
        var slides = document.querySelectorAll('.mySlides');
        var dots = document.querySelectorAll('.dot');

        for(var i = 0; i < slides.length; i++){
            if(dots[i] !== event.currentTarget){
                slides[i].style.display = "none"
            }
            else {
                slides[i].style.display = "block"
            }
        }
    
    }   

    const nextSlide = () => {
        var slides = document.querySelectorAll('.mySlides');

        if((slideIndex + 1) < slides.length){
            slideIndex += 1;
        }
        else{
            slideIndex = 0;
        }
    
        slides[slideIndex].style.display = "block"

        for(var i = 0; i < slides.length; i++){
            if(i !== slideIndex){
                slides[i].style.display = "none"
            }
        }
    }   

    const prevSlide = () => {
        var slides = document.querySelectorAll('.mySlides');

        if((slideIndex - 1) > 0){
            slideIndex -= 1;
        }

        else{
            slideIndex = 2;
        }
    
        slides[slideIndex].style.display = "block"

        for(var i = 0; i < slides.length; i++){
            if(i !== slideIndex){
                slides[i].style.display = "none"
            }
        }
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
                            <img className="gallery-image" src={ imgOne }  onLoad={ startSlide } alt=''></img>
                            <div className="text"> </div>
                        </div>
        
                        <div className="mySlides fade">
                            <div className="numbertext"> </div>
                            <img className="gallery-image" src={ imgTwo } alt=''></img>
                            <div className="text"> </div>
                        </div>
        
                        <div className="mySlides fade">
                            <div className="numbertext"> </div>
                            <img className="gallery-image" src={ imgThree } alt=''></img>
                            <div className="text"> </div>
                        </div>
        
                        <a className="prev" onClick={ prevSlide }>&#10094;</a>
                        <a className="next" onClick={ nextSlide }>&#10095;</a>
                    </div>
        
                    <div className="dot-container">
                        <span className="dot" onClick={ showSlide }></span>
                        <span className="dot" onClick={ showSlide }></span>
                        <span className="dot" onClick={ showSlide }></span>
                    </div>
                </div>

                <div className="section-container">
                    <p className="home-motto"><span>Our work speaks for itself.</span> We've collaborated with an array of wonderful clients on the most rewarding projects.</p>
                </div>

                
                
            </section>
        </div>
    )
}

export default Home;