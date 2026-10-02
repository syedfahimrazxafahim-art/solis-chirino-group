import React from 'react';
import { motion } from 'motion/react';

interface LiquidTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  delay?: number;
  highlightWord?: string;
  highlightClass?: string;
  staggerDuration?: number;
}

export const LiquidText: React.FC<LiquidTextProps> = ({
  text,
  as: Component = 'h1',
  className = '',
  delay = 0,
  highlightWord,
  highlightClass = 'text-[#D8C7AE]',
  staggerDuration = 0.028,
}) => {
  const words = text.split(' ');

  return (
    <Component className={`inline-block overflow-hidden font-display ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex flex-wrap gap-x-[0.28em] leading-tight">
        {words.map((word, wordIndex) => {
          const isHighlight = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
          return (
            <span key={wordIndex} className="inline-flex overflow-hidden py-0.5">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ y: '115%', opacity: 0, filter: 'blur(4px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.85,
                    ease: [0.16, 1, 0.3, 1],
                    delay: delay + (wordIndex * 6 + charIndex) * staggerDuration,
                  }}
                  className={`inline-block transform-gpu transition-colors ${
                    isHighlight ? highlightClass : ''
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          );
        })}
      </span>
    </Component>
  );
};
