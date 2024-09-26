import Button from "../../Button/button";
import Header from "../../Header/header";
import BackArrow from '../../assets/Back-arrow.svg';
import DisplayImg from '../../assets/ticket-display-img.svg';
import { useNavigate, useParams, useSearchParams, useLocation } from 'react-router-dom';
import Arrow from '../../assets/download-icon.svg';
import EventTicketComponent from "../../TicketComponent/ticketComponent";
import TicketLogo from '../../assets/Ticket-logo.svg';
import TicketQR from '../../assets/Ticket-qr.svg';


const EventTicketDisplay = () => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/')
    }


    return (
        <>
            <Header />
            <div className="Event-ticket-component">

                <div className="page-back-nav" onClick={navigateBack}>
                    <img src={BackArrow} alt='Car gathering Coimbatore' />
                    <div>Back to home</div>
                </div>

                <div className="ticket-container ">
                    <div className="ticket-container-left">

                        <img src={DisplayImg} alt="Car gathering Tamil Nadu" height={371} width={371} />
                        <div className="query-div">For Queries</div>
                        <div className="ticket-query">
                            <div>Contact :  Mr. Soris</div>
                            <div>Phone number: 812-375-9100</div>
                        </div>

                    </div>
                    <div className="ticket-container-right">
                        <div className="ticket-event-name">KMS speed fest 2024</div>
                        <div className="ticket-event-date">17th - 18th Aug ‘24, [3P | 2V]</div>

                        <div className="ticket-component">

                            <div className='ticket ticket-blue-event'>
                                <div className='ticket-content'>
                                    <div className='ticket-left-event'>
                                        <div className='ticket-left-text-event'>
                                            <div className='left-content-ticket'>
                                                <div style={{ fontSize: '6px', opacity: '60%' }}>Coimbatore</div>
                                                <span>Ticket ID - BCNFF24 - 28</span>
                                            </div>
                                            <div className='ticket-header-logo'>
                                                <img src={TicketLogo} alt='Car networking coimbatore' />
                                                <img src={TicketQR}  alt='Car Networking Tamil Nadu' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ticket-right-event'>
                                        <div className='ticket-header-event'>
                                            <img src={TicketLogo} alt='Best Car Shows Tamil Nadu' />
                                            <img src={TicketQR} alt='Best Car Shows Coimbatore' />
                                        </div>
                                        <div className='ticket-id-event'>Ticket ID - BCNFF24 - 28</div>
                                        <div className='ticket-details'>
                                            <div>Sanjeev</div>
                                            <div>91#######04</div>
                                            <div style={{ opacity: '60%', fontFamily: 'Space Grotesk' }}>3P / 2V</div>
                                            <div>₹ 1##0</div>
                                            <div style={{ fontSize: '10px', opacity: '60%' }}>1st Nov 2#, 06:00 PM to 09:00 PM</div>
                                            <div style={{ fontSize: '10px', opacity: '60%' }}>Coimbatore</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='event-ticket-btn'>
                            <Button
                                color="#fff"
                                text="Download ticket"
                                height="40px"
                                width="216px"
                            // onClick={handleRegister}
                            >
                                < img style={{ marginLeft: "80px", zIndex: '1' }} src={Arrow} alt='Kart racing Experience Coimbatore' />
                            </Button>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default EventTicketDisplay;