import React from 'react';
import { site } from '../content/site';
import { Reveal } from '../components/ui/Reveal';
import { Seo } from '../components/ui/Seo';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

export type LegalSlug = keyof typeof site.legalPages;

// One generic component for all three policy pages, driven by site.legalPages.
export const LegalPage: React.FC<{ slug: LegalSlug }> = ({ slug }) => {
  const page = site.legalPages[slug];

  return (
    <>
      <Seo
        title={`${page.title} · Dr. Sameera K`}
        description={page.metaDescription}
        path={`/${slug}`}
      />
      <section className="atlas-section bg-paper-100">
        <div className="atlas-container max-w-3xl">
          <Reveal>
            <Breadcrumbs
              className="mb-6"
              trail={[{ label: 'Home', to: '/' }, { label: page.title }]}
            />
            <p className="atlas-chapter mb-5">
              <span className="atlas-lead-rule" aria-hidden="true" />
              Legal
            </p>
            <h1 className="atlas-display text-4xl md:text-5xl text-ink-900 leading-[1.04]">
              {page.title}
            </h1>
            {page.intro && (
              <p className="mt-6 text-lg text-ink-700 leading-relaxed max-w-prose">
                {page.intro}
              </p>
            )}
            <p className="mt-4 font-mono text-[10px] tracking-[0.16em] uppercase text-ink-500">
              Last updated: {page.lastUpdated}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-12 space-y-10 border-t border-paper-300 pt-10">
              {page.sections.map((s, i) => (
                <section key={i}>
                  <h2 className="atlas-display text-xl md:text-2xl text-ink-900 leading-tight mb-4">
                    {s.heading}
                  </h2>
                  <div className="space-y-4 text-ink-700 leading-relaxed max-w-prose">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};
