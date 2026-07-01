import React from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProceduresPage } from './pages/ProceduresPage';
import { ProcedureDetailPage } from './pages/ProcedureDetailPage';
import { ResultsPage } from './pages/ResultsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LegalPage } from './pages/LegalPage';
import { site } from './content/site';

// Route table consumed by vite-react-ssg. Each entry is prerendered to a static
// HTML file at build time (body content + per-route <head> baked in), then
// hydrated on the client. Dynamic /procedures/:slug paths are enumerated from
// content/site.ts via getStaticPaths so every procedure ships as a real page.
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'procedures', element: <ProceduresPage /> },
      {
        path: 'procedures/:slug',
        element: <ProcedureDetailPage />,
        getStaticPaths: () => site.procedures.map((p) => `procedures/${p.slug}`),
      },
      { path: 'results', element: <ResultsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <LegalPage slug="privacy-policy" /> },
      { path: 'medical-disclaimer', element: <LegalPage slug="medical-disclaimer" /> },
      { path: 'editorial-policy', element: <LegalPage slug="editorial-policy" /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
