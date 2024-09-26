
import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button/button';
import './eventportfolio.css'
import Eventcard1 from '../assets/eventcard1.svg'
import Eventcard2 from '../assets/eventcard2.svg'
import Eventcard3 from '../assets/eventcard3.svg'
import { useNavigate } from 'react-router-dom';
import Arc from '../assets/Arc-membership.svg'

import { motion } from 'framer-motion';


const EventPortfolio = () => {

    const navigate = useNavigate();

    const [slide, setSlide] = useState(false);

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSlide(true);
                } else {
                    setSlide(false);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleEventPortfolio = () => {
        navigate('/event-portfolio')
    }

    const handleNavigation = (sectionId) => {
        navigate('/');
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };


    return (
        < div className='EP-container' ref={sectionRef} >

            <div className="EP-container-left">
                <div className="EP-title">
                    automotive event management
                </div>
                <div className='EP-content'>
                    Batcave is the ultimate destination that any gearhead id looking for.
                    Yes, it’s not for possession, but for passion.
                </div>

                <div className='EP-btn'>
                    <Button
                        colorA="rgba(255, 167, 68, 1)"
                        colorB="rgba(171, 48, 47, 1)"
                        text="Enquire "
                        height="40px"
                        width="182px"
                        onClick={() => handleNavigation('contact-us')}

                    />
                </div>

            </div>

            <div className='EP-container-right'>

                <div className='event-portfolio-btn-container'>
                    <div >
                        <img src={Arc} alt='' />
                    </div>

                    <div className='EP-btn'>
                        <Button
                            colorA="rgba(255, 167, 68, 1)"
                            colorB="rgba(171, 48, 47, 1)"
                            text="View Event Portfolio "
                            height="40px"
                            width="216px"
                            onClick={handleEventPortfolio}

                        />
                    </div>
                </div>


                <div className='EPcardContainer'>

                    <motion.div
                        className='EC1'
                        animate={{ x: slide ? 29 : 0 }}
                        transition={{ duration: 0.5, ease: 'linear' }}

                    >
                        <img src={Eventcard1} alt='' />
                    </motion.div>


                    <motion.div
                        className='EC2'
                        animate={{ x: slide ? 100 : 0 }}
                        transition={{ duration: 0.5, ease: 'linear' }}
                    >
                        <img src={Eventcard2} alt='' />
                    </motion.div >


                    <motion.div
                        className='EC3'
                        animate={{ x: slide ? 100 : 0 }}
                        transition={{ duration: 0.5, ease: 'linear' }}

                    >
                        <img src={Eventcard3} alt='' />
                    </motion.div >
                </div>
            </div>


        </div>
    )
}

export default EventPortfolio;