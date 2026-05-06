import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <section className="atlas-section bg-paper-100">
      <div className="atlas-container max-w-2xl mx-auto text-center">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-shell-600 mb-4">
          Page not found · 404
        </p>
        <h1 className="atlas-display text-5xl md:text-6xl lg:text-7xl text-ink-900 leading-[0.95]">
          We couldn't find <span className="text-shell-500">that page</span>.
        </h1>
        <p className="mt-8 text-ink-700 leading-relaxed max-w-lg mx-auto">
          The page you are looking for may have moved or no longer exists. Head back home or browse the procedures.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-ink-900 text-paper-100 h-12 px-5 text-sm tracking-tight hover:bg-forest-500 transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
            Home
          </Link>
          <Link
            to="/procedures"
            className="inline-flex items-center justify-center border border-ink-900 text-ink-900 h-12 px-5 text-sm tracking-tight hover:bg-ink-900 hover:text-paper-100 transition-colors"
          >
            See all procedures
          </Link>
        </div>
      </div>
    </section>
  );
};
