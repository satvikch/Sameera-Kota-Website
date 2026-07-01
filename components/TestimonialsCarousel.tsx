import React, { useState } from 'react';
import { Star, ArrowUpRight, Pause, Play } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { site } from '../content/site';
import type { Testimonial } from '../types';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

/**
 * Patient reviews as a continuously-scrolling marquee of cards.
 *
 * Real Google reviews (see content/site.ts) — embedded with attribution, NO
 * Review/AggregateRating schema (third-party reviews; YMYL policy).
 *
 * The marquee pauses on hover so the text is readable, and for users who prefer
 * reduced motion it degrades to a normal horizontally-swipeable row (no
 * auto-motion), so all six stay reachable either way.
 */
const ReviewCard: React.FC<{ t: Testimonial; hidden?: boolean }> = ({ t, hidden }) => (
  <figure
    aria-hidden={hidden ? 'true' : undefined}
    className="mr-6 flex w-[19rem] shrink-0 flex-col border border-paper-300 bg-paper-50 p-7"
  >
    <div className="flex items-center gap-0.5 text-rose-500" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} strokeWidth={0} className="fill-rose-500" />
      ))}
    </div>
    <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink-700 line-clamp-6">
      {t.text}
    </blockquote>
    <figcaption className="mt-auto pt-6">
      <p className="atlas-display text-base text-ink-900">{t.name}</p>
      <p className="atlas-label-tight text-ink-500 mt-1">{t.procedure}</p>
      {t.source === 'Google' && (
        <p className="mt-2 font-mono text-[9px] tracking-[0.18em] uppercase text-ink-500">
          Google review · {t.dateLabel}
        </p>
      )}
    </figcaption>
  </figure>
);

export const TestimonialsCarousel: React.FC = () => {
  const items: readonly Testimonial[] = site.testimonials;
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);

  const { reviewsUrl, googleRating, googleReviewCount } = site.doctor.practice;
  const hasAggregate =
    !!googleRating &&
    !googleRating.startsWith('{{') &&
    !!googleReviewCount &&
    !googleReviewCount.startsWith('{{');

  return (
    <section className="atlas-section">
      <div className="atlas-container">
        <Reveal>
          <SectionHeading
            chapter="Patient reviews"
            title={
              <>
                What patients say, <span className="text-rose-600">in their own words</span>.
              </>
            }
            lede="Real reviews left by patients on Google. Hover to pause; read the full set on the practice’s Google profile."
          />
        </Reveal>
      </div>

      {/* Marquee — full-bleed track. Pauses on hover so text is readable. */}
      {reduced ? (
        <div className="atlas-container mt-12">
          <div className="-mx-1 flex w-full snap-x overflow-x-auto px-1 pb-2">
            {items.map((t) => (
              <div key={t.id} className="snap-start">
                <ReviewCard t={t} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="group relative mt-12 flex overflow-hidden">
          <div
            className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
            style={paused ? { animationPlayState: 'paused' } : undefined}
          >
            {items.map((t) => (
              <ReviewCard key={t.id} t={t} />
            ))}
            {items.map((t) => (
              <ReviewCard key={`dup-${t.id}`} t={t} hidden />
            ))}
          </div>
          {/* WCAG 2.2.2 pause control — and tap-to-read on touch, where there is no hover. */}
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Resume scrolling reviews' : 'Pause scrolling reviews'}
            className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-paper-300 bg-paper-50/90 text-ink-700 backdrop-blur transition-colors hover:border-rose-400 hover:text-rose-600 sm:bottom-4 sm:right-6"
          >
            {paused ? (
              <Play size={15} strokeWidth={2} className="ml-0.5 fill-current" aria-hidden="true" />
            ) : (
              <Pause size={15} strokeWidth={2} className="fill-current" aria-hidden="true" />
            )}
          </button>
        </div>
      )}

      {reviewsUrl && (
        <div className="atlas-container mt-12">
          <Reveal>
            <div className="border-t border-ink-900 pt-8">
              <a
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-900 transition-colors hover:text-rose-600"
              >
                <Star size={14} strokeWidth={2} className="fill-rose-500 text-rose-500" aria-hidden="true" />
                {hasAggregate
                  ? `${googleRating} · ${googleReviewCount} reviews on Google`
                  : 'Read our reviews on Google'}
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
};
