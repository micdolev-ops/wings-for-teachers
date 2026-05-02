import { useState, useEffect } from "react";
interface TypewriterTextProps {
  text: string; speed?: number; delay?: number; showCursor?: boolean; className?: string; onComplete?: () => void;
}
const TypewriterText = ({ text, speed = 80, delay = 0, showCursor = true, className = "", onComplete }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsTyping(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  useEffect(() => {
    if (!isTyping) return;
    if (displayedText.length < text.length) {
      const t = setTimeout(() => setDisplayedText(text.slice(0, displayedText.length + 1)), speed);
      return () => clearTimeout(t);
    } else { setIsComplete(true); onComplete?.(); }
  }, [displayedText, isTyping, text, speed, onComplete]);
  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && <span className="inline-block w-[3px] h-[1em] bg-primary mr-1 animate-blink align-middle" />}
    </span>
  );
};
export default TypewriterText;
