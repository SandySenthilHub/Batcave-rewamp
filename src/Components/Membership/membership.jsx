
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Button from '../Button/button';
import './membership.css'
import OGCard from '../assets/MembershipCard-OG.svg'
import XRCard from '../assets/Membershipcard-XR.svg'
import IICard from '../assets/MembershipCard-II.svg'

import OGLogo from '../assets/OG-logo.svg';
import XRLogo from '../assets/XR-logo.svg';
import IILogo from '../assets/II-logo.svg';
import Arc from '../assets/Arc-membership.svg'

import { motion } from 'framer-motion';
import PlanComponent from './membership-plan-Component/plan-component';


const Membership = () => {


    const [rotate, setRotate] = useState(false);

    const [showContainer, setShowContainer] = useState(false);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const sectionRef = useRef(null);


    useLayoutEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    setRotate(true);

                    setTimeout(() => {

                        setShowContainer(true);

                    }, 500);

                } else {

                    setRotate(false);
                    setShowContainer(false);


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

            if (sectionRef.current && observer) {

                observer.unobserve(sectionRef.current);

            }

        };

    }, [sectionRef]);


    // Function to handle opening the popup

    const handleOpenPopup = () => {

        setIsPopupOpen(true);

    };


    // Function to handle closing the popup

    const handleClosePopup = () => {

        setIsPopupOpen(false);

    };



    return (
        <>
            <div className={`membership-container ${isPopupOpen ? 'blurred' : ''}`} ref={sectionRef}>

                <div className="membership-container-left">
                    <div className="membership-title">
                        membership plans
                    </div>
                    <div className='membership-content-title'>
                        Batcave is the ultimate destination that any gearhead id looking for.
                        Yes, it’s not for possession, but for passion.
                    </div>
                    <div className='membership-btn'>
                        <Button
                            colorA="rgba(0, 146, 69, 1)"
                            colorB="rgba(252, 238, 33, 1)"
                            text="Coming Soon"
                            height="40px"
                            width="182px"
                            onClick={handleOpenPopup}
                            disabled
                        />
                    </div>

                </div>

                <div className='membership-container-right'>

                    <div className='cardContainer'>
                        <motion.div
                            className='OGImg'
                            animate={{ rotate: rotate ? -14.82 : 0 }}
                            // animate={{ rotate: rotate ? -0 : 0 }}

                            transition={{ duration: 0.5, ease: 'linear' }}

                        >
                            <img src={OGCard} alt='' />
                        </motion.div>


                        <motion.div
                            className='XRImg'
                            animate={{ rotate: rotate ? -25.33 : 0 }}
                            // animate={{ rotate: rotate ? -0 : 0 }}

                            transition={{ duration: 0.5, ease: 'linear' }}
                        >
                            <img src={XRCard} alt='' />
                        </motion.div >


                        <motion.div
                            className='IIImg'
                            animate={{ rotate: rotate ? -43 : 0 }}
                            // animate={{ rotate: rotate ? -0 : 0 }}

                            transition={{ duration: 0.5, ease: 'linear' }}

                        >
                            <img src={IICard} alt='' />
                        </motion.div >
                    </div>
                </div>


                {showContainer && (
                    <div className={`membership-container-content ${showContainer ? 'show' : ''}`}>

                        <div className='IgnitionContainer'>
                            <div >
                                <img src={Arc} alt='' />
                            </div>
                            <div>
                                <div className='membership-content'>Free  - Only Spectate</div>
                                <img src={IILogo} alt='' />

                            </div>
                        </div>

                        <div className='XceleratorContainer'>
                            {/* <div > */}
                                <img src={Arc} alt='' className='coming-soon-arc'/>
                            {/* </div> */}
                            {/* <div> */}
                            <div className='membership-content coming-soon' >Coming Soon</div>
                            {/* <img src={XRLogo} alt='' /> */}

                            {/* </div> */}
                        </div>

                        <div className='OriginalContainer'>
                            <div >
                                <img src={Arc} alt='' />
                            </div>
                            <div>
                                <div className='membership-content'>Exclusive - Ultimate Access </div>
                                <img src={OGLogo} alt='' />

                            </div>
                        </div>

                    </div>
                )}



            </div>
            {isPopupOpen && (
                <>

                    <div className="popup-overlay">

                        <div className="popup">
                            <div className='membership-popup'>
                                <button className="close-btn" onClick={handleClosePopup}>X</button>
                            </div>
                            <PlanComponent />
                        </div>
                    </div>
                </>
            )}

        </>

    )
}

export default Membership;