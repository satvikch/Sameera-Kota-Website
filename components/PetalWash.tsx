import React from 'react';

/**
 * Two large rose/peony washes painted onto the canvas as fixed background.
 * Heavy Gaussian blur softens path edges into watercolor-like wash.
 * Pointer-events:none so it never intercepts. Hidden in print.
 */
export const PetalWash: React.FC = () => (
  <div
    className="petal-wash pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <svg
      className="absolute -top-24 -right-24 w-[60vw] max-w-[820px] h-auto opacity-60"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="petal-blur-rose" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="80" />
        </filter>
      </defs>
      <path
        fill="#FFDCE3"
        filter="url(#petal-blur-rose)"
        d="M420 90c70 30 130 90 140 175s-30 175-110 220-180 35-250-15-110-145-90-225 100-150 175-160 95-15 135 5z"
      />
    </svg>
    <svg
      className="absolute -bottom-32 -left-32 w-[55vw] max-w-[760px] h-auto opacity-50"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="petal-blur-peony" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="90" />
        </filter>
      </defs>
      <path
        fill="#F6EEFF"
        filter="url(#petal-blur-peony)"
        d="M120 180c80-50 200-70 290-25s145 145 130 235-110 165-210 165-205-65-235-150-55-175 25-225z"
      />
    </svg>
    <svg
      className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40vw] max-w-[560px] h-auto opacity-40"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="petal-blur-cream" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="100" />
        </filter>
      </defs>
      <path
        fill="#FFF6E8"
        filter="url(#petal-blur-cream)"
        d="M280 100c90-10 200 30 240 110s10 195-65 260-205 70-285 15-115-180-85-260 105-115 195-125z"
      />
    </svg>
  </div>
);
