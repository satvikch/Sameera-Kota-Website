import React from 'react';
import { Plus } from 'lucide-react';
import { cn } from './cn';

interface DisclosureProps {
  summary: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * Progressive-disclosure primitive built on native <details>/<summary>.
 *
 * Collapsed by default to keep mobile pages compact, but the content stays in
 * the DOM — so it remains fully crawlable/indexable (Google indexes content
 * inside <details>) and keyboard/screen-reader accessible with zero JavaScript.
 */
export const Disclosure: React.FC<DisclosureProps> = ({
  summary,
  children,
  defaultOpen = false,
  className,
}) => (
  <details open={defaultOpen} className={cn('group border-t border-paper-300', className)}>
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
      <span className="atlas-display text-lg md:text-xl leading-snug text-ink-900">
        {summary}
      </span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper-300 text-ink-500 transition-colors group-open:border-rose-400 group-open:text-rose-600">
        <Plus
          size={16}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-open:rotate-45"
          aria-hidden="true"
        />
      </span>
    </summary>
    <div className="pb-8">{children}</div>
  </details>
);
