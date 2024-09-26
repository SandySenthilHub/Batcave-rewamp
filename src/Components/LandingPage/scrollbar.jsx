import { useNavigate } from 'react-router-dom';


const Scrollbar = () => {

    const navigate = useNavigate();

    const handleNavigation = (sectionId) => {
        navigate('/');
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    return (
        <>
            <div className="scrollbar-container"
                onClick={() => handleNavigation('our-events')}
            >
                <div className="arrow-scroll">
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                </div>
            </div>

        </>
    )
}

export default Scrollbar