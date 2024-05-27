import { useState, useEffect } from "react";

function TypingEffect({ texts, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (index == texts.length - 1) {
        setIndex(0);
      }
      if (!isDeleting && typingIndex < texts[index].length) {
        setDisplayedText(texts[index].slice(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      } else if (!isDeleting && typingIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), 800); // Pause before deleting
      } else if (isDeleting && typingIndex > 0) {
        setDisplayedText(texts[index].slice(0, typingIndex - 1));
        setTypingIndex(typingIndex - 1);
      } else if (isDeleting && typingIndex === 0) {
        setIsDeleting(false);
        setIndex(index + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [typingIndex, isDeleting, texts, speed, index]);

  return <span className="text-outline">{displayedText}</span>;
}

export default TypingEffect;
