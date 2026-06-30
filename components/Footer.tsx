import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin } from 'lucide-react';
import { site } from '../content/site';

export const Footer: React.FC = () => {
  const p = site.doctor.practice;
  const year = new Date().getFullYear();
  const socials = p.socials;

  return (
    <footer className="bg-paper-200 border-t border-ink-900/10 text-ink-900">
      <div className="atlas-container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Brand + about */}
          <div className="lg:col-span-4">
            <p className="atlas-display text-2xl md:text-3xl leading-tight">
              {site.doctor.name}
            </p>
            <p className="mt-2 font-mono text-[10px] tracking-[0.16em] uppercase text-ink-500">
              {site.doctor.qualifications.join(' · ')}
            </p>
            <p className="mt-4 text-sm text-ink-700 leading-relaxed max-w-xs">
              General, laparoscopic &amp; laser surgeon at {p.clinicName}, {p.addressLine2}, Hyderabad.
            </p>
            {socials && (socials.instagram || socials.facebook || socials.googleMaps) && (
              <div className="mt-6 flex items-center gap-3">
                {socials.googleMaps && (
                  <a
                    href={socials.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dr. Sameera K on Google Maps"
                    className="flex h-9 w-9 items-center justify-center border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper-100 transition-colors"
                  >
                    <MapPin size={16} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                )}
                {socials.instagram && (
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dr. Sameera K on Instagram"
                    className="flex h-9 w-9 items-center justify-center border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper-100 transition-colors"
                  >
                    <Instagram size={16} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                )}
                {socials.facebook && (
                  <a
                    href={socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dr. Sameera K on Facebook"
                    className="flex h-9 w-9 items-center justify-center border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper-100 transition-colors"
                  >
                    <Facebook size={16} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Clinic address */}
          <div className="lg:col-span-3">
            <p className="atlas-label mb-4">Clinic</p>
            <address className="not-italic text-sm text-ink-900 leading-relaxed">
              <span className="font-medium">{p.clinicName}</span>
              <br />
              {p.addressLine1}
              <br />
              {p.addressLine2}
              <br />
              {p.city}, {p.state}
              {p.pincode.startsWith('{{') ? '' : ` ${p.pincode}`}
            </address>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="atlas-label mb-4">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${p.phone}`} className="font-mono text-ink-900 hover:text-rose-600">
                  {p.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${p.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-900 hover:text-rose-600"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={`mailto:${p.email}`} className="text-ink-900 hover:text-rose-600">
                  {p.email}
                </a>
              </li>
              <li>
                <a
                  href={p.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-900 hover:text-rose-600"
                >
                  Get directions
                </a>
              </li>
            </ul>
          </div>

          {/* Site links */}
          <div className="lg:col-span-2">
            <p className="atlas-label mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-ink-700 hover:text-ink-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ink-700 hover:text-ink-900">
                  About Dr. Sameera
                </Link>
              </li>
              <li>
                <Link to="/procedures" className="text-ink-700 hover:text-ink-900">
                  Procedures
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-ink-700 hover:text-ink-900">
                  Results
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ink-700 hover:text-ink-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="atlas-rule-soft mt-12 mb-6" />

        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2 mb-5 text-xs">
          <Link to="/privacy-policy" className="text-ink-700 hover:text-rose-600">
            Privacy Policy
          </Link>
          <Link to="/medical-disclaimer" className="text-ink-700 hover:text-rose-600">
            Medical Disclaimer
          </Link>
          <Link to="/editorial-policy" className="text-ink-700 hover:text-rose-600">
            Editorial Policy
          </Link>
        </nav>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-500">
          <p>
            © {year} {p.clinicName}. All rights reserved.
          </p>
          <p className="max-w-xl leading-relaxed">{site.legal.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};
