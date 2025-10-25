"use client";

import { useState, useEffect } from "react";

export function TypingText() {
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = ["Build", "exquisite quality", "great value"];
  const currentPhrase = phrases[phraseIndex];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1));
        }, typingSpeed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        // ✅ Fix: use timeout to defer next state change
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhrase, phrases.length]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
