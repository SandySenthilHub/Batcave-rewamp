
import './poll.css';
import Arrow from '../assets/contact-arrow.svg';
import BackArrow from '../assets/Back-arrow.svg';
import { useNavigate, Navigate } from 'react-router-dom';
import BatcaveLogo from '../assets/BatcaveLogo.svg';
import Button from '../Button/button';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/ApplicationURL';

const Poll = () => {

    const navigate = useNavigate();

    const [poll, setPoll] = useState(null);
    const [error, setError] = useState('');
    const [selectedOption, setSelectedOption] = useState(null); // Track the selected option
    const [hasVoted, setHasVoted] = useState(false); // Track if the user has already voted
    const [voteMessage, setVoteMessage] = useState(''); // Message to show for voting status
    const pollId = "1";

    useEffect(() => {
        const fetchPoll = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/polls/${pollId}`);
                console.log('Response:', response);
                setPoll(response.data);

                const userId = localStorage.getItem('votePerson');
                const phone = localStorage.getItem('votePerson'); // Assuming phone number is stored in local storage

                if (userId || phone) {
                    const hasVotedByUserId = response.data.voters.some(voter => voter.userId === userId);
                    const hasVotedByPhoneNumber = response.data.voters.some(voter => voter.phoneNumber === phone);

                    setHasVoted(hasVotedByUserId || hasVotedByPhoneNumber);
                    if (hasVotedByUserId || hasVotedByPhoneNumber) {
                        setVoteMessage('You have already voted.');
                    }
                }
            } catch (error) {
                console.error('Error fetching poll:', error);
                setError('Error fetching poll.');
            }
        };

        fetchPoll();
    }, [pollId]);

    const handleVote = async (optionIndex) => {
        if (selectedOption !== null || hasVoted) {
            // Do not allow voting if already voted
            setVoteMessage('You have already voted.');
            return;
        }

        const userId = localStorage.getItem('votePerson');
        console.log(userId)

        try {
            const response = await axios.put(`${BASE_URL}/api/polls/${pollId}/vote`, {
                // const response = await axios.put(`http://localhost:5000/api/polls/${pollId}/vote`, {

                optionIndex,
                userId
            });
            console.log('Vote response:', response);
            setPoll(response.data); // Update poll data with new vote count
            setSelectedOption(optionIndex); // Mark option as selected
            setHasVoted(true); // Update voted status locally
            setVoteMessage(''); // Clear vote message

            setTimeout(() => {
                localStorage.removeItem('votePerson');
            }, 10000);


        } catch (error) {
            console.error('Error voting:', error);
            setError('Failed to vote.');
        }
    };

      if (error) {
        return <div>{error}</div>;
    }

    if (!poll || !poll.question) {
        return <div>Loading...</div>;
    }

    const totalVotes = poll.options.reduce((acc, option) => acc + option.votes, 0);


    const navigateHome = () => {
        navigate('/')
    }


    return (
        <>
            <div className='poll-container'>

                <div className="logo polllogo" onClick={navigateHome}>
                    <img src={BatcaveLogo} alt="Car Events tamil Nadu" />
                </div>

                <div className='poll-content'>
                    <div className='Question'>
                        {poll.question}
                    </div>

                    {voteMessage && <div className="vote-message" style={{
                        color: '#fff', fontFamily: "Space Grotesk",
                    }}>{voteMessage}</div>}


                    <ul className='options'>
                        {poll.options.map((option, index) => {
                            const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
                            return (
                                <li key={index}>
                                    <button
                                        className={`option-btn ${selectedOption === index ? 'selected' : ''}`}
                                        style={{ backgroundColor: selectedOption === index ? 'transparent' : 'transparent' }}
                                        disabled={selectedOption !== null || hasVoted}
                                        onClick={() => handleVote(index)}
                                    >
                                        {option.text}
                                        {hasVoted && (
                                            <>
                                                <span className="progress-poll" style={{ width: `${percentage}%` }}></span>
                                                <span className="percentage">{Math.round(percentage)}%</span>
                                            </>
                                        )}
                                    </button>
                                </li>
                            );
                        })}

                    </ul>

                    {/* <div className='poll-btn'>
                        <Button
                            color="#fff"
                            text="Submit"
                            height="40px"
                            width="134px"
                        >
                            < img style={{ marginLeft: "20px", zIndex: '1' }} src={Arrow} alt='' />
                        </Button>
                    </div> */}
                </div>


            </div>


        </>
    )
}

export default Poll