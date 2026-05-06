import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'span';
}

/** Atlas-style reveal: simple upward settle, no scale or blur. */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className,
  as = 'div',
}) => {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  if (reduced) return React.createElement(as, { className }, children);

  return (
    <Tag
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
};
