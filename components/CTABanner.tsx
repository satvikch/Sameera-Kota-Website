import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

interface CTABannerProps {
  chapter?: string;
  heading: React.ReactNode;
  body?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  chapter = 'Next step',
  heading,
  body,
  primaryLabel = 'Book a consultation',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
}) => {
  return (
    <section className="atlas-section bg-ink-900 text-paper-100 relative">
      <div className="atlas-container">
        <Reveal>
          <div className="pb-6 border-b border-paper-100/30">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper-100/70">
              <span className="inline-block w-8 h-px bg-paper-100/40 align-middle mr-3" />
              {chapter}
            </p>
          </div>
          <div className="pt-12 pb-2 grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="atlas-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.96] max-w-[22ch]">
                {heading}
              </h2>
              {body && (
                <p className="mt-8 text-lg md:text-xl text-paper-100/75 leading-relaxed max-w-2xl">
                  {body}
                </p>
              )}
            </div>
            <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col gap-3">
              <Link
                to={primaryHref}
                className="inline-flex items-center justify-center gap-3 bg-rose-400 text-paper-100 h-14 px-7 rounded-full shadow-[0_8px_20px_-10px_rgba(192,62,100,0.55)] hover:bg-rose-500 transition-colors group"
              >
                <span className="text-sm tracking-tight">{primaryLabel}</span>
                <ArrowUpRight size={18} strokeWidth={1.5} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  to={secondaryHref}
                  className="inline-flex items-center justify-center border-[1.5px] border-paper-100/40 text-paper-100 h-14 px-7 rounded-full hover:border-paper-100 hover:bg-paper-100/5 transition-colors"
                >
                  <span className="text-sm tracking-tight">{secondaryLabel}</span>
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
