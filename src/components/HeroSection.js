import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./videos/video-1.mp4' autoPlay loop muted />
            <h1>HELLO</h1>
            <div className="hero-bnns">
                <Button
                 className='btns'
                 buttonStyle='btn--outline'
                 buttounSize='btn--large'
                 >
                     GET STARTED
                 </Button>
                 <Button
                 className='btns'
                 buttonStyle='btn--primary'
                 buttounSize='btn--large'
                 >
                     WATCH TRAILER <i className='far fa-play-circle' />
                 </Button>

            </div>
        </div>
    )
}
export default HeroSection
