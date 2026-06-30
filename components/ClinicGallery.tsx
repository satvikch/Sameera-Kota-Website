import React from 'react';
import { site } from '../content/site';
import { assetUrl } from './ui/asset';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

/**
 * Plate gallery — each photo is framed as an atlas plate, with a figure
 * reference and a page number. No asymmetric grid.
 */
export const ClinicGallery: React.FC = () => {
  return (
    <section className="atlas-section bg-paper-200">
      <div className="atlas-container">
        <Reveal>
          <SectionHeading
            chapter="Inside the clinic"
            title={
              <>
                A look around <span className="text-rose-600">Susheela Hospital</span>.
              </>
            }
            lede="From the reception desk to the operating theatre, where most of the work happens."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {site.clinicGallery.map((photo, i) => {
              const hasReal = photo.src && !photo.src.startsWith('{{');
              return (
                <li key={i} className="atlas-plate bg-paper-50 relative">
                  <div className="aspect-[4/3] bg-rose-50 overflow-hidden">
                    {hasReal ? (
                      <img
                        src={assetUrl(photo.src)}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover object-top grayscale-[0.3] contrast-105"
                      />
                    ) : (
                      <div
                        className="flex h-full items-center justify-center text-center px-6"
                        aria-hidden="true"
                      >
                        <div>
                          <p className="atlas-display text-lg text-ink-700">{photo.caption}</p>
                          <p className="atlas-label-tight mt-3 text-ink-500">Photograph pending</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="px-4 py-3 border-t border-paper-300">
                    <p className="atlas-figcap">{photo.caption}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
