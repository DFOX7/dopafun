import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

const fieldClass =
  'mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-stone-900 focus:ring-4 focus:ring-yellow-100';

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <label className="block text-sm font-semibold text-stone-700">
      {label}
      <input className={cn(fieldClass, error && 'border-rose-300', className)} {...props} />
      {error ? <span className="mt-1 block text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}

export function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <label className="block text-sm font-semibold text-stone-700">
      {label}
      <textarea
        className={cn(fieldClass, 'min-h-32 resize-y', error && 'border-rose-300', className)}
        {...props}
      />
      {error ? <span className="mt-1 block text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}
