import React from 'react';
import { site } from '../content/site';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

/**
 * Principles — long-form essay with marginalia.
 * Each of the four whyChooseUs entries becomes a paragraph with its title surfaced
 * in the right-hand margin as an italic marginal note (textbook style).
 */
export const WhyChooseUs: React.FC = () => {
  return (
    <section className="atlas-section bg-paper-200 border-t border-paper-300 relative overflow-hidden">
      <div className="atlas-container">
        <Reveal>
          <SectionHeading
            chapter="How we work"
            title={
              <>
                Four things that shape <span className="text-shell-500">every decision</span> at this clinic.
              </>
            }
            lede="No four-card bento. Just a short read, in plain language."
          />
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-x-10 gap-y-4">
          <div className="lg:col-span-8">
            {site.whyChooseUs.map((card, i) => (
              <Reveal key={card.number} delay={i * 0.06}>
                <article className="relative py-10 border-t border-paper-300 first:border-t-0">
                  <div className="flex items-baseline gap-6 mb-5">
                    <span className="font-mono text-xs tracking-[0.1em] text-shell-600 flex-shrink-0">
                      {card.number}
                    </span>
                    <h3 className="atlas-display text-2xl md:text-3xl text-ink-900 leading-[1.05]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-ink-700 leading-relaxed max-w-prose pl-16">
                    {card.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Margin column — desktop only */}
          <aside className="hidden lg:block lg:col-span-4 relative pt-10" aria-hidden="true">
            <div className="sticky top-28 pl-8 border-l border-paper-300 space-y-16">
              {site.whyChooseUs.map((card) => (
                <div key={card.number} className="relative">
                  <span className="absolute -left-8 top-2 w-6 h-px bg-shell-400" />
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-500 mb-1">
                    {card.number}
                  </p>
                  <p className="atlas-margin text-lg leading-snug">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
