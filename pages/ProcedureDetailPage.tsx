import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Hotel, Home, Briefcase, Sparkles, AlertTriangle } from 'lucide-react';
import { site } from '../content/site';
import { Reveal } from '../components/ui/Reveal';
import { CTABanner } from '../components/CTABanner';

export const ProcedureDetailPage: React.FC = () => {
  const { slug } = useParams();
  const index = site.procedures.findIndex((p) => p.slug === slug);
  const procedure = index >= 0 ? site.procedures[index] : undefined;

  if (!procedure) {
    return (
      <section className="atlas-section bg-paper-100">
        <div className="atlas-container text-center max-w-xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-shell-600 mb-4">
            Procedure not found
          </p>
          <h1 className="atlas-display text-4xl md:text-5xl">We couldn't find that procedure.</h1>
          <p className="mt-6 text-ink-700">Take a look at the full list instead.</p>
          <div className="mt-8">
            <Link
              to="/procedures"
              className="inline-flex items-center gap-2 border-b border-ink-900 pb-1 text-sm hover:text-shell-600"
            >
              <ArrowLeft size={14} strokeWidth={1.5} /> Back to all procedures
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const d = procedure.detailed;

  return (
    <>
      <section className="atlas-section bg-paper-100 border-b border-ink-900/10">
        <div className="atlas-container">
          <Reveal>
            <Link
              to="/procedures"
              className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 mb-10"
            >
              <ArrowLeft size={14} strokeWidth={1.5} aria-hidden="true" />
              Back to all procedures
            </Link>

            <div className="pb-8 border-b-2 border-ink-900">
              <p className="atlas-chapter">
                <span className="atlas-lead-rule" aria-hidden="true" />
                {procedure.category}
              </p>
              <h1 className="mt-6 atlas-display text-5xl md:text-6xl lg:text-7xl text-ink-900 leading-[0.96]">
                {procedure.title}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-ink-700 leading-relaxed max-w-3xl">
                {procedure.summary}
              </p>
            </div>

            <div className="grid md:grid-cols-[1fr_14rem] gap-8 pt-8">
              <ul className="space-y-1">
                {procedure.bullets.map((b, i) => (
                  <li key={i} className="grid grid-cols-[3rem_1fr] gap-4 items-baseline">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-ink-300">
                      · {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-ink-900">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="md:border-l md:border-paper-300 md:pl-6 atlas-margin text-sm">
                {procedure.disclaimer}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="atlas-section bg-paper-100">
        <div className="atlas-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-14">
              {d && (
                <Reveal>
                  <article>
                    <p className="atlas-label mb-5">Overview</p>
                    <div className="space-y-5 text-ink-700 leading-relaxed max-w-prose">
                      {d.overview.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              )}

              {d && (
                <Reveal>
                  <article>
                    <p className="atlas-label mb-5">How the surgery works</p>
                    <p className="text-ink-700 leading-relaxed max-w-prose">{d.howItWorks}</p>
                  </article>
                </Reveal>
              )}

              <Reveal>
                <article className="grid md:grid-cols-2 gap-x-10 gap-y-8 border-t border-paper-300 pt-10">
                  <div>
                    <p className="atlas-label mb-4">Who this is for</p>
                    <p className="text-sm text-ink-700 leading-relaxed">{procedure.candidates}</p>
                  </div>
                  <div>
                    <p className="atlas-label mb-4">What happens in theatre</p>
                    <p className="text-sm text-ink-700 leading-relaxed">{procedure.procedureOverview}</p>
                  </div>
                </article>
              </Reveal>

              {d && (
                <Reveal>
                  <article>
                    <p className="atlas-label mb-5">Benefits</p>
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                      {d.benefits.map((b, i) => (
                        <li key={i} className="grid grid-cols-[2rem_1fr] gap-3 items-baseline">
                          <span className="font-mono text-[10px] tracking-[0.12em] text-shell-600">
                            {String(i + 1).padStart(2, '0')} ·
                          </span>
                          <span className="text-sm text-ink-900 leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )}

              {d && (
                <Reveal>
                  <article className="border-y-2 border-ink-900 py-8 relative">
                    <div className="flex items-start gap-4">
                      <AlertTriangle size={20} strokeWidth={1.5} className="text-signal mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="atlas-label mb-3" style={{ color: '#C23B22' }}>
                          Honest risks
                        </p>
                        <p className="text-ink-700 leading-relaxed max-w-prose">{d.honestRisks}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )}

              {d && (
                <Reveal>
                  <article className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                    <div>
                      <p className="atlas-label mb-5">Before surgery</p>
                      <ul className="space-y-3">
                        {d.preCare.map((c, i) => (
                          <li key={i} className="grid grid-cols-[2rem_1fr] gap-3 items-baseline text-sm text-ink-700 leading-snug">
                            <span className="font-mono text-[10px] text-ink-300">
                              pre.{String(i + 1).padStart(2, '0')}
                            </span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="atlas-label mb-5">After surgery</p>
                      <ul className="space-y-3">
                        {d.postCare.map((c, i) => (
                          <li key={i} className="grid grid-cols-[2rem_1fr] gap-3 items-baseline text-sm text-ink-700 leading-snug">
                            <span className="font-mono text-[10px] text-ink-300">
                              post.{String(i + 1).padStart(2, '0')}
                            </span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              )}

              {d && d.faqs.length > 0 && (
                <Reveal>
                  <article>
                    <p className="atlas-label mb-5">Patients often ask</p>
                    <dl className="divide-y divide-paper-300 border-y border-paper-300">
                      {d.faqs.map((f, i) => (
                        <div key={i} className="py-6">
                          <dt className="atlas-display text-lg md:text-xl text-ink-900 leading-snug">
                            {f.question}
                          </dt>
                          <dd className="mt-3 text-ink-700 leading-relaxed max-w-prose">{f.answer}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                </Reveal>
              )}
            </div>

            {/* Sticky sidebar — at-a-glance table */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28 h-fit space-y-6">
              {d && (
                <div className="atlas-plate bg-paper-50 relative">
                  <span className="atlas-corner atlas-corner-tl" aria-hidden="true" />
                  <span className="atlas-corner atlas-corner-tr" aria-hidden="true" />
                  <span className="atlas-corner atlas-corner-bl" aria-hidden="true" />
                  <span className="atlas-corner atlas-corner-br" aria-hidden="true" />
                  <div className="px-5 py-4 border-b border-paper-300">
                    <p className="atlas-label">At a glance</p>
                  </div>
                  <dl className="divide-y divide-paper-300">
                    {[
                      { icon: Clock, term: 'Theatre time', def: d.sessionInfo.duration },
                      { icon: Hotel, term: 'Hospital stay', def: d.sessionInfo.stay },
                      { icon: Home, term: 'Rest at home', def: d.sessionInfo.recoveryAtHome },
                      { icon: Briefcase, term: 'Back to work', def: d.sessionInfo.returnToWork },
                      { icon: Sparkles, term: 'Results visible', def: d.sessionInfo.resultsVisibleIn },
                    ].map(({ icon: Icon, term, def }) => (
                      <div key={term} className="grid grid-cols-[8.5rem_1fr] items-start px-5 py-3 gap-4">
                        <dt className="flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] uppercase text-ink-500">
                          <Icon size={13} strokeWidth={1.5} aria-hidden="true" />
                          {term}
                        </dt>
                        <dd className="text-sm text-ink-900 leading-snug">{def}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <div className="bg-ink-900 text-paper-100 p-7">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-paper-100/60 mb-3">
                  Next step
                </p>
                <p className="atlas-display text-2xl leading-tight">
                  Talk it through first.
                </p>
                <p className="mt-3 text-sm text-paper-100/75 leading-relaxed">
                  A consultation is less costly than a wrong surgical decision. Bring your reports, your questions, and someone you trust.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center w-full bg-shell-500 text-paper-50 h-12 px-5 hover:bg-shell-600 transition-colors text-sm tracking-tight"
                >
                  Book a consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        chapter="Next step"
        heading={
          <>
            Ready to take the next step? <span className="text-shell-300">We're here.</span>
          </>
        }
        body="Send a short note on WhatsApp or email. We reply within one working day."
      />
    </>
  );
};
