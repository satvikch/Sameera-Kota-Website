import React from 'react';
import { Lock, Camera, HeartHandshake } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { CTABanner } from '../components/CTABanner';

const NOTES = [
  {
    icon: Lock,
    term: '01 · Consent first',
    body:
      'We will not publish a before-and-after photo without written consent specifying where it may appear. Most of our patients — particularly in proctology and breast surgery — prefer not to share, and that is a choice we respect.',
  },
  {
    icon: Camera,
    term: '02 · Clinical photography',
    body:
      'For visible procedures — scars from laparoscopic or thyroid work, wound healing over time — we maintain a private, anonymised image library. Relevant plates are shown during consultation, on paper, not here.',
  },
  {
    icon: HeartHandshake,
    term: '03 · Publication threshold',
    body:
      'A public plate of results is only meaningful once the consented image set is wide enough to represent actual variation in outcomes. Small samples make before-and-afters misleading. Until that threshold, this page stays as it is.',
  },
];

export const ResultsPage: React.FC = () => {
  return (
    <>
      <section className="atlas-section bg-paper-100">
        <div className="atlas-container">
          <Reveal>
            <SectionHeading
              as="h1"
              chapter="Results"
              title={
                <>
                  Outcomes we'll share <span className="text-shell-500">when it is right to</span>.
                </>
              }
              lede="A public gallery of before-and-after surgical results is coming — but only once we have a consented, representative set of photographs."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="mt-14 border-y-2 border-ink-900 divide-y divide-paper-300">
              {NOTES.map((n) => {
                const Icon = n.icon;
                return (
                  <div key={n.term} className="grid md:grid-cols-[10rem_1fr] gap-x-8 gap-y-3 px-6 py-8">
                    <dt className="flex items-baseline gap-3 font-mono text-xs tracking-[0.1em] uppercase text-ink-500">
                      <Icon size={14} strokeWidth={1.5} aria-hidden="true" />
                      {n.term}
                    </dt>
                    <dd className="text-ink-900 leading-relaxed max-w-prose">{n.body}</dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14 atlas-plate bg-paper-50 relative">
              <span className="atlas-corner atlas-corner-tl" aria-hidden="true" />
              <span className="atlas-corner atlas-corner-tr" aria-hidden="true" />
              <span className="atlas-corner atlas-corner-bl" aria-hidden="true" />
              <span className="atlas-corner atlas-corner-br" aria-hidden="true" />
              <div className="aspect-[16/7] flex items-center justify-center text-center px-10">
                <div>
                  <p className="atlas-label mb-4">Gallery — coming soon</p>
                  <p className="atlas-display text-3xl md:text-4xl text-ink-700 leading-tight max-w-[28ch] mx-auto">
                    Before-and-after sliders will go here, once the image set is ready.
                  </p>
                </div>
              </div>
              <div className="border-t border-paper-300 px-5 py-3">
                <p className="atlas-figcap">Reserved for consented patient photographs.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        chapter="Ask us directly"
        heading={
          <>
            Want to know what the outcome might look like <span className="text-shell-300">for you?</span>
          </>
        }
        body="Relevant anonymised, consented photographs are reviewed privately during your consultation."
      />
    </>
  );
};
