import Button from "../../Button/button";
import Header from "../../Header/header";
import './eventRegistration.css'
import Arrow from '../../assets/contact-arrow.svg';
import eventimg from '../../assets/event-display-img.svg'
import barLeft from '../../assets/progress-bar-left.svg';
import barRight from '../../assets/progress-bar-right.svg';
import { useEffect, useState } from "react";
import bg1 from '../../assets/event-display-bg.svg';
import bg2 from '../../assets/event-display-bg2.svg';
import { useNavigate } from "react-router-dom";


const events = [
    {
        id: 1,
        name: "KMS SPeed Fest 2024",
        date: "17th - 18th Aug 2024 | 10 PM - 6 PM",
        location: "Kari motor speedway, Coimbatore",
        backgroundImage: bg1,
        containerImg: bg1
    },
    {
        id: 2,
        name: "bAT FLEET Fest #2",
        date: "25th - 26th Sep 2024 | 9 AM - 5 PM",
        location: "XYZ Arena, Chennai",
        backgroundImage: bg2,
        containerImg: bg2
    },
    {
        id: 3,
        name: "bAT FLEET Fest #3",
        date: "25th - 26th Sep 2024 | 9 AM - 5 PM",
        location: "XYZ Arena, Chennai",
        backgroundImage: bg2,
        containerImg: bg2
    },
    {
        id: 4,
        name: "bAT FLEET Fest #4",
        date: "25th - 26th Sep 2024 | 9 AM - 5 PM",
        location: "XYZ Arena, Chennai",
        backgroundImage: bg2,
        containerImg: bg2
    },

];


const EventDisplay = () => {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);
    const [selectedEvent, setSelectedEvent] = useState(events[0]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [nextEvent, setNextEvent] = useState(null);

    const totalSteps = events.length;


    const handlePrev = () => {
        if (currentStep > 1 && !isAnimating) {
            setCurrentStep(prev => prev - 1);
            setNextEvent(events[currentStep - 2]);
            setIsAnimating(true);
        }
    };

    const handleNext = () => {
        if (currentStep < totalSteps && !isAnimating) {
            setCurrentStep(prev => prev + 1);
            setNextEvent(events[currentStep]);
            setIsAnimating(true);
        }
    };

    const handleEventClick = (event) => {
        if (!isAnimating && event.id !== selectedEvent.id) {
            setNextEvent(event);
            setIsAnimating(true);
        }
    };

    useEffect(() => {
        if (isAnimating && nextEvent) {
            const timer = setTimeout(() => {
                setSelectedEvent(nextEvent);
                setNextEvent(null);
                setIsAnimating(false);
            }, 500); // Match this duration with your CSS animation duration
            return () => clearTimeout(timer);
        }
    }, [isAnimating, nextEvent]);

    const handleRegister = () => {
        navigate(`/event-details/${selectedEvent.id}`);
    };



    return (
        <>

            <div className="EventDisplay-container">

                <div className="event-background" style={{ backgroundImage: `url(${selectedEvent.backgroundImage})` }}>
                    <Header />

                    <div className="event-display-container">

                        <div className="event-display-div-1">Upcoming events</div>
                        <div className={`event-display-div-2 ${isAnimating ? 'exit' : 'enter'}`}>{selectedEvent.name}</div>
                        <div className={`event-display-div-3 ${isAnimating ? 'exit' : 'enter'}`}>{selectedEvent.date}</div>
                        <div className={`event-display-div-4 ${isAnimating ? 'exit' : 'enter'}`}>{selectedEvent.location}</div>

                        <div className='event-register-btn'>
                            <Button
                                color="#fff"
                                text="Register"
                                height="40px"
                                width="147px"
                                onClick={handleRegister}
                            >
                                < img style={{ marginLeft: "40px", zIndex: '1' }} src={Arrow} alt='' />
                            </Button>
                        </div>


                        <div className="event-listing" >
                            <div className="event-listing-images">

                                {events.map(event => (
                                    <div key={event.id} onClick={() => handleEventClick(event)} className={event.id === selectedEvent.id ? 'disabled-event' : ''}>
                                        <img width={308} src={event.containerImg} alt={event.name} />
                                        <div className="event-img-name">{event.name}</div>
                                    </div>
                                ))}

                            </div>

                            <div className="progress-container-event">
                                <button className="navigation-button prev-button" onClick={handlePrev}>
                                    <img src={barLeft} alt='' />

                                </button>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
                                </div>
                                <button className="navigation-button next-button" onClick={handleNext}>
                                    <img src={barRight} alt='' />

                                </button>
                            </div>

                        </div>


                    </div>

                </div>

            </div>


        </>
    )

}

export default EventDisplay;