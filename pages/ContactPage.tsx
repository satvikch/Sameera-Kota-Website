import React from 'react';
import { FileText, MapPin, Car, MessageCircle, Phone, Mail, AlertCircle } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';

const BEFORE_YOU_ARRIVE = [
  {
    icon: FileText,
    title: 'What to bring',
    items: [
      'Any previous scans, reports, or discharge summaries',
      'A written list of current medications with doses',
      'A note of any known allergies',
      'Your health-insurance card, if you have one',
      'Someone you trust, if you\u2019d like a second pair of ears',
    ],
  },
  {
    icon: MapPin,
    title: 'How to find us',
    items: [
      'Susheela Hospital, 11-12-147, Road No. 3',
      'SRK Puram, Kothapet, Hyderabad',
      'The clinic is on the main road — look for the hospital\u2019s front-facing entrance',
      'Call from the gate if you can\u2019t spot the sign',
    ],
  },
  {
    icon: Car,
    title: 'Parking & transport',
    items: [
      'Two-wheeler and four-wheeler parking on the hospital premises',
      'Dilsukhnagar metro is the nearest rail connection',
      'TSRTC buses 290, 293 stop within five minutes\u2019 walking distance',
      'Cab drop-off directly at the hospital entrance',
    ],
  },
];

const REPLY_CHANNELS = [
  {
    icon: Phone,
    channel: 'Phone',
    window: 'Clinic hours',
    promise: 'Answered live whenever the clinic is open. Voicemail is returned within the same working day.',
  },
  {
    icon: MessageCircle,
    channel: 'WhatsApp',
    window: '4 hours (clinic hours)',
    promise: 'The fastest way to reach us for non-urgent questions. Out-of-hours notes are replied to the next morning.',
  },
  {
    icon: Mail,
    channel: 'Email',
    window: '1 working day',
    promise: 'Best for longer queries or if you need to attach reports. Replied within one working day.',
  },
  {
    icon: AlertCircle,
    channel: 'Emergency',
    window: '24 \u00d7 7',
    promise: 'For acute abdominal pain, heavy bleeding or an urgent post-op concern — call the emergency number shown at the top of every page.',
  },
];

export const ContactPage: React.FC = () => {
  return (
    <>
      <ContactSection />

      {/* ───────────────────── Before you arrive ───────────────────── */}
      <section className="atlas-section bg-paper-200 border-t border-paper-300">
        <div className="atlas-container">
          <Reveal>
            <SectionHeading
              chapter="Before you arrive"
              title={
                <>
                  Small things that make a <span className="text-rose-600">first visit smoother</span>.
                </>
              }
              lede="Nothing here is essential — we can still see you if you arrive with none of it. But any of it helps us use the consultation time well."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {BEFORE_YOU_ARRIVE.map((col) => {
                const Icon = col.icon;
                return (
                  <article
                    key={col.title}
                    className="atlas-plate bg-paper-50 relative p-7"
                  >
                    <span className="atlas-corner atlas-corner-tl" aria-hidden="true" />
                    <span className="atlas-corner atlas-corner-tr" aria-hidden="true" />
                    <span className="atlas-corner atlas-corner-bl" aria-hidden="true" />
                    <span className="atlas-corner atlas-corner-br" aria-hidden="true" />
                    <span className="flex h-10 w-10 items-center justify-center border border-ink-900 bg-paper-100 text-ink-900 mb-5">
                      <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <h3 className="atlas-display text-xl text-ink-900 leading-tight mb-4">
                      {col.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {col.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-ink-700 leading-snug"
                        >
                          <span
                            className="mt-2 h-1 w-3 flex-shrink-0 bg-rose-500"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── How we reply ───────────────────── */}
      <section className="atlas-section bg-paper-100">
        <div className="atlas-container">
          <Reveal>
            <SectionHeading
              chapter="How we reply"
              title={
                <>
                  What to <span className="text-rose-600">expect from us</span> when you reach out.
                </>
              }
              lede="If we\u2019re slower than this, please chase — something has gone wrong on our end."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-14 border-y-2 border-ink-900">
              <div className="hidden md:grid grid-cols-[12rem_14rem_1fr] gap-8 px-6 py-4 border-b border-paper-300 bg-paper-200">
                <span className="atlas-label">Channel</span>
                <span className="atlas-label">Expected reply</span>
                <span className="atlas-label">Best for</span>
              </div>
              <ul>
                {REPLY_CHANNELS.map((row) => {
                  const Icon = row.icon;
                  return (
                    <li
                      key={row.channel}
                      className="grid grid-cols-1 md:grid-cols-[12rem_14rem_1fr] gap-x-8 gap-y-2 px-6 py-6 border-b border-paper-300 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                          className="text-rose-600 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="atlas-display text-lg text-ink-900 leading-tight">
                          {row.channel}
                        </span>
                      </div>
                      <span className="font-mono text-sm text-ink-900">{row.window}</span>
                      <p className="text-sm text-ink-700 leading-relaxed max-w-prose">
                        {row.promise}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};
