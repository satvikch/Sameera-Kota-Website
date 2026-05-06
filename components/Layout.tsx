import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HeaderSticky } from './HeaderSticky';
import { EmergencyBanner } from './EmergencyBannerSticky';
import { MobileStickyCTA } from './MobileStickyCTA';
import { Footer } from './Footer';
import { PetalWash } from './PetalWash';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col text-ink-900 relative isolate">
      <PetalWash />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-ink-900 focus:text-paper-100 focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:tracking-[0.16em] focus:uppercase"
      >
        Skip to content
      </a>
      <EmergencyBanner />
      <HeaderSticky />
      <main id="main" className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};
