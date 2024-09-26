import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './progress.css';

const ProgressBar = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [sliderHeight, setSliderHeight] = useState('0%');
    const [sliderColor, setSliderColor] = useState('linear-gradient(to bottom, blue 0%, yellow 25%, orange 50%, red 75%, green 100%)');
    const navigate = useNavigate();

    const sections = ['home', 'our-events', 'our-plans', 'portfolio', 'contact-us'];

    // const gradients = {
    //     home: 'linear-gradient(102.85deg, #00D4FF 6.5%, #090979 90.34%)',
    //     'our-events': 'linear-gradient(125.58deg, #009245 10.27%, #FCEE21 91.17%)',
    //     'our-plans': 'linear-gradient(90.94deg, #FEF17D 0.55%, #FFA744 28.32%)',
    //     portfolio: 'linear-gradient(89.97deg, #B89301 2.65%, #DBC607 30.1%)',
    //     'contact-us': 'linear-gradient(to bottom, blue 0%, yellow 25%, orange 50%, red 75%, green 100%)', // Fallback color
    // };

    const gradients = {
        home: '#090979',
        'our-events': '#00D4FF',
        'our-plans': '#FCEE21',
        portfolio: '#FFA744 ',
        'contact-us': '#B89301'
    };

    const handleNavigation = (sectionId) => {
        setActiveSection(sectionId);
        navigate('/');

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getIconStyle = (sectionId) => {
        return {
            opacity: activeSection === sectionId ? 1 : 0.3,
        };
    };

    const handleScroll = () => {
        const container = document.querySelector('.main-container');
        const scrollPosition = container.scrollTop;
        const containerHeight = container.scrollHeight - container.clientHeight;

        let currentSection = '';
        let sectionIndex = 0;

        sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = sectionId;
                    sectionIndex = index;
                }
            }
        });

        if (!currentSection && scrollPosition === 0) {
            currentSection = sections[0];
        }

        if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
        }

        const filledHeight = ((scrollPosition / containerHeight) * 100).toFixed(2);
        setSliderHeight(`${filledHeight}%`);

        // Set the gradient color based on the current section
        if (gradients[currentSection]) {
            setSliderColor(gradients[currentSection]);
        }
    };

    useEffect(() => {
        const container = document.querySelector('.main-container');
        handleScroll();
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='progressbar-container'>
            <div className='progressbar'>
                {/* <div className='slider'>
                    <div className='slider-fill' style={{ height: sliderHeight, background: sliderColor }}></div>
                </div> */}
                {sections.map((sectionId) => (
                    <div
                        key={sectionId}
                        className='home'
                        onClick={() => handleNavigation(sectionId)}
                        style={getIconStyle(sectionId)}
                    >
                        {sectionId.replace('-', ' ')}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;
