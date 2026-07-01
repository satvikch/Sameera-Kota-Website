import React from 'react';
import { Head } from 'vite-react-ssg';
import { DEFAULT_OG_IMAGE, isIndexable, canonical } from './seoConfig';

interface SeoProps {
  /** Full, page-specific <title>. */
  title: string;
  description: string;
  /** Route path for the canonical URL, e.g. '/about' or '/procedures/hernia-repair'. */
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  /** Page-specific structured data — rendered as JSON-LD in the document body. */
  jsonLd?: object | object[];
}

/**
 * Per-route document head. Meta/OG/canonical go through vite-react-ssg's <Head>
 * so they are extracted into the prerendered <head>. JSON-LD is rendered as an
 * inline body script (valid anywhere for search engines), which avoids
 * helmet's script-serialisation quirks and hydrates deterministically.
 *
 * The global Physician/MedicalClinic @graph stays in index.html; pass only
 * page-specific nodes (MedicalProcedure, FAQPage, BreadcrumbList, ItemList).
 */
export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  jsonLd,
}) => {
  const url = canonical(path);
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta
          name="robots"
          content={isIndexable ? 'index, follow' : 'noindex, follow'}
        />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
};
