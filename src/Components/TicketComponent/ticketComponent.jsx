import React, { useEffect, useRef, useState } from 'react';
import './ticketcom.css';
import TicketLogo from '../assets/Ticket-logo.svg';
import TicketQR from '../assets/Ticket-qr.svg';
import { motion } from 'framer-motion';

const EventTicketComponent = () => {
  const [rotate, setRotate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRotate(true);
        } else {
          setRotate(false);
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

  return (
    <div className='ticket-new' ref={sectionRef}>
      <motion.div
        animate={{ rotate: rotate ? -30.1 : 0 }}
        transition={{ duration: 0.3, ease: 'linear' }}
        className='ticket ticket-blue'
      >
        <div className='ticket-content'>
          <div className='ticket-left'>
            <div className='ticket-left-text'>
              <div className='left-content-ticket'>
                <div style={{ fontSize: '6px', opacity: '60%' }}>Coimbatore</div>
                <span>Ticket ID - BCNFF24 - 28</span>
              </div>
              <div className='ticket-header-logo'>
                <img src={TicketLogo} alt='Logo' />
                <img src={TicketQR} alt='QR' />
              </div>
            </div>
          </div>
          <div className='ticket-right'>
            <div className='ticket-header'>
              <img src={TicketLogo} alt='Logo' />
              <img src={TicketQR} alt='QR' />
            </div>
            <div className='ticket-id'>Ticket ID - BCNFF24 - 28</div>
            <div className='ticket-details'>
              <div>Sanjeev</div>
              <div>91#######04</div>
              <div style={{ opacity: '60%', fontFamily: 'Space Grotesk' }}>3P / 2V</div>
              <div>₹ 1##0</div>
              <div className='ticket-date'>1st Nov 2#, 06:00 PM to 09:00 PM</div>
              <div className='ticket-date'>Coimbatore</div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ rotate: rotate ? -30.1 : 0 }}
        transition={{ duration: 0.3, ease: 'linear' }}
        className='ticket ticket-red'
      >
        <div className='ticket-content'>
          <div className='ticket-left'>
            <div className='ticket-left-text'>
              <div className='left-content-ticket'>
                <div style={{ fontSize: '6px', opacity: '60%' }}>Coimbatore</div>
                <span>Ticket ID - BCNFF24 - 07</span>
              </div>
              <div className='ticket-header-logo'>
                <img src={TicketLogo} alt='Logo' />
                <img src={TicketQR} alt='QR' />
              </div>
            </div>
          </div>
          <div className='ticket-right'>
            <div className='ticket-header'>
              <img src={TicketLogo} alt='Logo' />
              <img src={TicketQR} alt='QR' />
            </div>
            <div className='ticket-id'>Ticket ID - BCNFF24 - 07</div>
            <div className='ticket-details'>
              <div>Baradhi</div>
              <div>91#######00</div>
              <div style={{ opacity: '60%', fontFamily: 'Space Grotesk' }}>3P / 3V</div>
              <div>₹ 1##0</div>
              <div className='ticket-date'>1st Nov 2#, 06:00 PM to 09:00 PM</div>
              <div className='ticket-date'>Coimbatore</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventTicketComponent;
