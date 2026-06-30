import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from './cn';

interface VideoEmbedProps {
  youtubeId: string;
  /** Used for the iframe title and the play button's accessible label. */
  title: string;
  className?: string;
}

/**
 * Privacy- and performance-first YouTube facade.
 *
 * Until the user clicks, only a static thumbnail is shown — no YouTube player
 * JS, no cookies. On click it swaps in the real player from the cookieless
 * youtube-nocookie.com domain. This keeps LCP low and avoids dropping tracking
 * cookies before consent (consistent with the site's privacy policy).
 */
export const VideoEmbed: React.FC<VideoEmbedProps> = ({ youtubeId, title, className }) => {
  const [active, setActive] = useState(false);
  // hqdefault always exists; object-cover trims the 4:3 letterbox into 16:9.
  const thumb = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div className={cn('relative aspect-video overflow-hidden bg-ink-900', className)}>
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-100"
        >
          <img
            src={thumb}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={480}
            height={360}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {/* Dim + play badge */}
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center bg-ink-900/25 transition-colors group-hover:bg-ink-900/15"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 text-paper-50 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play size={26} strokeWidth={1.5} className="ml-0.5 fill-paper-50" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
};
