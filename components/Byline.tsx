import React from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck } from 'lucide-react';
import { site } from '../content/site';

interface BylineProps {
  /** Defaults to the site-wide last-review date. */
  reviewedDate?: string;
}

/**
 * Authorship / clinical-review signal for medical (YMYL) content — an E-E-A-T
 * requirement. Names the qualified author and the last review date.
 *
 * NOTE: this asserts that Dr. Sameera K has reviewed the content. She must
 * actually review the clinical copy before launch for this to be truthful
 * (see DOCTOR_VERIFICATION.md).
 */
export const Byline: React.FC<BylineProps> = ({ reviewedDate = site.reviewedDate }) => {
  const { doctor } = site;
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-paper-300 pt-5">
      <BadgeCheck
        size={16}
        strokeWidth={1.5}
        className="text-rose-600 flex-shrink-0"
        aria-hidden="true"
      />
      <p className="text-sm text-ink-700">
        Written and clinically reviewed by{' '}
        <Link
          to="/about"
          className="text-ink-900 font-medium underline underline-offset-2 decoration-paper-400 hover:decoration-rose-500"
        >
          {doctor.name}
        </Link>
        , {doctor.qualifications.join(', ')}
      </p>
      <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-500">
        Last reviewed: {reviewedDate}
      </span>
    </div>
  );
};
