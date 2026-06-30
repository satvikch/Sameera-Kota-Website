import React from 'react';

interface LogoProps {
  /** 'plate' = square with atlas corner-ticks; 'signet' = a ring seal. */
  variant?: 'plate' | 'signet';
  className?: string;
}

const INK = '#1F1418';
const ROSE = '#C94668';

/**
 * Brand monogram for Dr. Sameera K.
 *
 * Built from the site's own signature — the "atlas plate" corner-ticks — with
 * the initials set in the display face (Bricolage Grotesque). Decorative: the
 * surrounding link/text carries the accessible name, so this is aria-hidden.
 */
export const Logo: React.FC<LogoProps> = ({ variant = 'plate', className }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
    {variant === 'plate' ? (
      <g fill="none" stroke={ROSE} strokeWidth="1.4" strokeLinecap="square">
        <path d="M3 11 L3 3 L11 3" />
        <path d="M29 3 L37 3 L37 11" />
        <path d="M37 29 L37 37 L29 37" />
        <path d="M11 37 L3 37 L3 29" />
      </g>
    ) : (
      <>
        <circle cx="20" cy="20" r="18" fill="none" stroke={INK} strokeWidth="1.1" />
        <circle cx="20" cy="3.4" r="1.5" fill={ROSE} />
      </>
    )}
    <text
      x="20"
      y="27"
      textAnchor="middle"
      fontFamily='"Bricolage Grotesque", ui-sans-serif, sans-serif'
      fontSize="19"
      fontWeight="600"
      letterSpacing="-0.5"
      fill={INK}
      style={{ fontVariationSettings: '"opsz" 18, "wght" 600' }}
    >
      SK
    </text>
  </svg>
);
