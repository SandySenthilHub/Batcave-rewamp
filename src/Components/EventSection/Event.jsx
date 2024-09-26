import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './event.css'
import EventTicketComponent from '../TicketComponent/ticketComponent';
import { motion } from 'framer-motion'
import TicketBlue from '../assets/ticket-blue.svg'
import TicketRed from '../assets/ticket-red.svg'

import Ausflug from '../assets/Ausflug-event.svg';
import BFF from '../assets/BFF-event.svg';
import GC from '../assets/GC-event.svg';
import HOO from '../assets/HOO-event.svg';
import PHP from '../assets/PHP-event.svg';
import TTT from '../assets/TTT-event.svg';
import Rodorary from '../assets/Rodorary-event.svg';

import GCARC from '../assets/GC-arc.svg';
import HOOARC from '../assets/HOC-arc.svg';
import TTTARC from '../assets/TTT-arc.svg';
import PHPARC from '../assets/PHP-arc.svg';
import RodoraryArc from '../assets/Rodorary-arc.svg';
import AusflugArc from '../assets/Ausflug-arc.svg';
import { useRef } from 'react';
import Button from '../Button/button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EventSection() {

  const navigate = useNavigate();

  const [showContainer, setShowContainer] = useState(false);
  const [rotate, setRotate] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // const handleEvent = () => {
  //   navigate('/event')
  // }

  const handleEvent = () => {
    toast.error('No Events Right Now !', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: false,
      closeButton: false,
      className: 'custom-toast'
    });
  };

  return (
    <>

      <div ref={sectionRef} className='EventsSection'>
        <div className='event-title'>batcave EVENTS</div>
        <div>
          <div className={`event-container ${showContainer ? 'show' : ''}`}>

            {showContainer && (
              <div className={`left-event-logos ${showContainer ? 'show' : ''}`}>

                <div className='Regional-meet'>
                  <div className='event-pointer'>
                    <img className='arc' src={GCARC} alt='' />
                    <div className='event-logo-title regional'>Regional Meet</div>

                  </div>
                  <img src={GC} alt='' />
                </div>


                <div className='Track-Event'>
                  <div className='event-pointer'>
                    <div className='event-logo-title'>Track Event</div>
                    <img className='arc' src={HOOARC} alt='' />
                  </div>
                  <img src={HOO} alt='' />
                </div>


                <div className='Off-Roading'>
                  <div className='event-pointer'>
                    <div className='event-logo-title'>Off-Roading</div>
                    <img className='arc' src={TTTARC} alt='' />

                  </div>
                  <img src={TTT} alt='' />

                </div>
              </div>
            )}

            <div className='Ticket-component'>
              <EventTicketComponent />

              {/* <motion.div
                className='ticket-1'
                animate={{ rotate: rotate ? 30.01 : 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                <img src={TicketBlue} alt='' />
              </motion.div>
              <motion.div className='ticket-2'
                animate={{ rotate: rotate ? 30.01 : 0 }}
                transition={{ duration: 0.3, ease: "linear" }}

              >
                <img src={TicketRed} alt='' />
              </motion.div> */}


            </div>

            {showContainer && (

              <div className={`right-event-logos ${showContainer ? 'show' : ''}`}>

                <div className='Road-Trip'>
                  <div className='event-pointer'>
                    <img className='arc' src={AusflugArc} alt='' />
                    <div>
                      <div className='event-logo-title'>Road Trip</div>
                      <img src={Ausflug} alt='' />
                    </div>
                  </div>
                </div>


                <div className='Intercity-Meet'>
                  <div className='event-pointer'>
                    <img className='arc' src={HOOARC} alt='' />
                    <div>
                      <div className='event-logo-title'>Intercity Car Meet</div>
                      <img src={BFF} alt='' />
                    </div>
                  </div>
                </div>

                <div className='Rally'>
                  <div className='event-pointer'>
                    <img className='arc' src={RodoraryArc} alt='' />
                    <div>
                      <div className='event-logo-title'>Rally</div>
                      <img src={Rodorary} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
          <div className='event-footer'>
            {showContainer && (

              <div className={`Zonal-Meetup ${showContainer ? 'show' : ''}`}>

                <div className='event-pointer'>

                  <div className='event-logo-title'>Zonal Meetup</div>
                  <img className='arc' src={PHPARC} alt='' />
                </div>
                <img src={PHP} alt='' />
              </div>
            )}


          </div>



        </div>
        <div className='event-btn'>
          <Button
            colorA="rgba(0, 212, 255, 1)"
            colorB="rgba(9, 9, 121, 1)"
            height="40px"
            width="216px"
            text="View upcoming events"
            onClick={handleEvent}

          />
        </div>




      </div>
      <ToastContainer />


    </>
  );
}

export default EventSection;