import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '../content/site';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { cn } from './ui/cn';

/**
 * Pathway — a horizontal ruled flow on desktop, stacked on mobile.
 * Each step expands inline (no modal). Reads like a surgical protocol document.
 */
export const Process: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="atlas-section bg-paper-50 border-t border-paper-300">
      <div className="atlas-container">
        <Reveal>
          <SectionHeading
            chapter="What to expect"
            title={
              <>
                From the first call to the <span className="text-rose-500">final review</span>.
              </>
            }
            lede="Five stages. Each one with written instructions you take home at the end of it."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14 border-y-2 border-ink-900">
            {/* Step index strip */}
            <ol className="grid grid-cols-2 md:grid-cols-5 divide-x divide-paper-300">
              {site.processSteps.map((step, i) => {
                const isActive = active === step.number;
                return (
                  <li key={step.number}>
                    <button
                      type="button"
                      onClick={() => setActive(isActive ? null : step.number)}
                      aria-expanded={isActive}
                      aria-controls={`step-${step.number}`}
                      className={cn(
                        'group w-full text-left px-5 py-8 transition-colors h-full',
                        isActive
                          ? 'bg-ink-900 text-paper-100'
                          : 'bg-paper-50 hover:bg-rose-50'
                      )}
                    >
                      <span
                        className={cn(
                          'font-mono text-[10px] tracking-[0.16em] uppercase block mb-3',
                          isActive ? 'text-paper-100/60' : 'text-ink-500'
                        )}
                      >
                        Step {step.number}
                      </span>
                      <span className="atlas-display text-xl md:text-2xl leading-tight block">
                        {step.title}
                      </span>
                      <span className="inline-flex items-center gap-2 mt-6 text-xs tracking-tight">
                        {isActive ? (
                          <>
                            <Minus size={14} strokeWidth={1.5} /> Close
                          </>
                        ) : (
                          <>
                            <Plus size={14} strokeWidth={1.5} /> Open detail
                          </>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* Expanded panel — spans full width, fold-out */}
            <AnimatePresence initial={false}>
              {site.processSteps.map((step) => {
                if (active !== step.number) return null;
                return (
                  <motion.div
                    key={step.number}
                    id={`step-${step.number}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                    className="overflow-hidden bg-paper-100 border-t-2 border-ink-900"
                  >
                    <div className="px-6 md:px-10 py-10 grid gap-8 md:grid-cols-3">
                      <div>
                        <p className="atlas-label mb-3">What happens</p>
                        <p className="text-sm text-ink-700 leading-relaxed">{step.detail.what}</p>
                      </div>
                      <div>
                        <p className="atlas-label mb-3">What to expect</p>
                        <p className="text-sm text-ink-700 leading-relaxed">{step.detail.expect}</p>
                      </div>
                      <div>
                        <p className="atlas-label mb-3">Outcome</p>
                        <p className="text-sm text-ink-700 leading-relaxed">{step.detail.outcome}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {!active && (
              <p className="atlas-figcap border-t border-paper-300 px-5 py-3">
                Tap any step to read what happens.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
