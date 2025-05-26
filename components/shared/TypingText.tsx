// src/components/shared/TypingText.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TypingTextProps {
  text: string;
  typingSpeed?: number;
  initialDelayForTyping?: number; // Delay before typing starts
  className?: string; // For the wrapper span of text + cursor
  cursorClassName?: string;
  onTypingComplete?: () => void;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  typingSpeed = 100, // milliseconds per character
  initialDelayForTyping = 0,
  className,
  cursorClassName = "inline-block w-[3px] h-[0.85em] bg-primary animate-blink align-text-bottom ml-1",
  onTypingComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canStartTyping, setCanStartTyping] = useState(false);
  const [isFinishedTyping, setIsFinishedTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startDelayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset and clear timeouts when text or delay changes
    setDisplayedText('');
    setCurrentIndex(0);
    setCanStartTyping(false);
    setIsFinishedTyping(false);

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    if (startDelayTimeoutRef.current) clearTimeout(startDelayTimeoutRef.current);

    startDelayTimeoutRef.current = setTimeout(() => {
      setCanStartTyping(true);
    }, initialDelayForTyping);

    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      if (startDelayTimeoutRef.current) clearTimeout(startDelayTimeoutRef.current);
    };
  }, [text, initialDelayForTyping]);

  useEffect(() => {
    if (!canStartTyping || currentIndex >= text.length) {
      if (canStartTyping && currentIndex >= text.length && !isFinishedTyping) {
        setIsFinishedTyping(true);
        onTypingComplete?.();
      }
      return;
    }

    typingTimeoutRef.current = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, typingSpeed);

    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [canStartTyping, currentIndex, text, typingSpeed, onTypingComplete, isFinishedTyping]);

  const showCursor = canStartTyping;

  return (
    <span className={cn(className)}>
      {displayedText}
      {showCursor && (
        <span 
          aria-hidden="true" 
          className={cn(cursorClassName)} 
        />
      )}
    </span>
  );
};

export default TypingText;
