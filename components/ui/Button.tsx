import React from 'react';
import { cn } from './cn';

type Variant = 'primary' | 'ghost' | 'outline' | 'rose';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-3 font-medium tracking-tight rounded-full transition-[background,color,border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-rose-500 disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-rose-500 text-paper-100 hover:bg-rose-600 shadow-[0_8px_20px_-10px_rgba(192,62,100,0.4)] hover:shadow-[0_12px_28px_-12px_rgba(192,62,100,0.5)]',
  rose:
    'bg-rose-500 text-paper-100 hover:bg-rose-600 shadow-[0_8px_20px_-10px_rgba(192,62,100,0.45)]',
  outline:
    'border-[1.5px] border-rose-300 text-rose-600 bg-paper-100 hover:border-rose-500 hover:text-rose-700',
  ghost:
    'text-ink-700 hover:text-ink-900 underline underline-offset-4 decoration-ink-300 hover:decoration-rose-500',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-xs tracking-[0.04em]',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-sm tracking-[0.02em]',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      fullWidth = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...rest}
      >
        {icon && iconPosition === 'left' && (
          <span aria-hidden="true" className="inline-flex">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span aria-hidden="true" className="inline-flex">
            {icon}
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';
