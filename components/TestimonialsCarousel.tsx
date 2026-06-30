import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { site } from '../content/site';
import type { Testimonial } from '../types';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

/**
 * Signed block quotes — stacked, not a carousel.
 * Reads like pull-quotes on the inside cover of a book.
 *
 * These are real reviews left on Google, attributed per card with a link to the
 * verbatim source. We intentionally render NO Review/AggregateRating JSON-LD —
 * see the note in content/site.ts (testimonials).
 */
export const TestimonialsCarousel: React.FC = () => {
  const items: readonly Testimonial[] = site.testimonials;
  const hasTemplates = items.some((t) => t.isTemplate);

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
            lede={
              hasTemplates
                ? 'These are example reviews, clearly marked as templates, until real reviews are collected with patient consent. Google reviews will be linked here before launch.'
                : 'Reviews left by patients on Google. Read the full set, in their own words, on the practice’s Google profile.'
            }
          />
        </Reveal>

        <div className="mt-14 space-y-12 lg:space-y-16">
          {items.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <figure className="relative border-t border-ink-900 pt-10 md:pt-12">
                {/* Big quote mark */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 -top-1 font-display text-6xl md:text-7xl text-rose-500 leading-none select-none"
                  style={{ fontVariationSettings: '"opsz" 96, "wght" 500' }}
                >
                  &ldquo;
                </span>
                <div className="pl-12 md:pl-20 grid md:grid-cols-[1fr_14rem] gap-8 md:gap-12 items-start">
                  <blockquote className="atlas-display atlas-display-tight text-2xl md:text-3xl lg:text-4xl text-ink-900 max-w-[28ch]">
                    {t.text}
                  </blockquote>
                  <figcaption className="pt-2 border-l md:border-l-0 md:border-t border-paper-300 md:pt-4 pl-4 md:pl-0">
                    <p className="atlas-display text-lg text-ink-900">{t.name}</p>
                    <p className="atlas-label-tight text-ink-500 mt-1">{t.procedure}</p>
                    {t.source === 'Google' && (
                      <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] uppercase text-ink-500">
                        <Star size={11} strokeWidth={2} className="fill-rose-500 text-rose-500" aria-hidden="true" />
                        Google review · {t.dateLabel}
                      </p>
                    )}
                    {t.isTemplate && (
                      <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] uppercase text-rose-600 border border-rose-400 px-2 py-1">
                        Template review
                      </p>
                    )}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        {reviewsUrl && (
          <Reveal delay={0.1}>
            <div className="mt-14 border-t border-ink-900 pt-8">
              <a
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-mono text-xs tracking-[0.18em] uppercase text-ink-900 hover:text-rose-600 transition-colors"
              >
                <Star size={14} strokeWidth={2} className="fill-rose-500 text-rose-500" aria-hidden="true" />
                {hasAggregate
                  ? `${googleRating} · ${googleReviewCount} reviews on Google`
                  : 'Read our reviews on Google'}
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};
