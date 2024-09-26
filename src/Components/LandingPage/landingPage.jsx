import React, { useState, useEffect } from 'react';
import './landingPage.css';
import Header from '../Header/header';
import bgImg from '../assets/BG.png'
import Scrollbar from './scrollbar';

const LandingPage = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 0); // Set to true when scrolled
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

          

            <div className={`LandingPage ${isScrolling ? 'scroll' : ''}`}>
                <div className='backgroundImage'>
                    <Scrollbar />

                </div>
            </div>

        </>

    );
};

export default LandingPage;
