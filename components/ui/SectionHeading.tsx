import React from 'react';
import { cn } from './cn';

interface SectionHeadingProps {
  chapter?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'h1' | 'h2';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  chapter,
  title,
  lede,
  className,
  id,
  as = 'h2',
}) => {
  const heading = React.createElement(
    as,
    {
      id,
      className:
        'atlas-display text-4xl md:text-5xl lg:text-6xl text-ink-900 max-w-[18ch]',
    },
    title
  );
  return (
    <header className={cn('max-w-4xl', className)}>
      {chapter && (
        <p className="atlas-chapter mb-5">
          <span className="atlas-lead-rule" aria-hidden="true" />
          {chapter}
        </p>
      )}
      {heading}
      {lede && (
        <p className="mt-5 max-w-prose text-lg text-ink-700 leading-relaxed">
          {lede}
        </p>
      )}
    </header>
  );
};
