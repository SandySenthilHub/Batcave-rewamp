import BackArrow from '../../assets/Back-arrow.svg';
import './registrationForm.css';
import IIcard from '../../assets/II-plan.svg';
import React, { useState } from 'react';
import Arrow from '../../assets/contact-arrow.svg';
import axios from 'axios';
import { useNavigate, useParams, useSearchParams, useLocation } from 'react-router-dom';
import Button from '../../Button/button';
import Header from '../../Header/header';



const IgnitionForm = () => {

    const navigate = useNavigate();

    const [focusedFields, setFocusedFields] = useState({});
    const [error, setError] = useState('');
    const [errordob, setErrordob] = useState('');

    const statesInIndia = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        mobileNumber: '',
        email: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
        Reference: ''
    });


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


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted successfully:', formData);
    };


    return (
        <>

            <Header />

            <div className="xcelerator-form-container">


                <div className="xcelerator-header">
                    <div>
                        <img src={BackArrow} alt='' />
                        <div >Back <span>|</span> <span>Register As Ignition Insider</span></div>

                    </div>

                    <div className='Upgrade-content'>
                        Upgrade Membership  from Ignition Insider to Xcelerator
                    </div>

                </div>

                <div className='ignition-form'>

                    <form onSubmit={handleSubmit}>

                        <div className='DiRow'>

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
                                    type="text"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label className={focusedFields['dob'] || formData.dob ? 'focused' : ''}>Date Of Birth *</label>
                                {errordob && <p style={{ color: 'red', fontSize: "10px" }}>{errordob}</p>}

                            </div>
                        </div>

                        <div className='DiRow'>

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
                        </div>
                        <div className="form-row">

                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            <label className={focusedFields['address'] || formData.address ? 'focused' : ''}>Address *</label>
                            {error.address && <p style={{ color: 'red', fontSize: "10px" }}>{error.address}</p>}

                        </div>
                        <div className='DiRow'>

                            <div className="form-row">

                                <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    maxLength="6"
                                    pattern="[0-9]*"
                                    onKeyPress={(e) => {
                                        if (!/[0-9]/.test(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                />
                                <label className={focusedFields['pincode'] || formData.pincode ? 'focused' : ''}>Pincode *</label>
                                {error.pincode && <p style={{ color: 'red', fontSize: "10px" }}>{error.pincode}</p>}

                            </div>
                            <div className="form-row">

                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label className={focusedFields['city'] || formData.city ? 'focused' : ''}>City *</label>
                                {error.city && <p style={{ color: 'red', fontSize: "10px" }}>{error.city}</p>}

                            </div>
                        </div>

                        <div className='DiRow'>

                            <div className="form-row">

                                <select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                >
                                    <option value="" disabled hidden></option>
                                    {statesInIndia.map((state) => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                                <label
                                    htmlFor="state"
                                    className={focusedFields['state'] || formData.state ? 'focused' : ''}
                                >
                                    State *
                                </label>
                                {error.state && <p style={{ color: 'red', fontSize: "10px" }}>{error.state}</p>}

                            </div>
                            <div className="form-row">

                                <select
                                    name="Reference"
                                    value={formData.Reference}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                >
                                    <option disabled hidden value=""></option>
                                    <option style={{ marginBottom: '20px' }} value="Friends / Family">Friends / Family</option>
                                    <option value="Social Media (Instagram)">Social Media (Instagram)</option>
                                    <option value="By RevNitro">By RevNitro</option>
                                    <option value="Search engine (Google, yahoo, Bing, etc..)">Search engine (Google, yahoo, Bing, etc..)</option>
                                    <option value="Advertisement">Advertisement</option>
                                    <option value="others">Others</option>
                                </select>

                                <label
                                    htmlFor="Reference"
                                    className={focusedFields['Reference'] || formData.Reference ? 'focused' : ''}
                                >
                                    How did you here about us? *
                                </label>
                                {error.Reference && <p style={{ color: 'red', fontSize: "10px" }}>{error.Reference}</p>}

                            </div>
                        </div>
                        {/* <button type="submit">Submit</button> */}
                    </form>

                    <div className='Checkout-terms-ii'>
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


                </div >


            </div >

            {/* Success Card */}
            {/* <div className="plan-card II-plan">
                <div className='plan-img'>
                    <img src={IIcard} alt='' />
                </div>

                <div className='plan-content'>

                    <div className='plan-title' style={{ marginBottom: '16px' }}>registration successful</div>

                    <div className='plan-price'>Welcome BATCAVE II your </div>

                    <div className='plan-price'>Unique ID - BCII000002 </div>

                    <div className='plan-price'>To purchase membership card <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>Click Here</span> </div>

                </div>
            </div> */}

        </>
    )
}

export default IgnitionForm;