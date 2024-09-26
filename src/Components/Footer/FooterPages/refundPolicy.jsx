import Header from "../../Header/header";
import BackArrow from '../../assets/Back-arrow.svg';
import { useNavigate } from "react-router-dom";
import './footer.css'

const RefundPolicy = () => {

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
                        <div><span style={{opacity:'60%'}}>Back</span> <span>|</span> <span>Refund policy</span></div>
                    </div>
                    <div className="faq-title">Refund policy</div>

                    <div className="refund-content">

                        <div className="refund-updated">Last updated: March 27, 2024</div>

                        <div className="">Thank you for shopping at Batcave.</div>

                        <div>If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.</div>

                        <div>The following terms are applicable for any products that You purchased with Us.</div>

                        <div className="refund-flex">
                            <div className="refund-head">Interpretation and Definitions</div>
                            <div>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</div>
                        </div>

                        <div style={{color:'#fff'}}>Definitions</div>

                        <div className="refund-flex">

                            <div className="refund-head">For the purposes of this Return and Refund Policy:</div>
                            <div>
                                <ul style={{padding:'0 0 0 15px'}}>
                                    <li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Invicious Automotive (P) Ltd., 28/1, Fourth Floor, Arima Wakelfield, Avinashi Road, Peelamedu, Coimbatore - 641004.</li>
                                    <li>Goods refer to the items offered for sale on the Service.</li>
                                    <li>Orders mean a request by You to purchase Goods from Us.</li>
                                    <li>Service refers to the Website.</li>
                                    <li>Website refers to Batcave, accessible from https://www.batcave.club/</li>
                                    <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                                </ul>
                            </div>

                        </div>

                        <div className="refund-flex">
                            <div className="refund-head">Your Order Cancellation Rights</div>

                            <div>
                                <div>You are entitled to cancel Your Order within 7 days without giving any reason for doing so. </div>
                                <div>The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</div>
                                <div>Your refund will be processed within 30 to 45 business days.</div>
                                <div>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</div>
                                <li style={{ marginBottom: '36px' }}>By email: <a href="mailto:info@batcave.club">info@batcave.club</a></li>
                                <div>We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</div>

                            </div>


                        </div>

                        <div className="refund-flex">
                            <div className="refund-head cnr" >Conditions for Returns</div>

                            <div  className="margincss1">
                                <p>In order for the Goods to be eligible for a return, please make sure that:</p>
                                <p>The Goods were purchased in the last 7 days</p>
                                <p>The Goods are in the original packaging</p>
                                <p>Your refund will be processed within 30 to 45 business days.</p>
                                <p>The following Goods cannot be returned:</p>
                                <p>Digital Products including membership.</p>
                                <p>The supply of Goods made to Your specifications or clearly personalized.</p>
                                <p>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</p>
                                <p>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</p>
                                <p>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</p>
                                <p>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
                                <p>Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>
                            </div>

                        </div>

                        <div className="refund-flex">

                            <div className="refund-head">Returning Goods</div>
                            <div>
                                <div>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:</div>
                                <div></div>
                                <div>We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</div>
                            </div>

                        </div>

                        <div className="refund-flex">

                            <div className="refund-head giftes">Gifts</div>
                            <div >
                                <div>If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.</div>
                                <div>If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.</div>
                            </div>
                        </div>


                        <div className="refund-flex ">
                            <div className="refund-head contactUs">Contact Us</div>
                            <div>
                                If you have any questions about our Returns and Refunds Policy, please contact us:
                                <li style={{ marginBottom: '36px' }}>By email: <a href="mailto:info@batcave.club">info@batcave.club</a></li>

                            </div>

                        </div>



                    </div>


                </div>

            </div>

        </>
    )
}

export default RefundPolicy