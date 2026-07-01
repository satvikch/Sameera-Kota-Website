import React from 'react';
import { Hero } from '../components/HeroSplit';
import { FeaturedProcedures } from '../components/ProceduresBentoGrid';
import { AboutDoctor } from '../components/AboutDoctor';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Process } from '../components/Process';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTABanner } from '../components/CTABanner';
import { Seo } from '../components/ui/Seo';
import { faqPageLd } from '../components/ui/jsonld';
import { site } from '../content/site';

export const HomePage: React.FC = () => {
  return (
    <>
      <Seo
        title="Dr. Sameera K · Laparoscopic & Laser Surgeon, Kothapet Hyderabad"
        description="Female general, laparoscopic and laser surgeon in Kothapet, Hyderabad. Minimally invasive care for hernia, gallstones, appendicitis, piles, thyroid and breast. Book a consultation."
        path="/"
        jsonLd={faqPageLd(site.faq)}
      />
      <Hero />
      <AboutDoctor />
      <FeaturedProcedures limit={5} />
      <WhyChooseUs />
      <Process />
      <TestimonialsCarousel />
      <FAQAccordion />
      <CTABanner
        chapter="Next step"
        heading={
          <>
            Not sure yet? <span className="text-rose-300">Start with a consultation.</span>
          </>
        }
        body="Thirty to forty minutes, no pressure, a written plan to take home. That is the whole of the first step."
        primaryLabel="Book a consultation"
        secondaryLabel="See all procedures"
        secondaryHref="/procedures"
      />
    </>
  );
};
