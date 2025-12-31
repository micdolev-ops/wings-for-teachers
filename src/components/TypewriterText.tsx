import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number; // default 80ms per character
  delay?: number;
  showCursor?: boolean;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({
  text,
  speed = 80,
  delay = 0,
  showCursor = true,
  className = "",
  onComplete,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, isTyping, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-fade-in"
          style={{ 
            animationDelay: `${index * 20}ms`,
            animationDuration: '150ms',
            animationFillMode: 'forwards'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      {showCursor && !isComplete && (
        <span className="inline-block w-[3px] h-[1em] bg-primary mr-1 animate-blink align-middle transition-opacity duration-300" />
      )}
    </span>
  );
};

export default TypewriterText;
