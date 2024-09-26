import BackArrow from '../../assets/Back-arrow.svg';
import XRLogo from '../../assets/xcelerator-logo.svg';
import XRcard from '../../assets/XR-plan.svg';
import React, { useEffect, useState } from 'react';
import Arrow from '../../assets/contact-arrow.svg';
import axios from 'axios';
import { useNavigate, useParams, useSearchParams, useLocation } from 'react-router-dom';
import Button from '../../Button/button';
import Header from '../../Header/header';

const events = [
    {
        id: 1,
        name: "KMS SPeed Fest 2024",
        date: "17th - 18th Aug 2024 | 10 PM - 6 PM",
        location: "Kari motor speedway, Coimbatore",

    },
    {
        id: 2,
        name: "bAT FLEET Fest #2",
        date: "25th - 26th Sep 2024 | 9 AM - 5 PM",
        location: "XYZ Arena, Chennai",

    },
    {
        id: 3,
        name: "bAT FLEET Fest #3",
        date: "25th - 26th Sep 2024 | 9 AM - 5 PM",
        location: "XYZ Arena, Chennai",

    },
    {
        id: 4,
        name: "bAT FLEET Fest #4",
        date: "25th - 26th Sep 2024 | 9 AM - 5 PM",
        location: "XYZ Arena, Chennai",

    },

];


