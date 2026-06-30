import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '../content/site';
import { cn } from './ui/cn';

const NAV = [
  { to: '/', label: 'Home', short: 'Home', mark: '01', end: true, dropdown: false },
  { to: '/about', label: 'About Dr. Sameera', short: 'About', mark: '02', end: false, dropdown: false },
  { to: '/procedures', label: 'Procedures', short: 'Procedures', mark: '03', end: false, dropdown: true },
  { to: '/results', label: 'Results', short: 'Results', mark: '04', end: false, dropdown: false },
  { to: '/contact', label: 'Contact', short: 'Contact', mark: '05', end: false, dropdown: false },
];

function Brandmark() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Dr. Sameera K — home">
      <span className="flex h-9 w-9 items-center justify-center border border-ink-900 bg-paper-50 font-mono text-[11px] tracking-[0.08em] text-ink-900">
        SK
      </span>
      <span className="flex flex-col leading-[1.05]">
        <span className="atlas-display text-[1.05rem] text-ink-900">
          Dr. Sameera K
        </span>
        <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-500">
          General &amp; laparoscopic surgeon
        </span>
      </span>
    </Link>
  );
}

/** Procedures nav item with a hover/focus-opened dropdown of procedure links. */
function ProceduresNavItem() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const wrapperRef = useRef<HTMLLIElement>(null);

  const openNow = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const closeSoon = () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
  };

  // Close on Escape + close when clicked outside
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <li
      ref={wrapperRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <NavLink
        to="/procedures"
        onFocus={openNow}
        aria-haspopup="menu"
        aria-expanded={open}
        className={({ isActive }) =>
          cn(
            'group relative flex items-baseline gap-2 px-3 py-2 text-sm tracking-tight transition-colors',
            isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
          )
        }
      >
        {({ isActive }) => (
          <>
            <span className="font-mono text-[10px] tracking-[0.1em] text-ink-300 group-hover:text-ink-500">
              03
            </span>
            <span>Procedures</span>
            <ChevronDown
              size={12}
              strokeWidth={1.75}
              className={cn(
                'ml-0.5 transition-transform duration-200',
                open && 'rotate-180'
              )}
              aria-hidden="true"
            />
            {isActive && (
              <span
                className="absolute left-3 right-3 -bottom-0.5 h-px bg-ink-900"
                aria-hidden="true"
              />
            )}
          </>
        )}
      </NavLink>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            role="menu"
            aria-label="Procedures"
            className="absolute top-full left-0 mt-1 min-w-[22rem] bg-paper-100 border border-paper-300 rounded-2xl shadow-[0_16px_40px_-12px_rgba(60,30,50,0.14)] z-50 overflow-hidden"
          >
            <div className="px-5 pt-5 pb-3 border-b border-paper-300 flex items-baseline justify-between">
              <p className="atlas-label">All procedures</p>
              <Link
                to="/procedures"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-500 hover:text-rose-600 border-b border-ink-300 hover:border-rose-500 pb-0.5"
              >
                See overview ↗
              </Link>
            </div>
            <ul className="py-2">
              {site.procedures.map((p, i) => (
                <li key={p.slug}>
                  <Link
                    to={`/procedures/${p.slug}`}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 px-5 py-2.5 text-sm text-ink-900 hover:bg-rose-100 hover:text-rose-700 transition-colors"
                  >
                    <span className="font-mono text-[10px] tracking-[0.08em] text-ink-300 w-7 flex-shrink-0 group-hover:text-rose-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 leading-snug">{p.title}</span>
                    <span className="atlas-label-tight text-ink-300 group-hover:text-rose-500 flex-shrink-0">
                      {p.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export const HeaderSticky: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-paper-100 transition-shadow duration-300',
        scrolled && 'shadow-[0_1px_0_rgba(23,20,16,0.12)]'
      )}
    >
      <div className="atlas-container flex items-center justify-between gap-6 h-16 md:h-20">
        <Brandmark />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-2">
            {NAV.map((item) => {
              if (item.dropdown) {
                return <ProceduresNavItem key={item.to} />;
              }
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      cn(
                        'group relative flex items-baseline gap-2 px-3 py-2 text-sm tracking-tight transition-colors',
                        isActive
                          ? 'text-ink-900'
                          : 'text-ink-500 hover:text-ink-900'
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="font-mono text-[10px] tracking-[0.1em] text-ink-300 group-hover:text-ink-500">
                          {item.mark}
                        </span>
                        <span>{item.short}</span>
                        {isActive && (
                          <span
                            className="absolute left-3 right-3 -bottom-0.5 h-px bg-ink-900"
                            aria-hidden="true"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${site.doctor.practice.phone}`}
            className="hidden lg:inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-ink-700 hover:text-rose-600 transition-colors"
          >
            {site.doctor.practice.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center h-10 px-5 bg-rose-500 text-paper-100 text-sm tracking-tight rounded-full shadow-[0_4px_12px_-6px_rgba(192,62,100,0.4)] hover:bg-rose-600 transition-colors"
          >
            Book consultation
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-ink-900"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 bg-ink-900/30 md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              key="drawer"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-label="Mobile"
              className="absolute left-0 right-0 top-full bg-paper-100 border-b border-ink-900/10 md:hidden"
            >
              <ul className="atlas-container py-6 divide-y divide-paper-300">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'flex items-baseline justify-between gap-4 py-4',
                          isActive ? 'text-ink-900' : 'text-ink-700'
                        )
                      }
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-ink-300">{item.mark}</span>
                        <span className="atlas-display text-2xl">{item.label}</span>
                      </span>
                    </NavLink>
                  </li>
                ))}
                <li className="pt-6">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center h-12 bg-ink-900 text-paper-100 text-sm tracking-tight"
                  >
                    Book consultation
                  </Link>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
