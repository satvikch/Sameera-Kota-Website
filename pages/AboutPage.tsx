import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { site } from '../content/site';
import { Reveal } from '../components/ui/Reveal';
import { ClinicGallery } from '../components/ClinicGallery';
import { CTABanner } from '../components/CTABanner';
import { Seo } from '../components/ui/Seo';
import { assetUrl } from '../components/ui/asset';
import { breadcrumbLd } from '../components/ui/jsonld';

// The four principles already exist in site.whyChooseUs — we re-use them
// here as "approach to care" rather than re-writing new copy.
const APPROACH_POINTS = site.whyChooseUs;

export const AboutPage: React.FC = () => {
  const { doctor } = site;
  const hasRealPhoto = doctor.photo && !doctor.photo.startsWith('{{');
  const consultation = site.processSteps[0];

  return (
    <>
      <Seo
        title="About Dr. Sameera K · General & Laparoscopic Surgeon"
        description="Dr. Sameera K — MBBS, MS (General Surgery), FMAS, FISCP. A fellowship-trained general, laparoscopic and laser surgeon in Kothapet, Hyderabad, with unhurried, private consultations."
        path="/about"
        type="profile"
        jsonLd={breadcrumbLd([{ label: 'Home', path: '/' }, { label: 'About Dr. Sameera K' }])}
      />
      {/* ───────────────────── 1 · Page heading ───────────────────── */}
      <section className="atlas-section">
        <div className="atlas-container">
          <Reveal>
            <p className="atlas-chapter mb-6">
              <span className="atlas-lead-rule" aria-hidden="true" />
              About Dr. Sameera K
            </p>
            <h1
              className="atlas-display text-[3rem] sm:text-6xl lg:text-[5rem] xl:text-[5.75rem] text-ink-900 leading-[0.98] max-w-[18ch]"
            >
              The surgeon, <span className="text-rose-600">in her own words</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-700 leading-relaxed">
              A fellowship-trained general, laparoscopic and laser surgeon at
              {' '}{doctor.practice.clinicName}, {doctor.practice.addressLine2}, Hyderabad.
              The practice is organised around one rule: know what is wrong before
              proposing what to do about it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── 2 · Bio + portrait ───────────────────── */}
      <section className="atlas-section bg-paper-100">
        <div className="atlas-container">
          <div className="grid gap-y-14 lg:grid-cols-12 gap-x-12 items-start">
            {/* Portrait */}
            <Reveal className="lg:col-span-5">
              <figure className="atlas-plate bg-paper-50 relative">
                <span className="atlas-corner atlas-corner-tl" aria-hidden="true" />
                <span className="atlas-corner atlas-corner-tr" aria-hidden="true" />
                <span className="atlas-corner atlas-corner-bl" aria-hidden="true" />
                <span className="atlas-corner atlas-corner-br" aria-hidden="true" />
                <div className="aspect-[4/5] bg-rose-50 relative overflow-hidden">
                  {hasRealPhoto ? (
                    <img
                      src={assetUrl(doctor.photo)}
                      alt={doctor.photoAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={640}
                      height={800}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
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
                <figcaption className="px-5 py-4 border-t border-paper-300">
                  <p className="atlas-display text-lg leading-tight">{doctor.name}</p>
                  <p className="atlas-figcap mt-0.5">{doctor.qualifications.join(' · ')}</p>
                </figcaption>
              </figure>
            </Reveal>

            {/* Bio */}
            <Reveal delay={0.08} className="lg:col-span-7">
              <p className="atlas-label mb-5">Biography</p>
              <div className="space-y-6 text-lg md:text-xl text-ink-700 leading-relaxed max-w-prose">
                {doctor.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-paper-300 pt-8 max-w-xl">
                <div>
                  <dt className="atlas-label mb-1">Discipline</dt>
                  <dd className="text-sm text-ink-900">
                    General &amp; laparoscopic surgery, laser proctology
                  </dd>
                </div>
                <div>
                  <dt className="atlas-label mb-1">Hospital</dt>
                  <dd className="text-sm text-ink-900">{doctor.practice.clinicName}</dd>
                </div>
                <div>
                  <dt className="atlas-label mb-1">Qualifications</dt>
                  <dd className="text-sm text-ink-900">{doctor.qualifications.join(' · ')}</dd>
                </div>
                <div>
                  <dt className="atlas-label mb-1">Registration</dt>
                  <dd className="text-sm text-ink-900 font-mono">
                    {doctor.regNumber.startsWith('{{') ? 'Awaiting update' : doctor.regNumber}
                  </dd>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────── 3 · Approach to care ───────────────────── */}
      <section className="atlas-section bg-paper-200">
        <div className="atlas-container">
          <Reveal>
            <p className="atlas-chapter mb-5">
              <span className="atlas-lead-rule" aria-hidden="true" />
              Approach to care
            </p>
            <h2 className="atlas-display text-3xl md:text-5xl text-ink-900 leading-[1.05] max-w-[22ch]">
              Four rules that shape <span className="text-rose-600">every consultation</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="mt-14 border-y-2 border-ink-900 divide-y divide-paper-300">
              {APPROACH_POINTS.map((point) => (
                <div
                  key={point.number}
                  className="grid md:grid-cols-[5rem_20rem_1fr] gap-x-8 gap-y-3 px-2 py-8"
                >
                  <dt className="font-mono text-sm tracking-[0.1em] text-rose-600">
                    {point.number}
                  </dt>
                  <dd className="atlas-display text-xl md:text-2xl text-ink-900 leading-[1.1]">
                    {point.title}
                  </dd>
                  <dd className="text-ink-700 leading-relaxed max-w-prose">
                    {point.description}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── 4 · Training & memberships ───────────────────── */}
      <section className="atlas-section bg-paper-100">
        <div className="atlas-container">
          <Reveal>
            <p className="atlas-chapter mb-5">
              <span className="atlas-lead-rule" aria-hidden="true" />
              Training &amp; memberships
            </p>
            <h2 className="atlas-display text-3xl md:text-5xl text-ink-900 leading-[1.05] max-w-[22ch]">
              Where she trained, <span className="text-rose-600">what she trained in</span>.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="atlas-label mb-6">Education</p>
              <ol className="divide-y divide-paper-300 border-y border-paper-300">
                {doctor.education.map((e, i) => {
                  const isPlaceholder = e.year.startsWith('{{');
                  return (
                    <li key={i} className="grid grid-cols-[6rem_1fr] gap-4 py-5 items-baseline">
                      <span
                        className={`font-mono text-xs tracking-[0.08em] ${
                          isPlaceholder ? 'text-ink-300' : 'text-ink-500'
                        }`}
                      >
                        {isPlaceholder ? '— — — —' : e.year}
                      </span>
                      <span className="text-sm md:text-base text-ink-900 leading-snug">
                        {e.description}
                      </span>
                    </li>
                  );
                })}
              </ol>
              <p className="mt-4 atlas-figcap">
                Exact years and institutions will be confirmed with Dr. Sameera K before launch.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="atlas-label mb-6">Memberships &amp; fellowships</p>
              <ul className="divide-y divide-paper-300 border-y border-paper-300">
                {doctor.memberships.map((m, i) => (
                  <li key={i} className="flex gap-4 py-5 items-baseline">
                    <span
                      className="inline-block w-4 h-px bg-rose-500 flex-shrink-0 mt-2.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm md:text-base text-ink-900 leading-snug">{m}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 bg-rose-50 border border-rose-100 p-6">
                <p className="atlas-label mb-3">On the fellowships</p>
                <p className="text-sm text-ink-700 leading-relaxed">
                  <strong className="text-ink-900 font-medium">FMAS</strong> (Fellowship of
                  Minimal Access Surgery) certifies structured training in laparoscopic
                  technique. <strong className="text-ink-900 font-medium">FISCP</strong>{' '}
                  (Fellowship of the Indian Society for Colorectal Proctology) certifies
                  dedicated training in the surgical management of the colon, rectum and anus
                  — including the laser techniques used here for piles, fissures and fistula.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────── 5 · What a first consultation looks like ───────────────────── */}
      <section className="atlas-section bg-paper-200">
        <div className="atlas-container">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="atlas-chapter mb-5">
                  <span className="atlas-lead-rule" aria-hidden="true" />
                  Your first visit
                </p>
                <h2 className="atlas-display text-3xl md:text-5xl text-ink-900 leading-[1.05] max-w-[16ch]">
                  What a <span className="text-rose-600">consultation</span> actually feels like.
                </h2>
                <p className="mt-8 text-ink-700 leading-relaxed max-w-prose">
                  Patients often arrive anxious. It is our job, for the first fifteen
                  minutes, simply to make sense of what is going on. Surgery, if it comes
                  up at all, is discussed only after we have understood your case.
                </p>
              </div>
              <div className="lg:col-span-7 bg-paper-50 border border-paper-300 p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ink-900 text-paper-100">
                    <MessageSquare size={16} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="atlas-label">Step 01 · Consultation</p>
                    <p className="atlas-display text-xl mt-1 leading-tight">
                      {consultation.title}
                    </p>
                  </div>
                </div>
                <dl className="space-y-5">
                  <div>
                    <dt className="atlas-label mb-1">What happens</dt>
                    <dd className="text-sm text-ink-700 leading-relaxed">
                      {consultation.detail.what}
                    </dd>
                  </div>
                  <div>
                    <dt className="atlas-label mb-1">What to expect</dt>
                    <dd className="text-sm text-ink-700 leading-relaxed">
                      {consultation.detail.expect}
                    </dd>
                  </div>
                  <div>
                    <dt className="atlas-label mb-1">What you leave with</dt>
                    <dd className="text-sm text-ink-700 leading-relaxed">
                      {consultation.detail.outcome}
                    </dd>
                  </div>
                </dl>
                <div className="mt-8 pt-6 border-t border-paper-300">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 group text-sm tracking-tight text-ink-900 border-b border-ink-900 pb-1 hover:border-rose-500 hover:text-rose-600 transition-colors"
                  >
                    Book a consultation
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── 6 · Clinic gallery ───────────────────── */}
      <ClinicGallery />

      {/* ───────────────────── 7 · CTA ───────────────────── */}
      <CTABanner
        chapter="Next step"
        heading={
          <>
            Write first if you prefer. <span className="text-rose-300">No commitment needed.</span>
          </>
        }
        body="A short note on WhatsApp or email is always a good first step — no visit yet, no decisions. We reply within one working day."
        primaryLabel="Send a note"
      />
    </>
  );
};
