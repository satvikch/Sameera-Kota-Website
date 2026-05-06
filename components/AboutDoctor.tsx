import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Quote } from 'lucide-react';
import { site } from '../content/site';
import { Reveal } from './ui/Reveal';

/**
 * Home-page "About" teaser.
 *
 * Quote-led layout that says something about the doctor's voice without
 * duplicating the content of the dedicated /about page. Short bio, clear
 * CTA to the full story.
 *
 * The full deep-read lives in pages/AboutPage.tsx.
 */
export const AboutDoctor: React.FC = () => {
  const { doctor } = site;

  return (
    <section id="about" className="atlas-section bg-paper-100 border-t border-paper-300">
      <div className="atlas-container">
        <div className="grid gap-y-14 lg:grid-cols-12 gap-x-12 items-start">
          {/* Pull-quote plate — left */}
          <Reveal className="lg:col-span-7">
            <figure className="relative bg-rose-50 border border-rose-100 p-8 md:p-12 lg:p-16">
              <Quote
                size={40}
                strokeWidth={1.1}
                className="text-rose-400 mb-8"
                aria-hidden="true"
              />
              <blockquote className="atlas-display atlas-display-tight text-2xl md:text-3xl lg:text-4xl text-ink-900 leading-[1.15] max-w-[28ch]">
                &ldquo;{doctor.philosophy}&rdquo;
              </blockquote>
              <figcaption className="mt-10 pt-6 border-t border-rose-200 flex items-center gap-4">
                <span className="inline-block w-10 h-px bg-rose-500" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-700">
                    {doctor.name}
                  </p>
                  <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-ink-500 mt-0.5">
                    {doctor.qualifications.join(' · ')}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Short intro + CTA — right */}
          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-6">
            <p className="atlas-chapter mb-5">
              <span className="atlas-lead-rule" aria-hidden="true" />
              About the surgeon
            </p>
            <h2 className="atlas-display text-3xl md:text-4xl lg:text-5xl text-ink-900 max-w-[18ch] leading-[1.05]">
              A surgeon who&rsquo;d rather <span className="text-rose-500">explain</span> than sell.
            </h2>
            <p className="mt-8 text-base md:text-lg text-ink-700 leading-relaxed max-w-prose">
              {doctor.bio[0]}
            </p>
            <div className="mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 group text-sm tracking-tight text-ink-900 border-b border-ink-900 pb-1 hover:border-rose-500 hover:text-rose-600 transition-colors"
              >
                Read the full story
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
