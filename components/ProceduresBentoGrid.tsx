import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Activity,
  Droplets,
  Footprints,
  HeartHandshake,
  Shield,
  Stethoscope,
  Zap,
} from 'lucide-react';
import { site } from '../content/site';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

// Module-level icon map — only the icons referenced by `procedure.icon` in site.ts.
// Keeping this explicit lets Vite tree-shake the rest of lucide-react.
const PROCEDURE_ICONS: Record<string, React.ElementType> = {
  Activity,
  Droplets,
  Footprints,
  HeartHandshake,
  Shield,
  Stethoscope,
  Zap,
};

interface ProcedureCardProps {
  procedure: (typeof site.procedures)[number];
  index?: number;
}

/**
 * A procedure card with image on top and caption below.
 * When `imageUrl` is a live URL, shows the photo; when placeholder, shows a
 * branded "image forthcoming" plate using the procedure's Lucide icon.
 */
export const ProcedureCard: React.FC<ProcedureCardProps> = ({ procedure }) => {
  const Icon = PROCEDURE_ICONS[procedure.icon] ?? Activity;
  const hasImage = procedure.imageUrl && !procedure.imageUrl.startsWith('{{');

  return (
    <Link
      to={`/procedures/${procedure.slug}`}
      className="group relative flex flex-col h-full bg-paper-100 border border-paper-300 rounded-2xl overflow-hidden shadow-[0_4px_16px_-12px_rgba(60,30,50,0.10)] hover:shadow-[0_20px_40px_-16px_rgba(164,48,79,0.25)] hover:border-rose-400 transition-all duration-300"
    >

      {/* Image region */}
      <div className="aspect-[16/10] bg-rose-100 overflow-hidden relative">
        {hasImage ? (
          <img
            src={procedure.imageUrl}
            alt={procedure.imageAlt ?? procedure.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #FFF1F4 0%, #FFDCE3 60%, #FBB8C5 100%)',
            }}
          >
            <Icon size={56} strokeWidth={1.1} className="text-rose-700 mb-3" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-rose-700">
              Image forthcoming
            </p>
          </div>
        )}
      </div>

      {/* Caption */}
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <p className="atlas-label mb-3">{procedure.category}</p>
        <h3 className="atlas-display text-xl md:text-2xl text-ink-900 leading-[1.1] group-hover:text-rose-600 transition-colors">
          {procedure.title}
        </h3>
        <span
          className="inline-block w-10 h-px bg-rose-500 mt-5 group-hover:w-16 transition-all duration-300"
          aria-hidden="true"
        />
        <p className="mt-4 text-sm text-ink-700 leading-relaxed line-clamp-3">
          {procedure.summary}
        </p>
        <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm tracking-tight text-ink-900 group-hover:text-rose-600 transition-colors">
          Read the full page
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
};

interface FeaturedProceduresProps {
  limit?: number;
}

export const FeaturedProcedures: React.FC<FeaturedProceduresProps> = ({ limit }) => {
  const items = typeof limit === 'number' ? site.procedures.slice(0, limit) : site.procedures;
  return (
    <section id="procedures" className="atlas-section">
      <div className="atlas-container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-ink-900">
            <SectionHeading
              chapter="Procedures"
              title={
                <>
                  What Dr. Sameera K <span className="text-rose-600">treats</span>.
                </>
              }
              lede="Click any procedure to read the full page — what it is, how the surgery works, what recovery looks like, and the questions patients ask most."
            />
            <Link
              to="/procedures"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-700 hover:text-rose-600 transition-colors border-b border-ink-900 pb-1 self-start md:self-end"
            >
              See all procedures
              <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProcedureCard procedure={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProceduresBentoGrid = FeaturedProcedures;
