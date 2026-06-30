import React from 'react';
import type { Video } from '../types';
import { VideoEmbed } from './ui/VideoEmbed';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

interface VideoSectionProps {
  videos: readonly Video[];
  chapter: string;
  title: React.ReactNode;
  lede?: string;
}

const LANG_LABEL: Record<string, string> = { te: 'Telugu', en: 'English' };

/**
 * A grid of media/education videos, each a privacy-first facade embed credited
 * to its source channel ("As featured on …"). Used for the interview reel on
 * the About page; a single contextual video on a procedure page uses
 * <VideoEmbed/> directly.
 */
export const VideoSection: React.FC<VideoSectionProps> = ({ videos, chapter, title, lede }) => {
  if (videos.length === 0) return null;

  return (
    <section className="atlas-section bg-paper-100">
      <div className="atlas-container">
        <Reveal>
          <SectionHeading chapter={chapter} title={title} lede={lede} />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}>
              <figure lang={v.lang}>
                <VideoEmbed youtubeId={v.youtubeId} title={v.title} className="border border-paper-300" />
                <figcaption className="mt-5">
                  <p className="atlas-display text-xl text-ink-900 leading-tight">{v.title}</p>
                  <p className="mt-2 text-sm text-ink-700 leading-relaxed max-w-prose">{v.description}</p>
                  <p className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-500">
                    As featured on {v.source}
                    {v.lang && LANG_LABEL[v.lang] ? ` · ${LANG_LABEL[v.lang]}` : ''}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
