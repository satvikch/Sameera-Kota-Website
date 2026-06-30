import React, { useState } from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { site } from '../content/site';
import { cn } from './ui/cn';

interface Fields {
  name: string;
  phone: string;
  email: string;
  procedure: string;
  message: string;
}

type Errors = Partial<Record<keyof Fields, string>>;

const INITIAL: Fields = {
  name: '',
  phone: '',
  email: '',
  procedure: '',
  message: '',
};

function validate(f: Fields): Errors {
  const errors: Errors = {};
  if (f.name.trim().length < 2) errors.name = 'Please enter your full name.';
  const phoneDigits = f.phone.replace(/[^0-9]/g, '');
  if (phoneDigits.length < 10) errors.phone = 'Please enter a 10-digit mobile number.';
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    errors.email = 'Please check the email format.';
  }
  if (f.message.trim().length < 10) {
    errors.message = 'A short description helps us prepare for your visit.';
  }
  return errors;
}

const labelClass = 'atlas-label block mb-2';
const fieldClass =
  'w-full bg-transparent border-0 border-b border-ink-900/60 text-ink-900 px-0 py-2.5 font-sans text-base placeholder:text-ink-300 focus-visible:outline-none focus-visible:border-ink-900 focus-visible:bg-paper-200/40 transition-colors';

export const BookingForm: React.FC = () => {
  const [fields, setFields] = useState<Fields>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const text = [
      `Hello Dr. Sameera K —`,
      `I would like to request a consultation.`,
      ``,
      `Full name: ${fields.name}`,
      `Mobile:    ${fields.phone}`,
      fields.email && `Email:     ${fields.email}`,
      `Regarding: ${fields.procedure || 'General consultation'}`,
      ``,
      `Note:`,
      fields.message,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${site.doctor.practice.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="border border-paper-300 bg-paper-100 rounded-2xl shadow-[0_8px_24px_-16px_rgba(60,30,40,0.12)] p-8 text-center relative"
      >
        <span className="inline-flex items-center justify-center w-11 h-11 bg-ink-900 text-paper-100 mb-5">
          <Check size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <p className="atlas-display text-2xl mb-2">Your note is on its way.</p>
        <p className="text-sm text-ink-700 max-w-md mx-auto leading-relaxed">
          WhatsApp should have opened in a new tab with your request pre-filled. If it
          did not, please email{' '}
          <a
            href={`mailto:${site.doctor.practice.email}`}
            className="underline underline-offset-2 text-rose-600"
          >
            {site.doctor.practice.email}
          </a>{' '}
          and we will reply within one working day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setFields(INITIAL);
          }}
          className="mt-6 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-500 hover:text-ink-900 border-b border-ink-300 hover:border-ink-900 pb-0.5"
        >
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <fieldset>
        <legend className="atlas-label mb-6">Fields marked required</legend>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <label htmlFor="bf-name" className={labelClass}>
              Full name <span className="text-signal not-italic">*</span>
            </label>
            <input
              id="bf-name"
              name="name"
              required
              value={fields.name}
              onChange={update('name')}
              aria-invalid={!!errors.name}
              className={cn(fieldClass, errors.name && 'border-signal')}
              placeholder="Ramesh Kumar"
            />
            {errors.name && <p className="text-xs text-signal mt-1 font-mono">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="bf-phone" className={labelClass}>
              Mobile <span className="text-signal">*</span>
            </label>
            <input
              id="bf-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              required
              value={fields.phone}
              onChange={update('phone')}
              aria-invalid={!!errors.phone}
              className={cn(fieldClass, errors.phone && 'border-signal')}
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && <p className="text-xs text-signal mt-1 font-mono">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-8">
          <div>
            <label htmlFor="bf-email" className={labelClass}>
              Email <span className="text-ink-300 normal-case">(optional)</span>
            </label>
            <input
              id="bf-email"
              name="email"
              type="email"
              value={fields.email}
              onChange={update('email')}
              aria-invalid={!!errors.email}
              className={cn(fieldClass, errors.email && 'border-signal')}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-signal mt-1 font-mono">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="bf-procedure" className={labelClass}>
              Concerning
            </label>
            <select
              id="bf-procedure"
              name="procedure"
              value={fields.procedure}
              onChange={update('procedure')}
              className={cn(fieldClass, 'appearance-none pr-6')}
            >
              <option value="">— Select —</option>
              {site.procedures.map((p) => (
                <option key={p.slug} value={p.title}>
                  {p.title}
                </option>
              ))}
              <option value="General consultation">General consultation</option>
            </select>
          </div>
        </div>

        <div className="mt-8">
          <label htmlFor="bf-message" className={labelClass}>
            Reason for visit <span className="text-signal">*</span>
          </label>
          <textarea
            id="bf-message"
            name="message"
            required
            rows={4}
            value={fields.message}
            onChange={update('message')}
            aria-invalid={!!errors.message}
            className={cn(fieldClass, 'h-auto py-3', errors.message && 'border-signal')}
            placeholder="What has brought you in, for how long, and anything you want us to know."
          />
          {errors.message && <p className="text-xs text-signal mt-1 font-mono">{errors.message}</p>}
        </div>
      </fieldset>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-paper-300">
        <button
          type="submit"
          className="inline-flex items-center gap-3 bg-rose-500 text-paper-100 h-12 px-7 rounded-full shadow-[0_6px_16px_-8px_rgba(192,62,100,0.4)] text-sm tracking-tight hover:bg-rose-600 transition-colors"
        >
          <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
          Send note via WhatsApp
        </button>
        <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-500 max-w-md leading-relaxed">
          Your note opens WhatsApp with the request drafted. Nothing is stored on this site.
        </p>
      </div>
    </form>
  );
};
