import Header from "../../Header/header";
import BackArrow from '../../assets/Back-arrow.svg';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InstaLogo from '../../assets/insta-logo.svg'
import YoutubeLogo from '../../assets/youtube-logo.svg'
import LinkedinLogo from '../../assets/linkedin-logo.svg'
import partnerlogo from '../../assets/REVNITRO LOGO.svg';
import coverImgage from '../../assets/Event-transition-img.svg';
import PM1Img from '../../assets/Portfolio/PM1.png';
import PM2Img from '../../assets/Portfolio/PM2.png';
import PM3Img from '../../assets/Portfolio/PM3.png';
import PM4Img from '../../assets/Portfolio/PM4.png';

import BFF1Img from '../../assets/Portfolio/BFF1.png';
import BFF2Img from '../../assets/Portfolio/BFF2.png';
import BFF3Img from '../../assets/Portfolio/BFF3.png';
import BFF4Img from '../../assets/Portfolio/BFF4.png';

import RevnitroLogo from '../../assets/Portfolio/Rev.svg';
import MotographicsLogo from '../../assets/Portfolio/Motographic.png';
import LotusHyundaiLogo from '../../assets/Portfolio/Hundai.png';
import Team24RacingLogo from '../../assets/Portfolio/Team-24.jpg';
import HighkeyLogo from '../../assets/Portfolio/Highkey.svg';
import MrAutomotiveLogo from '../../assets/Portfolio/Automotive.PNG';
import PacomProLogo from '../../assets/Portfolio/Pacompro.jpeg';
import PentagonAutohausLogo from '../../assets/Portfolio/Pentagon.jpeg';
import Button from "../../Button/button";


const cards = [
    {
        id: 1,
        name: "Prelaunch Meet",
        date: "3 April 2024 | 6 Pm to 9Pm",
        location: "HashSix Hotel, Coimbatore",
        attendees: 18,
        cars: 36,
        partners: 1,
        Impressions: '204.1k',
        insta: 'https://www.instagram.com/reel/C55zblNyK_q/?igsh=MXV1cmRsanFsMXJiaw==',
        images: [BFF1Img, BFF2Img, BFF3Img, BFF4Img],
        partnerLogos: [{ src: RevnitroLogo, name: "RevNitro" }]

    },
    {
        id: 2,
        name: "BAT FLEET FEST #1",
        date: "15th June 2024",
        location: "CSR Resort, Coimbatore",
        attendees: 196,
        cars: 78,
        partners: 3,
        Impressions: '449.1k',
        insta: 'https://www.instagram.com/reel/C8bzTfpSD9j/?igsh=MTVjNmYyNjdoam1lbA%3D%3D',
        youtube: 'https://youtu.be/oEhyVEjVvyA?si=FqEEABORrGnlTPaw',
        images: [PM1Img, PM2Img, PM3Img, PM4Img],

        partnerLogos: [
            { src: RevnitroLogo, name: "RevNitro" },
            { src: MotographicsLogo, name: "Motographics" },
            { src: LotusHyundaiLogo, name: "Lotus Hyundai" },
            { src: Team24RacingLogo, name: "Team 24 Racing" },
            { src: HighkeyLogo, name: "Highkey" },
            { src: MrAutomotiveLogo, name: "Mr Automotive" },
            { src: PacomProLogo, name: "Pacom Pro" },
            { src: PentagonAutohausLogo, name: "Pentagon Autohaus" }
        ]
    }
];


const DisplayPortfolio = () => {
    const navigate = useNavigate();

    const { cardId } = useParams();
    const [card, setCard] = useState(null);

    const navigateBack = () => {
        navigate('/event-portfolio')
    }

    useEffect(() => {
        // Find the event from the list
        const selectedCard = cards.find(card => card.id === parseInt(cardId));
        setCard(selectedCard || {});
    }, [cardId]);

    if (!card || !card.name) {
        return <div>Loading...</div>;
    }


    return (
        <>

            <div className="disply-portfolio">

                <Header />
                <div className="display-portfolio-container">

                    <div>

                        <div className="page-back-nav" onClick={navigateBack}>
                            <img src={BackArrow} alt='Batcave Car Club' />
                            <div> <span style={{opacity:'60%'}}>Back</span> <span>|</span> <span>Event Portfolio</span></div>

                        </div>

                        <div className="DPortfolio-component">
                            <div className="event-content">
                                <h2>{card.name}</h2>
                                <p>{card.date}</p>
                                <p>{card.location}</p>
                            </div>

                            <div className="attendeesBox">
                                <div>
                                    <p>{card.attendees}</p>
                                    <p>Attendees</p>

                                </div>
                                <div>
                                    <p>{card.cars}</p>
                                    <p>Cars</p>

                                </div>
                                <div>
                                    <p>{card.partners}</p>
                                    <p>Ft. Partners</p>

                                </div>
                                <div>
                                    <p>{card.Impressions}</p>
                                    <p>Impressions</p>

                                </div>
                            </div>

                            <div className="event-highlights">
                                <div className="event-highlights-title">Event Highlights</div>
                                <div className="media-logo">
                                    {card.insta && (
                                        <>
                                            <a href={card.insta} target="_blank" rel="noopener noreferrer">
                                                <img src={InstaLogo} alt="Best Car Club" />
                                            </a>
                                            {(card.youtube || card.linkedin) && <span>|</span>}
                                        </>
                                    )}
                                    {card.youtube && (
                                        <>
                                            <a href={card.youtube} target="_blank" rel="noopener noreferrer">
                                                <img src={YoutubeLogo} alt="Car Club In India" />
                                            </a>
                                            {card.linkedin && <span>|</span>}
                                        </>
                                    )}
                                    {card.linkedin && (
                                        <a href={card.linkedin} target="_blank" rel="noopener noreferrer">
                                            <img src={LinkedinLogo} alt="Batcave Automotive " />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="event-highlights">
                                <div className="event-highlights-title">Guests & Sponsors</div>

                                {/* <div className="partner-logo">
                                    <img src={partnerlogo} alt="" />
                                    <div className="tooltip">Revnitro</div>
                                </div> */}

                                <div className="partner-logos-container">
                                    {card.partnerLogos && card.partnerLogos.map((logo, index) => (
                                        <div className="partner-logo" key={index}>

                                            <img src={logo.src} alt={`Partner ${index + 1}`} />
                                            <div className="tooltip">{logo.name}</div>

                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>


                    </div>


                    <div className="event-img-container">
                        {card.images.map((image, index) => (
                            <img key={index} src={image} alt={`Event Image ${index + 1}`} width={300} height={400} />
                        ))}
                    </div>


                </div>
            </div>

        </>
    )
}

export default DisplayPortfolio;