import React from 'react';
import imgOne from './images/pic-1.jpg';
import imgTwo from './images/pic-2.jpg';
import imgThree from './images/pic-3.jpg';
import imgFour from './images/pic-4.jpg';
import imgFive from './images/pic-5.jpg';
import imgSix from './images/pic-6.jpg';

function Gallery() {
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
            slideIndex = 5;
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
                    <h3 className="section-name">Gallery &#9473;&#9473;</h3>
                    <h1 className="section-title">Check out some of our work.</h1>
                </div>
            </header>

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

                        <div className="mySlides fade">
                            <div className="numbertext"> </div>
                            <img className="gallery-image" src={ imgFour } alt=''></img>
                            <div className="text"> </div>
                        </div>

                        <div className="mySlides fade">
                            <div className="numbertext"> </div>
                            <img className="gallery-image" src={ imgFive } alt=''></img>
                            <div className="text"> </div>
                        </div>

                        <div className="mySlides fade">
                            <div className="numbertext"> </div>
                            <img className="gallery-image" src={ imgSix } alt=''></img>
                            <div className="text"> </div>
                        </div>
        
                        <div className="prev" onClick={ prevSlide }>&#10094;</div>
                        <div className="next" onClick={ nextSlide }>&#10095;</div>
                    </div>
        
                    <div className="dot-container">
                        <span className="dot" onClick={ showSlide }></span>
                        <span className="dot" onClick={ showSlide }></span>
                        <span className="dot" onClick={ showSlide }></span>
                        <span className="dot" onClick={ showSlide }></span>
                        <span className="dot" onClick={ showSlide }></span>
                        <span className="dot" onClick={ showSlide }></span>
                    </div>
                </div>
                <div className="homeContent">
                    <div className="section-container">
                        <p className="home-motto"><span>Our work speaks for itself.</span> We've collaborated with an array of wonderful clients on the most rewarding projects.</p>
                    </div>
                </div>
        </div>
    )
}

export default Gallery;