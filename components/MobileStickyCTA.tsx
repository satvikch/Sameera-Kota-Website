import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, NotebookPen } from 'lucide-react';
import { site } from '../content/site';

export const MobileStickyCTA: React.FC = () => {
  const { phone, whatsapp } = site.doctor.practice;
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-paper-50 border-t border-ink-900/10"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-3 divide-x divide-paper-300">
        <a
          href={`tel:${phone}`}
          aria-label="Call clinic"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-mono tracking-[0.1em] uppercase text-ink-700 hover:text-ink-900"
        >
          <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
          Call
        </a>
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp clinic"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-mono tracking-[0.1em] uppercase text-ink-700 hover:text-ink-900"
        >
          <MessageCircle size={18} strokeWidth={1.5} aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          to="/contact"
          aria-label="Request consultation"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-mono tracking-[0.1em] uppercase bg-rose-500 text-paper-100"
        >
          <NotebookPen size={18} strokeWidth={1.5} aria-hidden="true" />
          Consult
        </Link>
      </div>
    </div>
  );
};
