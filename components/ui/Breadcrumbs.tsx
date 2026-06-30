import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from './cn';

export interface Crumb {
  label: string;
  /** Link target; omit on the current (last) crumb. */
  to?: string;
}

/**
 * Visible breadcrumb trail. Pair with the BreadcrumbList JSON-LD built from the
 * same trail (see components/ui/jsonld.ts → breadcrumbLd) so the markup and the
 * structured data never drift.
 */
export const Breadcrumbs: React.FC<{ trail: Crumb[]; className?: string }> = ({
  trail,
  className,
}) => (
  <nav aria-label="Breadcrumb" className={className}>
    <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase text-ink-500">
      {trail.map((c, i) => {
        const last = i === trail.length - 1;
        return (
          <li key={i} className="flex items-center gap-2">
            {c.to && !last ? (
              <Link to={c.to} className="hover:text-rose-600 transition-colors">
                {c.label}
              </Link>
            ) : (
              <span
                aria-current={last ? 'page' : undefined}
                className={cn(last && 'text-ink-900')}
              >
                {c.label}
              </span>
            )}
            {!last && (
              <span aria-hidden="true" className="text-ink-300">
                /
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);
