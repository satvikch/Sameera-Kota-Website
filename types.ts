export type ProcedureCategory =
  | 'Proctology'
  | 'Laparoscopy'
  | 'Emergency'
  | "Women's Surgery"
  | 'Vascular';

export interface ProcedureSessionInfo {
  duration: string;
  stay: string;
  recoveryAtHome: string;
  returnToWork: string;
  resultsVisibleIn: string;
}

export interface ProcedureDetailed {
  overview: readonly string[];
  howItWorks: string;
  benefits: readonly string[];
  honestRisks: string;
  sessionInfo: ProcedureSessionInfo;
  preCare: readonly string[];
  postCare: readonly string[];
  faqs: ReadonlyArray<{ question: string; answer: string }>;
}

export interface Procedure {
  slug: string;
  title: string;
  category: ProcedureCategory;
  icon: string;
  summary: string;
  bullets: readonly string[];
  disclaimer: string;
  candidates: string;
  procedureOverview: string;
  downtime: string;
  imageUrl?: string;
  imageAlt?: string;
  detailed?: ProcedureDetailed;
}

export interface Condition {
  id: string;
  name: string;
  patientLanguage: string;
  description: string;
  procedureSlug: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  icon: string;
  detail: {
    what: string;
    expect: string;
    outcome: string;
  };
}

export interface WhyUsCard {
  number: string;
  title: string;
  description: string;
  variant: 'featured' | 'dark' | 'light' | 'accent';
}

export interface TrustMetric {
  icon: string;
  value: string;
  label: string;
  note?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface EducationEntry {
  year: string;
  description: string;
}

export interface ClinicPhoto {
  src: string;
  alt: string;
  caption: string;
  span: 'tall' | 'wide' | 'square';
}

export interface TechnologyItem {
  title: string;
  icon: string;
  note: string;
  details: string;
}

export interface Testimonial {
  id: string;
  name: string;
  procedure: string;
  text: string;
  rating: number;
  dateLabel: string;
  /** True only for placeholder/example copy. Omit for real reviews. */
  isTemplate?: boolean;
  /** Where a real review was left, for honest attribution (e.g. 'Google'). */
  source?: 'Google';
}

export interface Video {
  id: string;
  /** YouTube video id (the v= value). */
  youtubeId: string;
  /** Clean, patient-facing display title (not the raw YouTube title). */
  title: string;
  description: string;
  /** Channel the video lives on, shown as "As featured on …". */
  source: string;
  category: 'explainer' | 'interview';
  /** Primary spoken language, for an honest tag + the lang attribute. */
  lang?: 'te' | 'en';
  /** If set, the video is shown contextually on that procedure's page. */
  procedureSlug?: string;
}

export interface FAQ {
  q: string;
  a: string;
  category?: 'General' | 'Before surgery' | 'After surgery' | 'Payment' | 'Emergency';
}

export interface DoctorPractice {
  clinicName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  emergencyPhone: string;
  emergencyPhoneDisplay: string;
  email: string;
  hoursGrouped: ReadonlyArray<{ days: string; time: string }>;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  socials?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export interface DoctorProfile {
  name: string;
  firstName: string;
  title: string;
  qualifications: readonly string[];
  specialisations: readonly string[];
  experienceYears: string;
  regNumber: string;
  philosophy: string;
  bio: readonly string[];
  photo: string;
  photoAlt: string;
  education: readonly EducationEntry[];
  memberships: readonly string[];
  practice: DoctorPractice;
}
