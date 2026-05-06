import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, ScanSearch, Activity } from 'lucide-react';
import { site } from '../content/site';
import { ProcedureCard } from '../components/ProceduresBentoGrid';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { CTABanner } from '../components/CTABanner';
import { cn } from '../components/ui/cn';

const CATEGORIES = ['All', 'Proctology', 'Laparoscopy', 'Emergency', "Women's Surgery"] as const;
type Category = (typeof CATEGORIES)[number];

const MINIMALLY_INVASIVE_POINTS = [
  {
    icon: ScanSearch,
    title: 'Smaller openings',
    description:
      'Keyhole incisions — each usually under 1 cm — replace the long cut of traditional surgery. Less pain, less bleeding, smaller scars, and a faster return home.',
  },
  {
    icon: Zap,
    title: 'Laser, where appropriate',
    description:
      'For piles, fissures and fistula, a diode laser seals and shrinks diseased tissue from within, without cutting through sensitive skin. Most patients recover at home in a day or two.',
  },
  {
    icon: Activity,
    title: 'Chosen case by case',
    description:
      'Not every problem needs keyhole surgery — and not every patient is a candidate. The technique is chosen only after examining you and your reports. Open surgery is still the right choice for some cases.',
  },
];

export const ProceduresPage: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');

  const items = useMemo(() => {
    return filter === 'All'
      ? site.procedures
      : site.procedures.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      {/* ───────────────────── 1 · Page heading ───────────────────── */}
      <section className="atlas-section">
        <div className="atlas-container">
          <Reveal>
            <SectionHeading
              as="h1"
              chapter="Procedures"
              title={
                <>
                  The full list, <span className="text-rose-600">with the detail.</span>
                </>
              }
              lede="Every procedure here has a dedicated page — an overview, how the surgery works, honest risks, hospital stay, recovery time, and the questions patients ask most often. Nothing is hidden behind sales copy."
            />
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── 2 · Intro — why minimally invasive ───────────────────── */}
      <section className="atlas-section bg-paper-200">
        <div className="atlas-container">
          <Reveal>
            <div className="grid gap-y-10 lg:grid-cols-12 gap-x-12 items-start">
              <div className="lg:col-span-5">
                <p className="atlas-chapter mb-5">
                  <span className="atlas-lead-rule" aria-hidden="true" />
                  Our approach
                </p>
                <h2 className="atlas-display text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-[1.05] max-w-[16ch]">
                  Why <span className="text-rose-600">minimally invasive</span> matters.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-8">
                {MINIMALLY_INVASIVE_POINTS.map((point) => {
                  const Icon = point.icon;
                  return (
                    <article
                      key={point.title}
                      className="grid md:grid-cols-[3rem_1fr] gap-5 pb-8 border-b border-paper-300 last:border-b-0 last:pb-0"
                    >
                      <span className="flex h-10 w-10 items-center justify-center border border-ink-900 bg-paper-50 text-ink-900">
                        <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="atlas-display text-xl md:text-2xl text-ink-900 leading-tight mb-2">
                          {point.title}
                        </h3>
                        <p className="text-ink-700 leading-relaxed max-w-prose">
                          {point.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── 3 · Conditions-first navigation ───────────────────── */}
      <section className="atlas-section">
        <div className="atlas-container">
          <Reveal>
            <SectionHeading
              chapter="Start with your concern"
              title={
                <>
                  Browse by <span className="text-rose-600">condition</span>, not procedure.
                </>
              }
              lede="Most patients know what they're feeling, not the name of the surgery for it. Find your concern below — we'll take you to the right page."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {site.conditions.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/procedures/${c.procedureSlug}`}
                    className="group flex items-baseline gap-4 p-5 border border-paper-300 bg-paper-50 hover:border-rose-400 hover:bg-rose-50 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="atlas-display text-lg text-ink-900 leading-tight group-hover:text-rose-700 transition-colors">
                        {c.name}
                      </p>
                      <p className="atlas-label-tight text-ink-500 mt-1 uppercase">
                        {c.patientLanguage}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="text-ink-300 group-hover:text-rose-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── 4 · Procedure grid with filter ───────────────────── */}
      <section className="atlas-section">
        <div className="atlas-container">
          <Reveal>
            <SectionHeading
              chapter="Complete index"
              title={
                <>
                  Every procedure <span className="text-rose-600">Dr. Sameera performs</span>.
                </>
              }
              lede="Filter by discipline below, or browse the full list."
            />
          </Reveal>

          <Reveal delay={0.04}>
            <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 pb-6 border-b border-paper-300">
              <span className="atlas-label">Filter by discipline</span>
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={cn(
                    'font-mono text-[11px] tracking-[0.12em] uppercase pb-1 border-b transition-colors',
                    filter === c
                      ? 'text-ink-900 border-ink-900'
                      : 'text-ink-500 border-transparent hover:text-ink-900 hover:border-ink-300'
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {items.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <ProcedureCard procedure={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-12 font-mono text-xs tracking-[0.16em] uppercase text-ink-500">
              No procedures in this section.
            </p>
          )}

          <p className="mt-8 font-mono text-[10px] tracking-[0.16em] uppercase text-ink-500">
            Showing {items.length} of {site.procedures.length} procedures
          </p>
        </div>
      </section>

      <CTABanner
        chapter="Not sure which one?"
        heading={
          <>
            Unsure which procedure you need? <span className="text-rose-300">Start with a consultation.</span>
          </>
        }
        body="A consultation exists for exactly this — to examine, explain, and tell you whether surgery is the right path, and which one."
      />
    </>
  );
};
