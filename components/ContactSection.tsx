import React from 'react';
import { site } from '../content/site';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { BookingForm } from './BookingForm';

export const ContactSection: React.FC = () => {
  const p = site.doctor.practice;
  return (
    <section id="contact" className="atlas-section bg-paper-100">
      <div className="atlas-container">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Letterhead-style address block */}
          <Reveal className="lg:col-span-5">
            <SectionHeading
              as="h1"
              chapter="Contact"
              title={
                <>
                  Tell us briefly <span className="text-rose-600">what is going on</span>.
                </>
              }
              lede="We read every note and reply within one working day. For urgent concerns, please call the clinic directly."
            />

            <div className="mt-12 border-t-2 border-b-2 border-ink-900 py-8 space-y-6">
              <div>
                <p className="atlas-label mb-2">Address</p>
                <address className="not-italic text-ink-900 leading-relaxed text-base">
                  {p.clinicName}
                  <br />
                  {p.addressLine1}, {p.addressLine2}
                  <br />
                  {p.city}, {p.state} {p.pincode}
                </address>
              </div>
              <hr className="atlas-rule-soft" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="atlas-label mb-1">Telephone</p>
                  <a href={`tel:${p.phone}`} className="font-mono text-sm text-ink-900 hover:text-rose-600">
                    {p.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="atlas-label mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${p.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-ink-900 hover:text-rose-600"
                  >
                    {p.whatsappDisplay}
                  </a>
                </div>
                <div>
                  <p className="atlas-label mb-1">Post</p>
                  <a href={`mailto:${p.email}`} className="font-mono text-sm text-ink-900 hover:text-rose-600">
                    {p.email}
                  </a>
                </div>
                <div>
                  <p className="atlas-label mb-1">Emergency</p>
                  <a
                    href={`tel:${p.emergencyPhone}`}
                    className="font-mono text-sm text-signal hover:text-rose-700"
                  >
                    {p.emergencyPhoneDisplay}
                  </a>
                </div>
              </div>
              <hr className="atlas-rule-soft" />
              <div>
                <p className="atlas-label mb-2">Consulting hours</p>
                <dl className="font-mono text-sm text-ink-900 space-y-1">
                  {p.hoursGrouped.map((h) => (
                    <div key={h.days} className="grid grid-cols-[6rem_1fr] gap-4">
                      <dt className="text-ink-500">{h.days}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <figure className="mt-10 atlas-plate overflow-hidden bg-paper-50">
              <div className="aspect-[4/3] bg-paper-200">
                <iframe
                  title={`Map showing ${p.clinicName}`}
                  src={p.mapEmbedUrl}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
              <div className="flex items-baseline justify-between px-4 py-2 border-t border-paper-300">
                <p className="atlas-figcap">
                  {p.clinicName}, {p.addressLine2}
                </p>
                <a
                  href={p.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-700 hover:text-rose-600 border-b border-ink-300 pb-0.5"
                >
                  Open in Maps ↗
                </a>
              </div>
            </figure>
          </Reveal>

          {/* Intake form — right */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="atlas-plate bg-paper-50 relative">
              <div className="px-6 md:px-10 py-6 border-b border-paper-300">
                <p className="atlas-label">Consultation request</p>
              </div>
              <div className="px-6 md:px-10 py-10 md:py-12">
                <BookingForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
