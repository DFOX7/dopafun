import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

export function buttonStyles(variant: ButtonVariant = 'primary', size: ButtonSize = 'md') {
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-stone-900 text-white shadow-sm hover:bg-stone-700',
    secondary: 'bg-white text-stone-900 shadow-sm hover:bg-stone-50',
    ghost: 'bg-transparent text-stone-700 hover:bg-stone-100',
    outline: 'border border-stone-200 bg-white/80 text-stone-900 hover:bg-white',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-5 text-sm',
    lg: 'h-13 px-7 py-4 text-base',
    icon: 'h-10 w-10 p-0',
  };

  return cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition disabled:cursor-not-allowed disabled:opacity-50',
    variants[variant],
    sizes[size],
  );
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonStyles(variant, size), className)} {...props}>
      {children}
    </button>
  );
}