const EventRegistrationForm = () => {

    const navigate = useNavigate();

    const [focusedFields, setFocusedFields] = useState({});
    const [error, setError] = useState('');
    const [errordob, setErrordob] = useState('');

    const { eventId } = useParams();
    const [event, setEvent] = useState(null);



    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        mobileNumber: '',
        email: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
        Reference: '',
        personsCount: 1,
        carCount: 0
    });

    useEffect(() => {
        // Find the event from the list
        const selectedEvent = events.find(event => event.id === parseInt(eventId));
        setEvent(selectedEvent || {});
    }, [eventId]);

    if (!event || !event.name) {
        return <div>Loading...</div>;
    }

    const checkUserExists = async (field, value) => {
        try {
            // Validate the field parameter
            if (field !== 'email' && field !== 'mobileNumber') {
                throw new Error('Invalid field parameter');
            }

            // const response = await axios.get(`${BASE_URL}/api/checkUserExists?field=${field}&value=${value}`);
            const response = await axios.get(`http://localhost:5000/api/checkUserExists?field=${field}&value=${value}`);


            return response.data.exists; // Assuming the API returns an object with a boolean property 'exists'
        } catch (error) {
            console.error(`Error checking ${field} existence:`, error);
            return false; // Default to false if there's an error
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Clear error message for the current field
        setError('');

        const formatDOB = (value) => {
            // Remove non-numeric characters
            const cleanedValue = value.replace(/\D/g, '').slice(0, 8);

            // Extract day, month, and year parts
            let day = cleanedValue.slice(0, 2);
            let month = cleanedValue.slice(2, 4);
            let year = cleanedValue.slice(4, 8);

            // Combine parts into the final format
            let formattedValue = day;
            if (month) {
                formattedValue += '/' + month;
            }
            if (year) {
                formattedValue += '/' + year;
            }

            return formattedValue;
        };

        if (name === 'dob') {
            const formattedValue = formatDOB(value);

            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: formattedValue
            }));

            // Validate DOB format
            const [day, month, year] = formattedValue.split('/');
            if (day && month && year) {
                if (!/^\d{1,2}$/.test(day) || !/^(0?[1-9]|1[0-2])$/.test(month) || !/^19\d{2}|20\d{2}$/.test(year)) {
                    setErrordob('Invalid date of birth format. ');
                } else if (day > 31 || month > 12) {
                    setErrordob('Invalid date of birth. Day must be between 1-31 and month must be between 1-12.');
                } else {
                    // Calculate age based on the provided date of birth
                    const dobDate = new Date(`${year}-${month}-${day}`);
                    const ageDiffMs = Date.now() - dobDate.getTime();
                    const ageDate = new Date(ageDiffMs);
                    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

                    // Check if age is below 15
                    if (age < 15) {
                        setErrordob('Age must be above 15');
                    } else {
                        setErrordob('');
                    }
                }
            } else {
                setErrordob('Invalid date of birth format. Please use DD/MM/YYYY.');
            }


        } else if (name === 'mobileNumber') {
            const numericValue = value.replace(/\D/g, '').slice(0, 10);
            setFormData({ ...formData, [name]: numericValue });
        } else if (name === 'pincode') {
            const numericValue = value.replace(/\D/g, '').slice(0, 6);
            setFormData({ ...formData, [name]: numericValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    const handleBlur = async (e) => {
        const { name, value } = e.target;
        let errorMessage = '';

        if (value === '') {
            switch (name) {
                case 'fullName':
                    errorMessage = 'Please enter your Name';
                    break;
                case 'email':
                    errorMessage = 'Please enter your Email Id';
                    break;
                case 'mobileNumber':
                    errorMessage = 'Please enter your mobile number';
                    break;
                case 'dob':
                    errorMessage = 'Please enter your date of birth';
                    break;
                case 'address':
                    errorMessage = 'Please enter your Address';
                    break;
                case 'pincode':
                    errorMessage = 'Please enter your Pincode';
                    break;
                case 'state':
                    errorMessage = 'Please select your State';
                    break;
                case 'city':
                    errorMessage = 'Please select your City';
                    break;
                case 'Reference':
                    errorMessage = 'Please select anyone of these';
                    break;
                default:
                    errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
            }
        } else {
            switch (name) {
                case 'fullName':
                    if (/\d/.test(value)) {
                        errorMessage = 'Name cannot contain numbers';
                    }
                    break;
                case 'email':
                    if (!/\S+@\S+\.\S+/.test(value)) {
                        errorMessage = 'Invalid email address';
                    } else {
                        const exists = await checkUserExists(name, value);
                        if (exists) {
                            errorMessage = 'Email already exists. Please use a different email.';
                        }
                    }
                    break;
                case 'mobileNumber':
                    if (value.length !== 10) {
                        errorMessage = 'Mobile number must be 10 digits';
                    } else {
                        const exists = await checkUserExists(name, value);
                        if (exists) {
                            errorMessage = 'Mobile number already exists. Please use a different number.';
                        }
                    }
                    break;
                case 'pincode':
                    if (value.length !== 6) {
                        errorMessage = 'Pincode must be 6 digits';
                    }
                    break;
                default:
                    break;
            }
        }

        setError((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
    };


    const handleIncrement = (field) => {
        if (formData[field] < 10) {
            setFormData({ ...formData, [field]: formData[field] + 1 });
        }
    };

    const handleDecrement = (field) => {
        if (formData[field] > 0) {
            setFormData({ ...formData, [field]: formData[field] - 1 });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted successfully:', formData);
    };

    const navigateBack = () =>{
        navigate(`/event-details/${event.id}`)
    }


    return (
        <>
            <Header />

            <div className="event-form-container">



                <div className="page-back-nav" onClick={navigateBack}>
                    <img src={BackArrow} alt='' />
                    <div >Back <span>|</span> <span>{event.name}</span></div>
                </div>

                <div className='xceleratorm-form'>
                    <div className='xceleratorm-form-left'>

                        <form onSubmit={handleSubmit}>


                            <div className="form-row">

                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required


                                />
                                <label className={focusedFields['fullName'] || formData.fullName ? 'focused' : ''}>Full Name *</label>
                                {error.fullName && <p style={{ color: 'red', fontSize: "10px" }}>{error.fullName}</p>}

                            </div>



                            <div className="form-row">

                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label className={focusedFields['mobileNumber'] || formData.mobileNumber ? 'focused' : ''}>Mobile Number *</label>
                                {error.mobileNumber && <p style={{ color: 'red', fontSize: "10px" }}>{error.mobileNumber}</p>}

                            </div>
                            <div className="form-row">

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label className={focusedFields['email'] || formData.email ? 'focused' : ''}>Email ID *</label>
                                {error.email && <p style={{ color: 'red', fontSize: "10px" }}>{error.email}</p>}

                            </div>

                            <div className="event-count">
                                <div className="person-count-selector">
                                    <div >
                                        <label className="label">
                                            <span className="char tikchar labelID">Number of people</span>
                                        </label>
                                        <div className="selector-Container">
                                            <button
                                                type="button"
                                                onClick={() => handleDecrement('personsCount')}
                                                disabled={formData.personsCount === 1}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                value={formData.personsCount}
                                                onChange={handleChange}
                                                name="personsCount"
                                                min={1}
                                                max={10}
                                                required
                                                readOnly
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleIncrement('personsCount')}
                                                disabled={formData.personsCount === 10}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="vehicle-count-selector d-flex">
                                    <div >
                                        <label className="label">
                                            <span className="char tikchar labelID">No. of cars</span>
                                        </label>
                                        <div className="selector-Container">
                                            <button
                                                type="button"
                                                onClick={() => handleDecrement('carCount')}
                                                disabled={formData.carCount === 0}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                value={formData.carCount}
                                                onChange={handleChange}
                                                name="carCount"
                                                min={0}
                                                max={10}
                                                required
                                                readOnly
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleIncrement('carCount')}
                                                disabled={formData.carCount === 10}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>

                    </div>

                    <div className='xceleratorm-form-right' style={{ background: "none" }}>
                        <div>
                            <img src={XRLogo} alt='' />

                            <div className='checkout-row Cfirst' style={{ marginTop: '0' }}>
                                <div>Coimbatore</div>

                            </div>

                            <div className='checkoutSummary'>Checkout summary</div>

                            <div className=' checkout-row Csecond'>
                                <div>Bill Amount</div>
                                {/* <div>₹ {membershipCost}</div> */}
                                <div>₹ 10</div>


                            </div>
                            <div className='checkout-row Cthird'>
                                <div>GST (18%)</div>
                                {/* <div>₹ { membershipCostGST}</div> */}
                                <div>₹ 5</div>

                            </div>

                            <div className='endline'></div>

                            <div className=' checkout-row Ctotal'>
                                <div>Grand total</div>
                                {/* <div>₹ {grandTotal}</div> */}
                                <div>₹ 15</div>

                            </div>

                            <div className='Checkout-terms'>
                                <div className='terms-policy'>By clicking, I agree with the <span style={{ cursor: "pointer", textDecoration: 'underline' }} onClick={() => navigate('/refund-policy')}>Refund Policy</span>  and <span style={{ cursor: "pointer", textDecoration: 'underline' }} onClick={() => navigate('/Shipping-policy')}>Shipping Policy</span></div>
                                <div className='xr-btn'>
                                    <Button
                                        color="#fff"
                                        text="proceed to pay"
                                        height="40px"
                                        width="199px"
                                    >
                                        < img style={{ marginLeft: "90px", zIndex: '1' }} src={Arrow} alt='' />
                                    </Button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div >


            </div >



        </>
    )
}

export default EventRegistrationForm;