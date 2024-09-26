import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/header';
import BackArrow from '../../assets/Back-arrow.svg';



function TermsConditions() {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/')
    }

    const innerContainerRef = useRef(null);

    const handleDocumentClick = () => {
        // Scroll the inner container
        const innerContainer = innerContainerRef.current;
        if (innerContainer) {
            innerContainer.scrollBy({ top: 100, behavior: 'smooth' }); // Scroll by 100px, adjust as needed
        }
    };

    // Attach click event listener to the entire document
    React.useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <>
            <Header />

            <div className='container-fluid TermsContainer'>
                <div className="page-back-nav" onClick={navigateBack}>
                    <img src={BackArrow} alt='' />
                    <div><span style={{opacity:'60%'}}>Back</span> <span>|</span> <span>Terms and Conditions</span></div>
                </div>

                <div className='row TermsContent'>

                    <div>Terms and Conditions</div>

                    <div>Welcome to the Batcave Enthusiasts community! These Terms & Conditions are designed to ensure a clear understanding of the membership benefits and utilities associated with your Batcave Enthusiasts membership (hereinafter referred to as “the Membership”). By joining, members agree to the following terms,
                        which cover both digital and physical utilities, including offline experiences, vehicle / service discount benefits, and more.</div>

                    <div>Membership Eligibility</div> {/* 3  */}

                    <div>To join, you must be at least 18 years old and a legal resident of India. We may check to make sure you meet these requirements.
                        We can also cancel your membership without telling you beforehand.</div>

                    <div>Welcome Kit</div>  {/* 5 */}

                    <ul>
                        <li>Visit the website to see what's included in the welcome kit.</li>
                        <li>Check out the Return Policy for details on how the welcome kit will be delivered and handled.</li>
                        <li>The welcome kit will be sent out within 30 working days after you purchase your membership.</li>
                    </ul>

                    <div>Membership Validity:</div>   {/* 7 */}

                    <ul>
                        <li>Batcave OG members, who register during the launch week, enjoy a lifetime membership.</li>
                        <li>For other members, the Batcave Membership is valid for 2 years from the date of purchase.</li>
                        <li>This time limit applies to all offline experiences and digital interventions.</li>
                        <li>Batcave reserves the right to cancel membership without prior notice for misbehavior or violations of group rules.</li>
                        <li>Membership purchases are non-refundable.</li>
                        <li>Non-Batcave OG members need to renew their membership every 2 years.</li>

                    </ul>

                    <div>Offline Experiences</div>  {/* 9 */}
                    <div>All members can join local meetups, industry tours, drive events, etc organized based on member concentration in specific areas. Regional gatherings will be scheduled to include a wide range of members.</div>
                    <div>Participating in contests for exclusive experiences doesn't guarantee winning. Contest mechanics, including entry, judging criteria, and deadlines, will be communicated beforehand.</div>

                    <div>Discount Benefit</div> {/* 12 */}
                    <ul><li>Points-Based Discount: Discounts on products and services will be determined based on the points accumulated under your name. You can earn points for every interaction with the club.</li></ul>
                    <div>Cookies</div>
                    {/* 14 */}
                    <div>We employ the use of cookies. By accessing Batcave, you agreed to use cookies in agreement with the Invicious Automotive (P) Ltd.'s Privacy Policy.</div>
                    <div>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</div>
                    <div>License</div>
                    {/* 17 */}
                    <div>Unless otherwise stated, Invicious Automotive (P) Ltd. and/or its licensors own the intellectual property rights for all material on Batcave. All intellectual property rights are reserved. You may access this from Batcave for your own personal use subjected to restrictions set in these terms and conditions.</div>

                    <div>You must not:</div>
                    <ul>
                        <li>Republish material from Batcave</li>
                        <li>Sell, rent or sub-license material from Batcave</li>
                        <li>Reproduce, duplicate or copy material from Batcave</li>
                        <li>Redistribute content from Batcave</li>

                    </ul>

                    <div>This Agreement shall begin on the date hereof.</div>
                    <div>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Invicious Automotive (P) Ltd. does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Invicious Automotive (P) Ltd.,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Invicious Automotive (P) Ltd. shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</div>
                    <div>Invicious Automotive (P) Ltd. reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</div>

                    <div>
                        You warrant and represent that:
                    </div>

                    <ul>
                        <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                        <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                        <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                        <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>

                    </ul>

                    <div>You hereby grant Invicious Automotive (P) Ltd. a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</div>


                    <div>Hyperlinking to our Content</div>
                    {/* 25 */}

                    <div>The following organizations may link to our Website without prior written approval:</div>

                    <ul>
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>


                    </ul>

                    <div>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.</div>

                    <div>We may consider and approve other link requests from the following types of organizations:</div>

                    <ul>
                        <li>commonly-known consumer and/or business information sources;</li>
                        <li>dot.com community sites;</li>
                        <li>associations or other groups representing charities;</li>
                        <li>online directory distributors;</li>
                        <li>internet portals;</li>
                        <li>accounting, law and consulting firms; and</li>
                        <li>educational institutions and trade associations.</li>

                    </ul>

                    <div>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Invicious Automotive (P) Ltd.; and (d) the link is in the context of general resource information.</div>
                    <div>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</div>

                    <div>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Invicious Automotive (P) Ltd.. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</div>

                    <div>Approved organizations may hyperlink to our Website as follows:</div>

                    <ul>
                        <li>By use of our corporate name; or</li>
                        <li>By use of the uniform resource locator being linked to; or</li>
                        <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>

                    </ul>

                    <div>No use of Invicious Automotive (P) Ltd.'s logo or other artwork will be allowed for linking absent a trademark license agreement.</div>

                    <div>iFrames</div>
                    {/* 37 */}

                    <div>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</div>

                    <div>Content Liability</div>
                    {/* 39 */}

                    <div>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</div>

                    <div>Reservation of Rights</div>

                    {/* 41 */}

                    <div>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</div>

                    <div>Removal of links from our website</div>
                    {/* 43 */}

                    <div>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</div>
                    <div>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</div>

                    <div>Disclaimer</div>
                    {/* 46 */}

                    <div>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</div>
                    <ul>
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>

                    </ul>

                    <div>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</div>
                    <div>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</div>
                    <div>By registering for any event hosted by Batcave, you will automatically be enrolled as a Batcave member under the Ignition Insider (free plan).</div>





                </div>

                       </div>
        </>
    )
}

export default TermsConditions;