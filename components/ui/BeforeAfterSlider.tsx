import React, { useRef, useState, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
  figureRef?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
  figureRef,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragging(true);
    update(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    update(e.clientX);
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 2));
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 2));
  };

  return (
    <figure className="relative select-none atlas-plate bg-paper-50">
      <span className="atlas-corner atlas-corner-tl" aria-hidden="true" />
      <span className="atlas-corner atlas-corner-tr" aria-hidden="true" />
      <span className="atlas-corner atlas-corner-bl" aria-hidden="true" />
      <span className="atlas-corner atlas-corner-br" aria-hidden="true" />
      <div
        ref={ref}
        className="relative aspect-[4/3] overflow-hidden touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        <img src={afterSrc} alt={afterAlt} draggable={false} className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src={beforeSrc} alt={beforeAlt} draggable={false} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <span className="absolute top-4 left-4 bg-paper-100 text-ink-900 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] uppercase border border-ink-900">
          Before
        </span>
        <span className="absolute top-4 right-4 bg-ink-900 text-paper-100 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] uppercase">
          After
        </span>
        <button
          type="button"
          role="slider"
          aria-label="Before-and-after comparison"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={onKey}
          className="absolute top-0 bottom-0 w-10 -translate-x-1/2 cursor-ew-resize focus-visible:outline-none"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-paper-100" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-paper-100 text-ink-900 flex items-center justify-center border border-ink-900">
            <MoveHorizontal size={16} strokeWidth={1.5} />
          </span>
        </button>
      </div>
      {(figureRef || caption) && (
        <figcaption className="flex items-baseline gap-3 border-t border-paper-300 px-5 py-3">
          {figureRef && <span className="atlas-label">{figureRef}</span>}
          {caption && <span className="atlas-figcap">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
};
