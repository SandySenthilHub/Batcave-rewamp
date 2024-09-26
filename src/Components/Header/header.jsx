import React, { useEffect, useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import BatcaveLogo from '../assets/BatcaveLogo.svg';
import MenuIcon from '../assets/menu-icon.svg';
import MusicImgPhone from '../assets/MusicImgPhone.svg';
import MusicImg from '../assets/MusicImg.svg';
import MusicPaused from '../assets/music_paused.svg'; // Assuming MusicPaused is an SVG file
import { useNavigate } from 'react-router-dom';
import './header.css';
import Button from '../Button/button';
import BackgroundMusic from '../assets/videoplayback.mp3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // Initially not playing
    const audioRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        audioRef.current = new Audio(BackgroundMusic);
        audioRef.current.loop = true;
    }, []);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play()
                    .then(() => {
                        console.log('Music playing');
                    })
                    .catch((error) => {
                        console.error('Error playing audio:', error);
                    });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const navigateHome = () => {
        navigate('/')
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    const handleLogin = () => {
        toast.error('Coming Soon !', {
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
        <header className="header">
            <div className="header-container">
                <div className="logo" onClick={navigateHome}>
                    <img src={BatcaveLogo} alt="Kart Racing Experience" />
                </div>

                <div className="header-right">
                    {/* Conditionally render the music icon based on the isPlaying state */}
                    <img
                        src={isPlaying ? MusicImg : MusicPaused}
                        alt="Best Kart racing Coimbatore"
                        className="music-logo"
                        // className={`music-logo ${isPlaying ? 'moving' : ''}`}  
                        onClick={toggleMusic}
                    />
                    <img
                        src={isPlaying ? MusicImgPhone : MusicPaused}
                        alt="Road Trips Club in Coimbatore"
                        className="music-logo-phone"
                        // className={`music-logo-phone ${isPlaying ? 'moving' : ''}`} 
                        onClick={toggleMusic}
                    />

                    <div className='login-btn'>
                        <Button
                            color="#fff"
                            text="Log in"
                            height="40px"
                            width="90px"
                            onClick={handleLogin}
                        />
                    </div>

                    <img src={MenuIcon} alt="Car Events Coimbatore" className="menu-icon" onClick={toggleMenu} />

                </div>
            </div>
            {menuOpen && <div className={`blur-overlay ${menuOpen ? 'active' : ''}`}>
                <div className={`side-menu ${menuOpen ? 'active' : ''}`}>
                    <button className="close-btn" onClick={toggleMenu}>×</button>
                    <ul>
                        <li>
                            <Link to="/#home" onClick={toggleMenu}>Home</Link>
                        </li>                        <li>
                            <Link to="/#our-events" onClick={toggleMenu}>Our Events</Link>
                        </li>
                        <li>
                            <Link to="/#our-plans" onClick={toggleMenu}>Our Plans</Link>
                        </li>
                        <li>
                            <Link to="/#portfolio" onClick={toggleMenu}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/#contact-us" onClick={toggleMenu}>Contact Us</Link>
                        </li>
                    </ul>
                    <div className='login-btn-mobile'>
                        <Button
                            color="#fff"
                            text="Log in"
                            height="40px"
                            width="90px"
                            onClick={handleLogin}

                        />
                    </div>
                </div>
            </div>}

            <ToastContainer />

        </header>
    );
};

export default Header;
