import React from 'react';
import { site } from '../content/site';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

/**
 * Signed block quotes — stacked, not a carousel.
 * Reads like pull-quotes on the inside cover of a book.
 */
export const TestimonialsCarousel: React.FC = () => {
  const items = site.testimonials;
  const hasTemplates = items.some((t) => t.isTemplate);

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
                : 'Reviews from patients who have agreed to share their experience.'
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
      </div>
    </section>
  );
};
