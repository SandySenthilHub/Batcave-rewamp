import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/header"
import BackArrow from '../../assets/Back-arrow.svg';
import Arrow from '../../assets/contact-arrow.svg';
import Button from "../../Button/button";
import { useParams } from "react-router-dom";
import bg1 from '../../assets/event-display-bg.svg';
import bg2 from '../../assets/event-display-bg2.svg';

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

const EventDescription = () => {

    const navigate = useNavigate();

    const [expanded, setExpanded] = useState(false);
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };



    useEffect(() => {
        // Find the event from the list
        const selectedEvent = events.find(event => event.id === parseInt(eventId));
        setEvent(selectedEvent || {});
    }, [eventId]);

    if (!event || !event.name) {
        return <div>Loading...</div>;
    }

    const navigateBack = () => {
        navigate('/event')
    }

    const handleRegister = () => {
        navigate(`/event-form/${event.id}`);
    };


    return (
        <>

            <div className="event-description">
                <Header />

                <div className="event-description-container">

                    <div className="page-back-nav" onClick={navigateBack}>
                        <img src={BackArrow} alt='New Car Purchase Coimbatore' />
                        <div>Back <span>|</span> <span>Event Details</span></div>
                    </div>

                    <div className="event-Container">
                        <div className="leftCon">
                            <img src='' alt="Used car Purchase Coimbatore" className="logoImg" />
                            {/* <div>{event.name}</div> */}

                            <div className="imgWithPrice">
                                <div className="carImg">
                                    <img src={event.backgroundImage} alt="Off Road Adventures in Coimbatore" />
                                </div>
                                <div className="event-register-container">
                                    <div className="eventPrice">399/- INR</div>
                                    <div className='event-register-btn'>
                                        <Button
                                            color="#fff"
                                            text="Register Now"
                                            height="40px"
                                            width="199px"
                                            onClick={handleRegister}
                                        >
                                            < img style={{ marginLeft: "85px", zIndex: '1' }} src={Arrow} alt='Off road experience in Coimbatore' />
                                        </Button>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="rightCon">

                            <div className="head">Secure Your Spot: Registration ends by August 12th, 2024. Limited slots Only</div>
                            <div className="body1">
                                <div>Event Date & Time</div>
                                <div className="spiltCon1">
                                    <div> August 17th & 18th, 2024</div>
                                    <div>10:00 AM - 06:00 PM</div>
                                    {/* <div>Will be Announced soon !</div> */}
                                </div>
                            </div>

                            <div className="endline3"></div>

                            <div className="body1 aboutevent" >About Event</div>
                            <div className={`body2 aboutevent ${expanded ? 'expanded' : ''}`} style={{ textAlign: "justify" }}>Batcave Automotive, in association with CRA Motorsports, invites you to an adrenaline-packed
                                {expanded && (
                                    <>
                                        weekend at Kari Motors Speedway on August 17th and 18th, 2024. Join us for a series of thrilling automotive events that promise excitement, competition, and high-octane fun! Please note that registration is only for spectating the event. If you are interested in participating in the race, please contact the number provided below for participation-related queries.
                                        <br /> <br />


                                        <b> Saturday, August 17th, 2024</b> <br /><br />
                                        <ul>
                                            <li> <b>Autocross - 4Wheeler</b></li>
                                            <li style={{ listStyle: "none", marginTop: "10px" }}> Get ready for the Autocross event, where drivers will showcase their agility and precision. Participants will navigate through a challenging course filled with cones and obstacles, testing their reflexes and control behind the wheel. This event is a true testament to skill and driving finesse.
                                            </li>
                                        </ul>

                                        <ul>

                                            <li> <b> Gymkhana - 4Wheeler</b></li>
                                            <li style={{ listStyle: "none", marginTop: "10px" }}>   Next up is the Gymkhana, an event that demands creativity and speed. Drivers will tackle complex courses featuring tight turns and drifting challenges, pushing their limits to deliver impressive performances. Watch as competitors demonstrate their prowess in this thrilling automotive showdown.
                                            </li>

                                        </ul>
                                        <ul>

                                            <li> <b> Time Attack - 4Wheeler</b></li>
                                            <li style={{ listStyle: "none", marginTop: "10px" }}>   The Time Attack event will have participants racing against the clock in pursuit of the fastest lap times. This high-octane challenge emphasizes precision and raw speed, making it a must-watch for any motorsport enthusiast. Feel the excitement as drivers aim for personal bests on the track.
                                            </li>

                                        </ul>



                                        <b> Sunday, August 18th, 2024</b> <br /><br />
                                        <ul>
                                            <li> <b>Drag Race - 2Wheeler</b></li>
                                            <li style={{ listStyle: "none", marginTop: "10px" }}> On Sunday, experience the rush of the 2Wheeler Drag Race, where superbikes take center stage. Riders will roar down the strip, battling fiercely against each other for the title of the fastest bike. This event promises an electrifying atmosphere filled with intense competition and raw power.

                                            </li>
                                        </ul>

                                        <ul>

                                            <li> <b>Drag Race - 4Wheeler
                                            </b></li>
                                            <li style={{ listStyle: "none", marginTop: "10px" }}> Concluding the weekend is the 4Wheeler Drag Race, showcasing high-performance cars in a straight-line duel. Watch as these automotive beasts go full throttle, demonstrating their horsepower and engineering excellence in a race for glory. It’s a thrilling spectacle you won't want to miss!

                                            </li>

                                        </ul>
                                        <ul>

                                            <li> <b> Don't Miss Out!
                                            </b></li>
                                            <li style={{ listStyle: "none", marginTop: "10px" }}> Mark your calendars for August 17th and 18th, 2024, and join us at Kari Motors Speedway for an unforgettable weekend. Whether you're a participant or a spectator, these events promise an exhilarating experience. See you at the track with Batcave Automotive and CRA Motorsports!

                                            </li>

                                        </ul>


                                    </>
                                )}
                                <span className="see-more" onClick={toggleExpanded}>{expanded ? ' See less' : ' See more'}</span></div>

                            <div className="endline3"></div>

                            <div className="body1  d-flex eventPlace">
                                <div>Event Venue</div>
                                <a
                                    href="https://www.google.com/maps/dir//Chettipalayam+Rd,+Chettipalayam,+Tamil+Nadu+641201/@10.9009641,76.9698496,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3ba85033fb3ea7d5:0x32d9fc805a023de7!2m2!1d77.0522515!2d10.9009751?entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <img src={Arrow} alt="Arrow" /> */}
                                </a>
                            </div>
                            <div className="body2">Kari Motor Speedway Chettipalayam., Coimbatore, Tamil Nadu 641201

                            </div>

                            <div className="endline3"></div>

                            <div className="body1">For Participant Queries</div>
                            <div className="body2 spiltCon ">
                                <div>Contact :  CRA Motor Sports</div>
                                <div>Phone number: 8870787324 , 7397746257 , 7397746267</div>
                            </div>

                            <div className="body1">For Spectator Queries</div>
                            <div className="body2 spiltCon ">
                                <div>Contact :  Mr. Immanuel</div>
                                <div>Phone number: 7550057267</div>
                            </div>
                            {/* {expanded && ( */}
                            {/* <> */}
                            <div className="endline3"></div>
                            <div className="body1">Attention OG Members!
                            </div>
                            <div className="body2">
                                <div className="aboutevent" >OG members can get up to 99% discount on this event! Additionally, you will also earn some special points which can be redeemed later for extraordinary discounts on various services!
                                </div>
                            </div>

                            <div className="endline3"></div>

                            <div className="body1">Points you will earn (For OG)</div>
                            <div className="body2 spiltCon " style={{ gap: "15%" }}>
                                <div>On registration - 20 points</div>
                                <div>On attending - 30 points</div>
                            </div>
                            <div className="endline3"></div>


                            <div className="body1">In Partnership with</div>


                            <div className="termsinEvent">Terms & Conditons</div>
                            <ul className="termsEvent">
                                <li>Tickets are valid for entry on August 17th and 18th, 2024 at Kari Motor Speedway.
                                </li>
                                <li>Entry is restricted to individuals with a valid ticket. Each ticket admits one person only. Tickets are non-refundable and non-transferable.
                                </li>
                                <li>Children under the age of 16 must be accompanied by an adult at all times.
                                </li>
                                <li>Weapons, illegal substances, and any items deemed dangerous by security are strictly prohibited. Attendees must comply with all instructions from event staff and security personnel.
                                </li>
                                <li>Outside food and beverages are not allowed within the venue.
                                </li>
                                <li>Any disruptive behavior may result in ejection from the venue without a refund.
                                </li>
                                <li>By entering the event, attendees consent to being photographed and filmed. These materials may be used for promotional purposes without compensation.
                                </li>
                                <li>Attendees participate at their own risk. The organizers are not responsible for any personal injury, loss, or damage to property.
                                </li>
                                <li>The event will proceed rain or shine. Refunds will not be issued due to adverse weather conditions.
                                </li>



                            </ul>


                        </div>



                    </div>
                </div>

                <div className="stickyFooter">
                    <div className="eventPriceFooter">399/- INR</div>
                    <div className='eventBtnFooter'>
                        <Button
                            color="#fff"
                            text="Register Now"
                            height="40px"
                            width="199px"
                            onClick={handleRegister}
                        >
                            < img style={{ marginLeft: "85px", zIndex: '1' }} src={Arrow} alt='Car Meets Coimbatore' />
                        </Button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default EventDescription