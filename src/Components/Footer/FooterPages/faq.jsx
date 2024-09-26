import Header from "../../Header/header";
import BackArrow from '../../assets/Back-arrow.svg';
import { useNavigate } from "react-router-dom";
import './footer.css'

const FAQ = () => {

    const navigate = useNavigate();


    const navigateBack = () => {
        navigate('/')
    }

    return (
        <>

            <div className="faq-component">
                <Header />
                <div className="faq-container">
                    <div className="page-back-nav" onClick={navigateBack}>
                        <img src={BackArrow} alt='' />
                        <div><span style={{opacity:'60%'}}>Back</span> <span>|</span> <span>FAQ</span></div>
                    </div>

                    <div className="faq-title">faq’s</div>

                    <div className="faq-qna">
                        <div className="faq-que">


                            <ol>
                                <div>
                                    <li>Who is eligible to join the Batcave Membership?</li>
                                    <div>Anyone who is at least 18 years old and a legal resident of India can join the Batcave Membership.</div>
                                </div>

                                <div>
                                    <li>How can I join the Batcave Membership?</li>
                                    <div>You can join by visiting our website and completing the registration process.</div>

                                </div>
                                <div>
                                    <li>What is Batcave OG?</li>
                                    <div>Members who register on the launch week gets the OG status. OG members get lifetime access to the club membership & do not incur any additional charges for renewal. </div>

                                </div>
                                <div>
                                    <li>What is Virtual Garage?</li>
                                    <div>Batcave virtual garage is an app, that members can use to manage their cars, access details about events and avail discounts & offers on services.</div>

                                </div>
                                <div>
                                    <li> How long is the membership valid for?</li>
                                    <div>Batcave members who enjoy lifetime membership.</div>

                                </div>
                                <div>
                                    <li>How can I attend local meetups and special events?</li>
                                    <div>All members can attend local meetups, and details about special events will be communicated through official channels and through our virtual garage. </div>

                                </div>
                                <div>
                                    <li>How do I earn discounts on products and services?</li>
                                    <div>Discounts are provided based on the points you accumulate through interactions with the club. Every interaction earns you points.</div>

                                </div>
                                <div>
                                    <li>What discounts are available for vehicles and services?</li>
                                    <div>Up to 15% discounts for car service at our authorized service centers. Up to 10% discounts on new car purchase through our virtual garage. Terms and conditions apply.</div>

                                </div>
                                <div>
                                    <li>What happens if my membership is canceled?</li>
                                    <div>Memberships can be canceled by Batcave for reasons such as misbehavior or violations of group rules. Membership purchases are non-refundable.</div>

                                </div>
                                <div>
                                    <li>How do I renew my membership?</li>
                                    <div>Non-Batcave OG members need to renew their membership every two years. Details on renewal will be provided closer to the expiration date.</div>

                                </div>


                            </ol>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default FAQ;