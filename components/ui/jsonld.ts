// Pure builders for per-route JSON-LD. The global entity graph (Physician +
// MedicalClinic) lives in index.html and is present on every prerendered page;
// these add page-specific nodes that reference it by @id, so there is no
// duplication of the doctor/clinic entities.
import { SITE_ORIGIN } from './seoConfig';
import type { Procedure } from '../../types';

const PHYSICIAN_ID = `${SITE_ORIGIN}/#physician`;
const CLINIC_ID = `${SITE_ORIGIN}/#clinic`;

export interface Crumb {
  label: string;
  /** Route path (e.g. '/procedures'); omit on the current/last crumb. */
  path?: string;
}

export function breadcrumbLd(trail: readonly Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.path
        ? { item: `${SITE_ORIGIN}${c.path === '/' ? '/' : c.path}` }
        : {}),
    })),
  };
}

type FaqLike = {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
};

/** Accepts both the homepage {q,a} and procedure {question,answer} shapes. */
export function faqPageLd(items: readonly FaqLike[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question ?? it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.answer ?? it.a },
    })),
  };
}

export function medicalProcedureLd(p: Procedure) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `${SITE_ORIGIN}/procedures/${p.slug}#procedure`,
    name: p.title,
    procedureType: 'https://schema.org/SurgicalProcedure',
    description: p.summary,
    url: `${SITE_ORIGIN}/procedures/${p.slug}`,
    ...(p.detailed?.howItWorks ? { howPerformed: p.detailed.howItWorks } : {}),
    ...(p.imageUrl ? { image: p.imageUrl } : {}),
    performer: { '@id': PHYSICIAN_ID },
    location: { '@id': CLINIC_ID },
  };
}

export function procedureListLd(procedures: readonly Procedure[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: procedures.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${SITE_ORIGIN}/procedures/${p.slug}`,
    })),
  };
}
