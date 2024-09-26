import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import SuccessImg from '../assets/contact-success-img.svg';
import Arc from '../assets/ContactArc.svg';
import Img1 from '../assets/Contact1.svg';
import Img2 from '../assets/Contact2.svg';
import Img3 from '../assets/Contact3.svg';
import Arrow from '../assets/contact-arrow.svg';
import Insta from '../assets/Insta.svg';
import Email from '../assets/Email.svg';
import Linkedin from '../assets/Linkedin.svg';
import Youtube from '../assets/youtube.svg';
import './contact.css'
import Button from '../Button/button';
import InstaAni from '../IconsAnimation/instagram.json'
import InstaIcon from '../IconsAnimation/instagram.svg'
import { BASE_URL } from '../../utils/ApplicationURL'




const ContactForm = () => {

    const navigate = useNavigate();


    const [focusedFields, setFocusedFields] = useState({});
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleFocus = (e) => {
        setFocusedFields({
            ...focusedFields,
            [e.target.name]: true,
        });
    };

    const handleBlur = (e) => {
        setFocusedFields({
            ...focusedFields,
            [e.target.name]: false,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            // const response = await axios.post(`${BASE_URL}/api/contact`, formData);

            // console.log('Form submitted:', response.data);
            setShowSuccessPopup(true);
            setFormData({
                fullName: '',
                mobileNumber: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            // Optionally, handle error feedback to the user here
        }
    };

    const closePopup = () => {
        setShowSuccessPopup(false);

    }

    const navigateBlog = () => {
        navigate('/blogs')
    }



    return (
        <>

            <div className="Contact-container">

                <div className="Contact-left-container">
                    <div className='contact-title' >
                        Contact us
                    </div>


                    <div className='contact-image-container'>
                        <div>

                            <img src={Arc} alt='' />

                        </div>

                        <div style={{ display: 'flex' }}>

                            <div className='contact3-container'>
                                <img src={Img3} alt='' />

                            </div>
                            <div className='contact1-container'>
                                <img src={Img1} alt='' />

                            </div>
                            <div className='contact2-container'>
                                <img src={Img2} alt='' />

                            </div>

                        </div>



                    </div>
                </div>

                <div className='Contact-right-container'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">

                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                            <label className={focusedFields['fullName'] || formData.fullName ? 'focused' : ''}>Full Name</label>

                        </div>

                        <div className='DiRow'>
                            <div className="form-row">
                                <input
                                    type="tel"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    onChange={handleChange}
                                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                    required
                                />
                                <label className={focusedFields['mobileNumber'] || formData.mobileNumber ? 'focused' : ''}>Mobile Number</label>

                            </div>

                            <div className="form-row">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label className={focusedFields['email'] || formData.email ? 'focused' : ''}>Email ID</label>

                            </div>
                        </div>

                        <div className="form-row">
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required

                            >
                                <option value="" disabled hidden></option>
                                <option value="membership">Membership</option>
                                <option value="sponsorship">Sponsorship</option>
                                <option value="business">Business</option>
                                <option value="others">Others</option>
                            </select>
                            <label
                                htmlFor="subject"
                                className={focusedFields['subject'] || formData.subject ? 'focused' : ''}
                            >
                                Subject
                            </label>
                        </div>

                        <div className="form-row">

                            <input
                                id="message"
                                name="message"
                                rows="4"
                                cols="50"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                            <label className={focusedFields['message'] || formData.message ? 'focused' : ''}>Message</label>

                        </div>

                        <div className='contact-btn'>
                            <Button
                                colorA="rgba(184, 147, 1, 1)"
                                colorB="rgba(235, 220, 15, 1)"
                                text="Send message"
                                height="40px"
                                width="189px"
                            >
                                <img src={Arrow} alt='' />
                            </Button>
                        </div>

                       
                    </form>
                </div>
            </div>

            <div className='contact-info'>
                <div className='info-title'>Want to Reach Us Faster?</div>
                <div className='info-content-title'>For immediate assistance, feel free to contact us directly:</div>
                <div className='info-enquiry'>
                    <div> For Membership Enquiries: <a href="tel:7550057267">7550057267</a> </div><span>|</span>
                    <div>  For Business Enquiries: <a href="tel:8877880101">8877880101</a> </div><span>|</span>
                    <div> For Partnership Enquiries: <a href="tel:9150043778">9150043778</a> </div>
                </div>

                <div className='info-content-title'>Social Profiles</div>

                <div className='socialIcons'>
                    <div>
                        <a href="https://instagram.com/batcave.club" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                            <img src={Insta} alt='Instagram' animationData={InstaAni} style={{ marginRight: '8px' }} />
                            <div>batcave.club</div>
                        </a>
                    </div>
                    <span style={{ margin: '0 15px' }}>|</span>

                    <div>
                        <a href="mailto:info@batcave.club" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                            <img src={Email} alt='Email' style={{ marginRight: '8px' }} />
                            <div>info@batcave.club</div>
                        </a>
                    </div>
                    <span style={{ margin: '0 15px' }}>|</span>

                    <div>
                        <a href="https://linkedin.com/company/batcave-automotive" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                            <img src={Linkedin} alt='LinkedIn' style={{ marginRight: '8px' }} />
                            <div>Batcave Automotive</div>
                        </a>
                    </div>
                    <span style={{ margin: '0 15px' }}>|</span>

                    <div>
                        <a href="https://youtube.com/c/batcaveautomotive" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                            <img src={Youtube} alt='YouTube' style={{ marginRight: '8px' }} />
                            <div>Batcave Automotive</div>
                        </a>
                    </div>
                    {/* <span style={{ margin: '0 15px' }}>|</span> */}
                </div>

                {/* <div className='other-actions'>
                    <div>Other Actions</div>
                    <span style={{ margin: '0 15px' }}>|</span>
                    <div>Originals</div>
                    <span style={{ margin: '0 15px' }}>|</span>
                    <div onClick={navigateBlog}>Blog</div>
                </div> */}


            </div>

            {showSuccessPopup && (
                <div className='contact-popup-overlay'>

                    <div className='contact-success-popup'>
                        <div className='contact-success-cancel-mobile' onClick={closePopup}>X</div>

                        <div className='contact-success-content'>
                            <div> Message sent successfully</div>
                            <div>We received your message! Our team is working on it. You will receive a response from our team within next 24 hours</div>
                            <div>Thank You</div>
                        </div>
                        <div>
                            <div className='contact-success-cancel' onClick={closePopup}>X</div>
                            <img src={SuccessImg} alt='' />
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}

export default ContactForm;