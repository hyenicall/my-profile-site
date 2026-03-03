import { useState, useEffect, useRef } from 'react';

interface UseTypingAnimationOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  initialDelay?: number;
}

export function useTypingAnimation(
  texts: string[],
  {
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 2000,
    initialDelay = 1200,
  }: UseTypingAnimationOptions = {},
) {
  const [displayText, setDisplayText] = useState('');
  const textIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const isPaused = useRef(false);
  const started = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const currentText = texts[textIndex.current];

      if (isPaused.current) {
        isPaused.current = false;
        isDeleting.current = true;
        timer = setTimeout(type, 50);
        return;
      }

      if (isDeleting.current) {
        charIndex.current--;
        setDisplayText(currentText.substring(0, charIndex.current));

        if (charIndex.current === 0) {
          isDeleting.current = false;
          textIndex.current = (textIndex.current + 1) % texts.length;
          timer = setTimeout(type, 300);
          return;
        }

        timer = setTimeout(type, deletingSpeed);
      } else {
        charIndex.current++;
        setDisplayText(currentText.substring(0, charIndex.current));

        if (charIndex.current === currentText.length) {
          isPaused.current = true;
          timer = setTimeout(type, pauseDuration);
          return;
        }

        timer = setTimeout(type, typingSpeed);
      }
    }

    if (!started.current) {
      started.current = true;
      timer = setTimeout(type, initialDelay);
    } else {
      timer = setTimeout(type, initialDelay);
    }

    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return displayText;
}
