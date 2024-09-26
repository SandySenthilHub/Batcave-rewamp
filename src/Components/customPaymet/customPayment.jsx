
import BackArrow from '../assets/Back-arrow.svg';
import axios from 'axios';
import Button from '../Button/button';
import './customPayment.css'
import Arrow from '../assets/contact-arrow.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/ApplicationURL';
import Header from '../Header/header';

const CustomPaymet = () => {

    const navigate = useNavigate();
    const { hex } = useParams();
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [paymentLink, setPaymentLink] = useState('');

    useEffect(() => {
        const fetchPaymentDetails = async () => {
          try {
            // const response = await axios.get(`http://localhost:5000/api/payment/${hex}`);
            const response = await axios.get(`${BASE_URL}/api/payment/${hex}`);
    
            setPaymentDetails(response.data);
          } catch (error) {
            console.error('Error fetching payment details:', error);
          }
        };
    
        fetchPaymentDetails();
      }, [hex]);

      const handlePayment = async () => {
        try {
          // const response = await axios.post(`http://localhost:5000/api/phonepe/customize/payment`, {
          const response = await axios.post(`${BASE_URL}/api/phonepe/customize/payment`, {
    
            amount: paymentDetails.amount,
            description: paymentDetails.description,
          });
          console.log(response);
          const link = response.data.link;
          setPaymentLink(link); // Set the payment link
          window.location.href = link; 
        } catch (error) {
          console.error('Error generating payment link:', error);
        }
      };

      if (!paymentDetails) {
        return <div>Loading...</div>;
      }

      const maskPhoneNumber = (phone) => {
        if (phone.length < 4) return phone; // If the phone number is less than 4 digits, return it as is
        const firstTwo = phone.slice(0, 2);
        const lastTwo = phone.slice(-2);
        const masked = firstTwo + '******' + lastTwo;
        return masked;
      };
    
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        };
        const formattedDate = date.toLocaleString('en-GB', options);
        
        // Split the formatted date to separate the date and time
        const [datePart, timePart] = formattedDate.split(', ');
        
        // Replace the colons in the time part
        const formattedTime = timePart.replace(':00', '');
        
        return `${datePart.replace(/\//g, ' - ')} | ${formattedTime}`;
      };

    return (
        <>

        <Header/>

            <div className='custom-payment-container'>
                <div className='payment-header'>
                    <img src={BackArrow} alt='' />
                    <div>Back <span style={{ margin: '0 10px' }}>|</span> <span>Payment</span></div>
                </div>

                <div className='payment-container'>
                    <div className='payment-left'>
                        <div className='DiRow'>
                            <div>Name</div>
                            <div> {paymentDetails.userName}</div>
                        </div>

                        <div className='DiRow'>
                            <div>Phone Number</div>
                            <div> {maskPhoneNumber(paymentDetails.phone)}</div>
                        </div>

                        <div>
                            <div style={{ marginBottom: '12px' }}>Description</div>
                            <div>{paymentDetails.description}</div>
                        </div>

                        <div className='DiRow paymetDate'>
                            <div>Payment Expiry date & time</div>
                            <div>{formatDate(paymentDetails.expiryTime)}</div>
                        </div>

                    </div>

                    <div className='payment-right'>
                        <div className='checkoutSummary'>Checkout summary</div>

                        <div className=' checkout-row Csecond'>
                            <div>Amount</div>
                            <div>₹ {paymentDetails.amount}</div>


                        </div>
                        <div className='checkout-row Cthird'>
                            <div>GST (18%)</div>
                            <div>₹ 5</div>

                        </div>

                        <div className='endline'></div>

                        <div className=' checkout-row Ctotal'>
                            <div>Grand totalt</div>
                            <div>₹{paymentDetails.amount}</div>

                        </div>

                        <div className='Checkout-terms'>
                            <div className='terms-policy'>By clicking, I agree with the <span style={{ cursor: "pointer", textDecoration: 'underline' }} onClick={() => navigate('/refund-policy')}>Refund Policy</span>  and <span style={{ cursor: "pointer", textDecoration: 'underline' }} onClick={() => navigate('/Shipping-policy')}>Shipping Policy</span></div>
                            <div className='xr-btn'>
                                <Button
                                    color="#fff"
                                    text="proceed to pay"
                                    height="40px"
                                    width="199px"
                                    onClick={handlePayment}
                                >
                                    < img style={{ marginLeft: "10px", zIndex: '1' }} src={Arrow} alt='' />
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default CustomPaymet