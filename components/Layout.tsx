import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HeaderSticky } from './HeaderSticky';
import { EmergencyBanner } from './EmergencyBannerSticky';
import { MobileStickyCTA } from './MobileStickyCTA';
import { Footer } from './Footer';
import { PetalWash } from './PetalWash';
import { site } from '../content/site';

// Human-readable name for the current route — used to announce SPA navigations
// to screen-reader users (who otherwise get no signal that the page changed).
function routeLabel(pathname: string): string {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/') return 'Home';
  const map: Record<string, string> = {
    '/about': 'About Dr. Sameera K',
    '/procedures': 'Procedures',
    '/results': 'Results',
    '/contact': 'Contact',
    '/privacy-policy': 'Privacy policy',
    '/medical-disclaimer': 'Medical disclaimer',
    '/editorial-policy': 'Editorial policy',
  };
  if (map[clean]) return map[clean];
  const proc = clean.match(/^\/procedures\/(.+)$/);
  if (proc) {
    const p = site.procedures.find((x) => x.slug === proc[1]);
    return p ? p.title : 'Procedure';
  }
  return 'Page';
}

export const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const hasMounted = useRef(false);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0 });
    // Skip the very first render: on initial load the natural tab order from the
    // top of the document is correct, and we must not steal focus during hydration.
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    // On client-side navigation, move focus to the top of the new page's content
    // (so keyboard users are not stranded on the just-clicked link) and announce
    // the change politely. preventScroll keeps the scroll-to-top above intact.
    mainRef.current?.focus({ preventScroll: true });
    setAnnouncement(`${routeLabel(pathname)} — page loaded`);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col text-ink-900 relative">
      <PetalWash />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-ink-900 focus:text-paper-100 focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:tracking-[0.16em] focus:uppercase"
      >
        Skip to content
      </a>
      <EmergencyBanner />
      <HeaderSticky />
      <main
        id="main"
        ref={mainRef}
        tabIndex={-1}
        className="flex-1 pb-20 md:pb-0 focus:outline-none"
      >
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
      {/* Polite route-change announcer for screen readers. */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </div>
  );
};
