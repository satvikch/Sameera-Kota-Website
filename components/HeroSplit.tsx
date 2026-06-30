import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { site } from '../content/site';

export const Hero: React.FC = () => {
  const { doctor } = site;
  const hasRealPhoto = doctor.photo && !doctor.photo.startsWith('{{');

  return (
    <section className="relative">
      <div className="atlas-container pt-10 md:pt-16 pb-16 md:pb-24">
        {/* Masthead strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-ink-900">
          <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-ink-700">
            {doctor.practice.clinicName} · {doctor.practice.addressLine2}
          </p>
          <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-ink-500">
            {doctor.qualifications.join(' · ')}
          </p>
        </div>

        <div className="grid gap-y-14 gap-x-12 lg:grid-cols-12 pt-12 md:pt-16 items-start">
          {/* Left — headline + CTAs + key facts */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-rose-600 mb-6">
              <span className="inline-block w-8 h-px bg-rose-500 align-middle mr-3" />
              General, laparoscopic &amp; laser surgeon
            </p>
            <h1 className="atlas-display text-[2.75rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] text-ink-900 leading-[0.98]">
              Surgery you&rsquo;ll understand before you say yes.
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-ink-700 leading-relaxed">
              Dr. Sameera K treats hernia, gallstones, appendicitis, piles, thyroid
              and breast lumps, diabetic foot and soft-tissue abscesses — using
              laparoscopic and laser techniques wherever they make recovery
              faster. At {doctor.practice.clinicName}, {doctor.practice.addressLine2}, Hyderabad.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-rose-500 text-paper-100 h-14 px-7 rounded-full shadow-[0_8px_20px_-10px_rgba(192,62,100,0.4)] hover:bg-rose-600 hover:shadow-[0_12px_28px_-12px_rgba(192,62,100,0.5)] transition-all group"
              >
                <span className="text-sm tracking-tight">Book a consultation</span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                to="/procedures"
                className="inline-flex items-center justify-center gap-3 border-[1.5px] border-rose-300 text-rose-600 bg-paper-100 h-14 px-7 rounded-full hover:border-rose-500 hover:text-rose-700 transition-colors"
              >
                <span className="text-sm tracking-tight">See all procedures</span>
              </Link>
            </div>

            {/* Key facts */}
            <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t border-paper-300 pt-8">
              <div>
                <dt className="atlas-label mb-1.5">Hospital</dt>
                <dd className="text-sm text-ink-900">{doctor.practice.clinicName}</dd>
              </div>
              <div>
                <dt className="atlas-label mb-1.5">Location</dt>
                <dd className="text-sm text-ink-900">
                  {doctor.practice.addressLine2}, {doctor.practice.city}
                </dd>
              </div>
              <div>
                <dt className="atlas-label mb-1.5">Specialisations</dt>
                <dd className="text-sm text-ink-900">Laparoscopic &amp; laser surgery</dd>
              </div>
              <div>
                <dt className="atlas-label mb-1.5">Call</dt>
                <dd className="text-sm text-ink-900">
                  <a
                    href={`tel:${doctor.practice.phone}`}
                    className="font-mono hover:text-rose-600"
                  >
                    {doctor.practice.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right — portrait plate (real photo when available, deliberate placeholder otherwise) */}
          <aside className="lg:col-span-5">
            <figure className="atlas-plate bg-paper-50 relative lg:sticky lg:top-28">
              <span className="atlas-corner atlas-corner-tl" aria-hidden="true" />
              <span className="atlas-corner atlas-corner-tr" aria-hidden="true" />
              <span className="atlas-corner atlas-corner-bl" aria-hidden="true" />
              <span className="atlas-corner atlas-corner-br" aria-hidden="true" />
              <div className="aspect-[4/5] bg-rose-50 relative overflow-hidden">
                {hasRealPhoto ? (
                  <img
                    src={doctor.photo}
                    alt={doctor.photoAlt}
                    className="w-full h-full object-cover"
                    loading="eager"
                    width={640}
                    height={800}
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 400 500" className="w-full h-full">
                      <rect width="400" height="500" fill="#FFF1F4" />
                      <line x1="60" y1="120" x2="340" y2="120" stroke="#F38BA1" strokeWidth="0.5" />
                      <line x1="60" y1="380" x2="340" y2="380" stroke="#F38BA1" strokeWidth="0.5" />
                      <text
                        x="200"
                        y="290"
                        textAnchor="middle"
                        fontFamily="Bricolage Grotesque, sans-serif"
                        fontSize="210"
                        fontWeight="500"
                        fill="#1F1418"
                        letterSpacing="-8"
                      >
                        SK
                      </text>
                      <text
                        x="200"
                        y="440"
                        textAnchor="middle"
                        fontFamily="JetBrains Mono, monospace"
                        fontSize="9"
                        letterSpacing="2"
                        fill="#6B5260"
                      >
                        PORTRAIT · TO BE COMMISSIONED
                      </text>
                    </svg>
                  </div>
                )}
              </div>
              <figcaption className="px-5 py-4 border-t border-paper-300 flex items-baseline justify-between gap-3">
                <div>
                  <p className="atlas-display text-lg leading-tight">{doctor.name}</p>
                  <p className="atlas-figcap mt-0.5">{doctor.qualifications.join(' · ')}</p>
                </div>
                <span className="atlas-label">Portrait</span>
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
};

export const HeroSplit = Hero;
