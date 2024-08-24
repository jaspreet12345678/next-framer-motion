import { useState, useEffect } from 'react';

export function useTypingAnimation(text, speed = 100, loopDelay = 2000) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let typingInterval;
        let resetTimeout;

        if (isTyping) {
            typingInterval = setInterval(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                currentIndex++;
                if (currentIndex === text.length) {
                    clearInterval(typingInterval);
                    resetTimeout = setTimeout(() => {
                        setDisplayedText('');
                        currentIndex = 0;
                        setIsTyping(true);
                    }, loopDelay);
                }
            }, speed);
        }

        return () => {
            clearInterval(typingInterval);
            clearTimeout(resetTimeout);
        };
    }, [text, speed, loopDelay, isTyping]);

    useEffect(() => {
        setIsTyping(true);
    }, [text]);

    return displayedText;
}
