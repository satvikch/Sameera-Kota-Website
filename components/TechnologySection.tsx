import React from 'react';
import { site } from '../content/site';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

/**
 * Instrument inventory — a clean tabular listing, not a card grid.
 */
export const TechnologySection: React.FC = () => {
  return (
    <section className="atlas-section">
      <div className="atlas-container">
        <Reveal>
          <SectionHeading
            chapter="Equipment"
            title={
              <>
                Tools chosen for the <span className="text-rose-600">patient</span>, not the brochure.
              </>
            }
            lede="A short, honest list. Each item is here because it changes how surgery feels, or how recovery goes."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14 border-y-2 border-ink-900">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-[6rem_1fr_2fr] gap-8 px-6 py-4 border-b border-paper-300 bg-paper-200">
              <span className="atlas-label">No.</span>
              <span className="atlas-label">Equipment</span>
              <span className="atlas-label">Where it helps</span>
            </div>
            <ul>
              {site.technology.map((item, i) => (
                <li
                  key={item.title}
                  className="grid grid-cols-1 md:grid-cols-[6rem_1fr_2fr] gap-x-8 gap-y-3 px-6 py-8 border-b border-paper-300 last:border-b-0 hover:bg-rose-50 transition-colors"
                >
                  <span className="font-mono text-xs tracking-[0.12em] text-ink-500 md:self-start">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="atlas-display text-xl text-ink-900">{item.title}</p>
                    <p className="text-sm text-ink-700 mt-1 max-w-md">{item.note}</p>
                  </div>
                  <p className="text-sm text-ink-700 leading-relaxed">{item.details}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
