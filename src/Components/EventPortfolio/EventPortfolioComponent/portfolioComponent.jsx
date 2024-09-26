import './portfolioComponent.css';
import coverImgage from '../../assets/Event-transition-img.svg';

import PM1 from '../../assets/Portfolio/PM1.png';
import PM2 from '../../assets/Portfolio/PM2.png';
import BFF1 from '../../assets/Portfolio/BFF1.png';
import BFF2 from '../../assets/Portfolio/BFF2.png';

import BackArrow from '../../assets/Back-arrow.svg';
import Filter from '../../assets/filter.svg';
import Search from '../../assets/search.svg';

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import Header from '../../Header/header';
import Button from '../../Button/button';
import Pagination from '../../Pagination/pagination';

const cards = [
  {
    id: 1,
    name: "PRELAUNCH MEET",
    date: "3 April 2024 | 6 Pm to 9Pm",
    location: "HashSix Hotel, Coimbatore",
    coverImgLeft: BFF1,
    coverImgright: BFF2

  },
  {
    id: 2,
    name: "BAT FLEET FEST #1",
    date: "15th June 2024",
    location: "CSR Resort, Coimbatore",
    coverImgLeft: PM1,
    coverImgright: PM2
  }
];

const eventTypes = [
  "All",
  "Bat Fleet Fest",
  "High on Octane",
  "Ausflug",
  "Petrolheads Pettai",
  "Rodorari",
  "Gearhead Conclave"
];

const PortfolioComponent = () => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(null);
  const cardRefs = useRef([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState(cards);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState();

  const totalPages = 1;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          setVisibleCardIndex(index);
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const navigate = useNavigate();
  const navigateBack = () => navigate('/');

  const handlePortfolio = (id) => {
    navigate(`/event-portfolio/${id}`);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = cards.filter(card => card.name.toLowerCase().includes(query));
    setFilteredCards(filtered);

    if (query === '') {
      setFilteredCards(cards);
    }
  };

  const toggleFilterOptions = () => {
    setShowFilterOptions(prevState => !prevState);
    setShowSearchInput(false);
  };

  const toggleSearchInput = () => {
    setShowSearchInput(prevState => !prevState);
    setShowFilterOptions(false);
  };

const handleFilterChange = (e) => {
  const selectedType = e.target.value;
  setSelectedEventType(selectedType);  // Keep the original case

  if (selectedType.toLowerCase() === 'all') {
    setFilteredCards(cards);
  } else {
    const filtered = cards.filter(card => card.name.toLowerCase().startsWith(selectedType.toLowerCase()));
    setFilteredCards(filtered);
  }
};




  return (
    <>
      <Header />
      <div className='portfolio-component'>
        <div className="page-back-nav">
          <div onClick={navigateBack} className='portfolio-page-back'>
            <img src={BackArrow} alt='' />
            <div> <span style={{opacity:'60%'}}>Back</span> <span>|</span> <span>Event Portfolio</span></div>
          </div>

          <div className='searct-filter'>
            <div className='search-container' >
              <img src={Filter} alt='Filter' onClick={toggleFilterOptions} />
              {!showSearchInput && <img src={Search} alt='Search' onClick={toggleSearchInput} />}
            </div>

            {showSearchInput && (
              <div className="search-bar">
                <img src={Search} alt="Search Icon" className="search-icon-in-bar" />
                <input
                  type="text"
                  placeholder="Search Events"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="search-input"
                />
                <div
                  className="close-icon"
                  onClick={() => setShowSearchInput(false)}
                > X </div>
              </div>
            )}


          </div>

        </div>

        {showFilterOptions && (
          <div className='filter-dropdown'>
            <div className="form-row">
              <select
                style={{ borderBottom: 'none' }}
                id="eventType"
                value={selectedEventType}
                onChange={handleFilterChange}
              >
                {eventTypes.map((eventType, index) => (
                  <option key={index} value={eventType}>
                    {eventType}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className='portfolio-pagination'>
          <div className="portfolio-container">
            {filteredCards.length > 0 ? (
              filteredCards.map((card, index) => (
                <div
                  key={card.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`portfolio-card ${visibleCardIndex === index ? 'scrolled' : ''}`}
                >
                  <div className="image-container left-image">
                    <img src={card.coverImgLeft} alt={card.name} style={{ borderRadius: '20px' }} />
                  </div>

                  <div className="image-container right-image">
                    <img src={card.coverImgright} alt={card.name} style={{ borderRadius: '20px' }} />
                  </div>
                  <div>
                    <div className="event-content-container">
                      <h2>{visibleCardIndex === index ? card.name : ''}</h2>
                      <p>{visibleCardIndex === index ? card.date : ''}</p>
                      <p>{visibleCardIndex === index ? card.location : ''}</p>
                    </div>
                    <div className='event-portfolio-btn'>
                      <Button
                        colorA="rgba(255, 167, 68, 1)"
                        colorB="rgba(171, 48, 47, 1)"
                        text="View Details"
                        height="40px"
                        width="147px"
                        onClick={() => handlePortfolio(card.id)}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-events-message">
                No events to display
              </div>
            )}
          </div>
          <div className='port-page-container'>
            <Pagination className="pagination" totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioComponent;
