import React from 'react';
import { site } from '../content/site';

/**
 * Thin top rule with a red signal dot. No dark banner, no pulse.
 * Exists as a single, calm sentence so that patients in distress find the number quickly.
 */
export const EmergencyBanner: React.FC = () => {
  const { emergencyPhone, emergencyPhoneDisplay } = site.doctor.practice;
  return (
    <div className="relative z-40 bg-paper-200 border-b border-paper-300">
      <div className="atlas-container flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-[11px] md:text-xs">
        <span className="inline-flex items-center gap-3 font-mono tracking-[0.18em] uppercase text-ink-700">
          <span className="inline-block w-2 h-2 bg-signal rounded-full" aria-hidden="true" />
          Surgical emergency
        </span>
        <a
          href={`tel:${emergencyPhone}`}
          className="inline-flex items-center gap-2 font-mono tracking-[0.08em] text-ink-900 hover:text-signal transition-colors"
        >
          <span className="hidden sm:inline text-ink-500">After-hours line</span>
          <span className="underline underline-offset-4 decoration-ink-300 hover:decoration-signal">
            {emergencyPhoneDisplay}
          </span>
        </a>
      </div>
    </div>
  );
};

export const EmergencyBannerSticky = EmergencyBanner;
