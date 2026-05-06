import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { site } from '../content/site';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { cn } from './ui/cn';

const CATEGORIES: Array<NonNullable<(typeof site.faq)[number]['category']>> = [
  'General',
  'Before surgery',
  'After surgery',
  'Payment',
  'Emergency',
];

export const FAQAccordion: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number] | 'All'>('All');

  const items = useMemo(() => {
    return filter === 'All' ? site.faq : site.faq.filter((f) => f.category === filter);
  }, [filter]);

  return (
    <section id="faq" className="atlas-section">
      <div className="atlas-container">
        <Reveal>
          <SectionHeading
            chapter="Common questions"
            title={
              <>
                What patients <span className="text-rose-600">ask us, often</span>.
              </>
            }
            lede="Answered plainly. If something is missing, ask us directly — that is usually where the best answers come from."
          />
        </Reveal>

        <Reveal delay={0.04}>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 pb-4 border-b border-paper-300">
            <span className="atlas-label">Filter by section</span>
            {(['All', ...CATEGORIES] as const).map((c) => (
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

        <ul className="mt-2 divide-y divide-paper-300 border-b border-paper-300">
          {items.map((item, idx) => {
            const id = `faq-${idx}-${item.category ?? 'g'}`;
            const isOpen = active === id;
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel`}
                  className="w-full grid grid-cols-[3rem_1fr_2rem] md:grid-cols-[5rem_1fr_2rem] items-baseline gap-6 py-6 md:py-7 text-left hover:bg-rose-50 transition-colors px-1"
                >
                  <span className="font-mono text-xs text-ink-500 tracking-[0.08em]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="atlas-display text-lg md:text-xl lg:text-2xl text-ink-900">
                    {item.q}
                  </span>
                  <span aria-hidden="true" className="justify-self-end text-ink-500">
                    {isOpen ? (
                      <Minus size={18} strokeWidth={1.5} />
                    ) : (
                      <Plus size={18} strokeWidth={1.5} />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={`${id}-panel`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[3.75rem] md:pl-[6.25rem] pr-1 pb-6 md:pb-7 text-ink-700 leading-relaxed max-w-prose">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <p className="atlas-figcap mt-4">
          Gathered from the clinic inbox, WhatsApp, and consultation notes.
        </p>
      </div>
    </section>
  );
};
