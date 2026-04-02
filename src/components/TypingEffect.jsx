import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

const TypingEffect = ({ benefits }) => {
  const fullText = benefits.join(' '); // Combine all benefits into one string
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    if (charIndex < fullText.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(prev => prev + fullText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 50); // Typing speed (ms)
    } else {
      // Reset after full text is typed
      timeoutId = setTimeout(() => {
        setDisplayText('');
        setCharIndex(0);
      }, 5000); // Wait 5 seconds before restarting
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, fullText]);

  return (
    <div className="typing-container d-none d-lg-block">
      <h4 className="typing-header">Top 10 NaijaGo Benefits:</h4>
      <p className="typing-line current-typing">
        {displayText}
        <span className="typing-cursor">|</span>
      </p>
    </div>
  );
};

export default TypingEffect;
