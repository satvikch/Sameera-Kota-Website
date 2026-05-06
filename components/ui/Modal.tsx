import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  figureRef?: string;
  labelId?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  figureRef,
  labelId,
  children,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  const resolvedLabelId = labelId ?? 'modal-title';

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-900/55"
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? resolvedLabelId : undefined}
            className="relative z-10 w-full max-w-2xl bg-paper-100 rounded-3xl shadow-[0_24px_60px_-20px_rgba(60,30,50,0.3)] overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="px-7 md:px-10 pt-8 md:pt-10 pb-5 border-b border-paper-300">
              <div className="flex items-start justify-between gap-6">
                <div>
                  {figureRef && (
                    <p className="atlas-label mb-3">{figureRef}</p>
                  )}
                  {title && (
                    <h3
                      id={resolvedLabelId}
                      className="atlas-display atlas-display-tight text-2xl md:text-3xl"
                    >
                      {title}
                    </h3>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="text-ink-500 hover:text-ink-900 transition-colors"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>
            </div>
            <div className="p-7 md:p-10 max-h-[70vh] overflow-y-auto">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
