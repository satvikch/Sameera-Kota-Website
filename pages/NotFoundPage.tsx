import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Seo } from '../components/ui/Seo';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Page not found · Dr. Sameera K"
        description="The page could not be found. Return to the homepage to find procedures, the clinic address in Kothapet, and how to book a consultation."
        path="/404"
      />
      <section className="atlas-section bg-paper-100">
      <div className="atlas-container max-w-2xl mx-auto text-center">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-rose-600 mb-4">
          Page not found · 404
        </p>
        <h1 className="atlas-display text-5xl md:text-6xl lg:text-7xl text-ink-900 leading-[0.95]">
          We couldn't find <span className="text-rose-600">that page</span>.
        </h1>
        <p className="mt-8 text-ink-700 leading-relaxed max-w-lg mx-auto">
          The page you are looking for may have moved or no longer exists. Head back home or browse the procedures.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-rose-500 text-paper-100 h-12 px-7 rounded-full shadow-[0_6px_16px_-8px_rgba(192,62,100,0.4)] text-sm tracking-tight hover:bg-rose-600 transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
            Home
          </Link>
          <Link
            to="/procedures"
            className="inline-flex items-center justify-center border-[1.5px] border-rose-300 text-rose-600 h-12 px-7 rounded-full hover:border-rose-500 hover:text-rose-700 transition-colors"
          >
            See all procedures
          </Link>
        </div>
      </div>
      </section>
    </>
  );
};
