import "./App.css";
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Button from "./Components/Button/button";
import IgnitionForm from "./Components/Membership/RegistrationForm/IgnitionForm";
import XceleratorForm from "./Components/Membership/RegistrationForm/xceleratorForm";
import EventDisplay from "./Components/EventSection/EventRegistration/eventDisplay";
import EventDescription from "./Components/EventSection/EventRegistration/eventDescription";
import EventRegistrationForm from "./Components/EventSection/EventRegistration/eventRegistrationForm";
import EventTicketDisplay from "./Components/EventSection/EventRegistration/eventTicketDisplay";
import CustomCursor from "./Components/CustomCursor/customCursor";
import FAQ from "./Components/Footer/FooterPages/faq";
import RefundPolicy from "./Components/Footer/FooterPages/refundPolicy";
import PrivacyPolicy from "./Components/Footer/FooterPages/privacy";
import TermsConditions from "./Components/Footer/FooterPages/terms";
import PortfolioComponent from "./Components/EventPortfolio/EventPortfolioComponent/portfolioComponent";
import DisplayPortfolio from "./Components/EventPortfolio/EventPortfolioComponent/displayPortfolio";
import BlogContent from "./Components/Blog/blogContent";
import Blog from "./Components/Blog/blog";
import Poll from "./Components/Poll/poll";
import CustomPaymet from "./Components/customPaymet/customPayment";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <CustomCursor /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration-form-ii" element={<IgnitionForm />} />
          <Route path="/registration-form-XR" element={<XceleratorForm />} />
          <Route path="/event" element={<EventDisplay />} />
          <Route path="/event-details/:eventId" element={<EventDescription />} />
          <Route path="/event-form/:eventId" element={<EventRegistrationForm />} />
          <Route path="/event-ticket" element={<EventTicketDisplay />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/t&c" element={<TermsConditions />} />
          <Route path="/event-portfolio" element={<PortfolioComponent />} />
          <Route path="/event-portfolio/:cardId" element={<DisplayPortfolio />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:blogId" element={<BlogContent />} />
          <Route path="/poll" element={<Poll />} />
          <Route path="/payment/:hex" element={<CustomPaymet />} />






        </Routes>
      </div>
    </Router>
  );
}

export default App;
