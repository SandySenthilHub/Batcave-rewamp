import React, { useState } from 'react';
import './home.css';
import Header from '../Header/header';
import EventSection from '../EventSection/Event';
import LandingPage from '../LandingPage/landingPage';
import Membership from '../Membership/membership';
import EventPortfolio from '../EventPortfolio/eventPortfolio';
import ContactForm from '../Contact/contact';
import Footer from '../Footer/footer';
import PlanComponent from '../Membership/membership-plan-Component/plan-component';
import Button from '../Button/button';
import XceleratorForm from '../Membership/RegistrationForm/xceleratorForm';
import IgnitionForm from '../Membership/RegistrationForm/IgnitionForm';
import EventDisplay from '../EventSection/EventRegistration/eventDisplay';
import EventTicketComponent from '../TicketComponent/ticketComponent';
import Scrollbar from '../LandingPage/scrollbar';
import EventTicketDisplay from '../EventSection/EventRegistration/eventTicketDisplay';
import ProgressBar from '../Progressbar/progressBar';
import CustomPaymet from '../customPaymet/customPayment';
import Poll from '../Poll/poll';
import Blog from '../Blog/blog';
import BlogContent from '../Blog/blogContent';

const Home = () => {


    return (
        <div className='HomeSections'>

            <Header />

            <div >
                <ProgressBar />

                <div className="main-container">
                    <div id='home'>
                    <LandingPage />

                    </div>

                    <section id="our-events" >
                        <EventSection />
                    </section>

                    <section id="our-plans" >
                        <Membership />
                    </section>

                    <section id="portfolio">
                        <EventPortfolio />
                    </section>

                    <section id="contact-us">
                        <ContactForm />
                    </section>

                    <Footer />

                </div>



            </div>



            {/* Testing */}
            {/* <EventTicketComponent/> */}
            {/* <PlanComponent/> */}
            {/* <Button/> */}
            {/* <XceleratorForm/> */}
            {/* <IgnitionForm/> */}
            {/* <EventTicketDisplay/> */}
            {/* <CustomPaymet /> */}
            {/* <Poll/> */}
            {/* <Blog/> */}





        </div >
    );
};

export default Home;
