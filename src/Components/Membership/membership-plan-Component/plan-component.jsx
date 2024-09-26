import './plan-com.css';
import Button from '../../Button/button';
import OGcard from '../../assets/OG-plan.svg';
import XRcard from '../../assets/XR-plan.svg';
import IIcard from '../../assets/II-plan.svg';
import IICheckbox from '../../assets/II-Checkbox.svg';
import XRCheckbox from '../../assets/XR-checkbox.svg';
import OGCheckbox from '../../assets/OG-checkbox.svg';
import { useNavigate } from 'react-router-dom';
import barLeft from '../../assets/progress-bar-left.svg';
import barRight from '../../assets/progress-bar-right.svg';

import { useState, useRef, useEffect } from 'react';

const PlanComponent = () => {

    const navigate = useNavigate()
    const [currentPlan, setCurrentPlan] = useState(0);


    const scrollRef = useRef(null);

    const planCardRef = useRef(null);


    const plans = [
        { id: 1, name: 'Plan 1', color: '#81E155' },
        { id: 2, name: 'Plan 2', color: '#FFA744' },
        { id: 3, name: 'Plan 3', color: '#0E7BF8' }
    ];


    const handlePrev = () => {

        setCurrentPlan(prev => {

            const newPlan = prev > 0 ? prev - 1 : plans.length - 1;

            scrollRef.current.scrollLeft = planCardRef.current.offsetWidth * newPlan;

            return newPlan;

        });

    };


    const handleNext = () => {

        setCurrentPlan(prev => {

            const newPlan = prev < plans.length - 1 ? prev + 1 : 0;

            scrollRef.current.scrollLeft = planCardRef.current.offsetWidth * newPlan;

            return newPlan;

        });

    };

    const navigateIIForm = () =>{
        navigate('/registration-form-ii')
    }

    const navigateXRForm = () =>{
        navigate('/registration-form-xr')
    }

    useEffect(() => {
        const handleResize = () => {
            console.log('Window resized');
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

 
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current && planCardRef.current) {
                const scrollPosition = scrollRef.current.scrollLeft;
                const planCardWidth = planCardRef.current.offsetWidth;
                const newPlan = Math.floor(scrollPosition / planCardWidth);
                setCurrentPlan(newPlan);
            }
        };

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, [scrollRef, planCardRef]);




    return (
        <>


            <div className="plan-container" ref={scrollRef}>
                <div className="plan-card II-plan" ref={planCardRef}>
                    <div className='plan-img'>
                        <img src={IIcard} alt='' />
                    </div>

                    <div className='plan-content'>
                        <div className='plan-title'>IGNITION INSIDERS</div>
                        <div className='plan-price'>Free - Only Spectate</div>

                        <div className='plans-content'>
                            <img src={IICheckbox} alt='' />
                            <div>1 Complimentary Road Trip / Year</div>
                        </div>
                        <div className='plans-content'>
                            <img src={IICheckbox} alt='' />
                            <div>6 Complimentary Meetups / Year</div>
                        </div>
                        <div className='plans-content'>
                            <img src={IICheckbox} alt='' />
                            <div>Flat 15% Discount on all Meetups</div>
                        </div>

                        <div className='membership-btn-plan'>
                            <Button
                                color="rgba(26, 171, 255, 0.5)"
                                text="Grab Membership "
                                height="40px"
                                width="182px"
                                onClick={navigateIIForm}
                            />
                        </div>
                    </div>
                </div>

                <div className="plan-card XR-plan">
                    <div className='plan-img'>
                        <img src={XRcard} alt='' />
                    </div>

                    <div className='plan-content'>
                        <div className='plan-title'>XCELERATORS</div>
                        <div className='plan-price'>Billed Monthly / Cancel Anytime</div>

                        <div className='plans-content'>
                            <img src={XRCheckbox} alt='' />
                            <div>1 Complimentary Road Trip / Year</div>
                        </div>
                        <div className='plans-content'>
                            <img src={XRCheckbox} alt='' />
                            <div>6 Complimentary Meetups / Year</div>
                        </div>
                        <div className='plans-content'>
                            <img src={XRCheckbox} alt='' />
                            <div>Flat 15% Discount on all Meetups</div>
                        </div>

                        <div className='membership-btn-plan' style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <div style={{ color: "#fff" }}>₹ 249 / -</div>
                            <Button
                                color="rgba(26, 171, 255, 0.5)"
                                text="Grab Membership "
                                height="40px"
                                width="182px"
                                onClick={navigateXRForm}
                            />
                        </div>
                    </div>
                </div>

                <div className="plan-card OG-plan">
                    <div className='plan-img'>
                        <img src={OGcard} alt='' />
                    </div>

                    <div className='plan-content'>
                        <div className='plan-title'>Original Gearheads</div>
                        <div className='plan-price'>Closed - Ultimate Access</div>

                        <div className='plans-content'>
                            <img src={OGCheckbox} alt='' />
                            <div>1 Complimentary Road Trip / Year</div>
                        </div>
                        <div className='plans-content'>
                            <img src={OGCheckbox} alt='' />
                            <div>6 Complimentary Meetups / Year</div>
                        </div>
                        <div className='plans-content'>
                            <img src={OGCheckbox} alt='' />
                            <div>Flat 15% Discount on all Meetups</div>
                        </div>

                        <div className='membership-btn-plan'>
                            <Button
                                color="rgba(26, 171, 255, 0.5)"
                                text="Registration Closed "
                                height="40px"
                                width="182px"
                                disabled={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="progress-container">

                <button className="navigation-button" onClick={handlePrev}>
                    <img src={barLeft} alt='' />
                </button>

                <div className="progress-bar">

                    <div

                        className="progress"

                        style={{

                            width: `${((currentPlan + 1) / plans.length) * 100}%`,

                            backgroundColor: plans[currentPlan].color

                        }}

                    ></div>

                </div>

                <button className="navigation-button" onClick={handleNext}>
                    <img src={barRight} alt='' />

                </button>

            </div>
        </>
    );
}

export default PlanComponent;

