import { useNavigate } from "react-router-dom";


const Footer = () => {


    const navigate = useNavigate();

    const handleFAQ = () => {
        navigate('/faq')
    }

    const handleRP = () => {
        navigate('/refund-policy')
    }

    const handlePP = () => {
        navigate('/privacy-policy')
    }

    const handleTnC = () => {
        navigate('/t&c')
    }



    return (
        <>
            <div className="footer-container">
                <div>Copyright © 2022 - 2024 Invicious Automotive (P) Ltd</div>
                <div className="footer-span">
                    <div>
                        <span onClick={handleFAQ}>FAQs</span>
                        <span style={{ margin: '0 15px' }}>|</span>

                        <span onClick={handleTnC}>Terms & conditions</span>
                        <span className="tncSpan" style={{ margin: '0 15px' }}>|</span>
                    </div>
                    <div>

                        <span onClick={handlePP}>Privacy policy</span>
                        <span style={{ margin: '0 15px' }}>|</span>

                        <span onClick={handleRP}>Refund policy</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;