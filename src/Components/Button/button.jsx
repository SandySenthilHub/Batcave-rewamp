import React, { useState } from 'react';
import './btn.css';
import Sparkles from 'react-sparkle';

const Button = ({ colorA, colorB, text, height, width, children, onClick, disabled }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* <div className="button-wrapper">
                <button
                    className={`button ${disabled ? 'button-disabled' : ''}`}
                    onClick={disabled ? null : onClick}
                    data-value={text}
                    style={{
                        '--btn-bg-color': color || '#FFF',
                        '--btn-height': height || '50px',
                        '--btn-width': width || '200px',
                        height: 'var(--btn-height)',
                        width: 'var(--btn-width)',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        opacity: disabled ? 0.5 : 1
                    }}
                    onMouseEnter={() => !disabled && setIsHovered(true)}
                    onMouseLeave={() => !disabled && setIsHovered(false)}
                    disabled={disabled}
                >
                    {text} {children}
                </button>

                {isHovered && (
                    <Sparkles
                        overflowPx={1}
                        color="rgba(255, 255, 255, 0.5)"
                        fadeOutSpeed={10}
                        newSparkleOnFadeOut={true}
                        flicker
                        flickerSpeed="slow"
                        maxSize={1}
                        count={20}
                    />
                )}
            </div> */}

            <div className="button-wrapper">
                <button
                    id='gradient-text'
                    className={`button ${disabled ? 'button-disabled' : ''}`}
                    onClick={disabled ? null : onClick}
                    data-value={text}
                    style={{
                        '--btn-bg-color1': colorA || '#FFF',
                        '--btn-bg-color2': colorB || '#FFF',
                        '--btn-width': width || '200px',
                        height: '40px',
                        width: 'var(--btn-width)',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        opacity: disabled ? 0.5 : 1
                    }}
                    onMouseEnter={() => !disabled && setIsHovered(true)}
                    onMouseLeave={() => !disabled && setIsHovered(false)}
                    disabled={disabled}
                >
                    
                        {text} {children}
                    
                </button>

                {isHovered && (
                    <Sparkles
                        overflowPx={1}
                        color="rgba(255, 255, 255, 0.5)"
                        fadeOutSpeed={10}
                        newSparkleOnFadeOut={true}
                        flicker
                        flickerSpeed="slow"
                        maxSize={5}
                        count={20}
                    />
                )}

            </div>
        </>
    );
};

export default Button;
