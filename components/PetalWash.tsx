import React from 'react';

/**
 * Photographed-watercolor accents anchored at page corners as a vignette,
 * NOT a full-canvas wash. Each splash is mostly off-screen, fades inward
 * via a radial-gradient mask so content zones stay clean for body text,
 * and is multiplied over white so the photo's white background disappears
 * and only the pigment shows. Pointer-events none. Hidden in print.
 *
 * Sourced from Pexels (free for commercial use, no attribution required).
 *
 * Asset credits:
 *   Photo by Graphizy on Pexels (#12509458)
 *   Photo by Artem Podrez on Pexels (#7233351)
 */
export const PetalWash: React.FC = () => (
  <div
    className="petal-wash pointer-events-none fixed inset-0 overflow-hidden"
    aria-hidden="true"
    style={{ zIndex: 0 }}
  >
    {/* Top-right corner accent. Fades inward so it never crosses into hero text. */}
    <img
      src="https://images.pexels.com/photos/12509458/pexels-photo-12509458.jpeg?auto=compress&cs=srgb&w=1400"
      alt=""
      loading="eager"
      decoding="async"
      className="absolute -top-48 -right-56 w-[55vw] max-w-[760px] h-auto select-none"
      style={{
        opacity: 0.22,
        mixBlendMode: 'multiply',
        WebkitMaskImage:
          'radial-gradient(ellipse at top right, black 0%, black 30%, transparent 75%)',
        maskImage:
          'radial-gradient(ellipse at top right, black 0%, black 30%, transparent 75%)',
      }}
    />

    {/* Bottom-left corner accent. Same vignette, mirrored. */}
    <img
      src="https://images.pexels.com/photos/7233351/pexels-photo-7233351.jpeg?auto=compress&cs=srgb&w=1200"
      alt=""
      loading="lazy"
      decoding="async"
      className="absolute -bottom-48 -left-56 w-[50vw] max-w-[700px] h-auto select-none"
      style={{
        opacity: 0.16,
        mixBlendMode: 'multiply',
        transform: 'rotate(155deg)',
        WebkitMaskImage:
          'radial-gradient(ellipse at center, black 0%, black 35%, transparent 80%)',
        maskImage:
          'radial-gradient(ellipse at center, black 0%, black 35%, transparent 80%)',
      }}
    />
  </div>
);
