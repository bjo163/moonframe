'use client';

import { useId, useState, type FormEvent, type ReactNode } from 'react';
import styles from './r04-form.module.css';

export type R04FormState = 'idle' | 'loading' | 'success' | 'error';

export type R04FormProps = {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
  submitLabel?: string;
  loadingLabel?: string;
  successMessage?: string;
  errorMessage?: string;
  disabled?: boolean;
  className?: string;
};

/** Sign-in form shell for a consumer-owned auth adapter; it never authenticates by itself. */
export function R04Form({
  children,
  onSubmit,
  submitLabel = 'Sign in',
  loadingLabel = 'Signing in…',
  successMessage = 'Request completed. The consumer authentication flow must confirm the result.',
  errorMessage = 'Unable to submit. Check the fields and try again.',
  disabled = false,
  className,
}: R04FormProps) {
  const generatedId = useId();
  const statusId = `r04-submit-status-${generatedId}`;
  const [state, setState] = useState<R04FormState>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (disabled || state === 'loading') return;
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setState('error');
      return;
    }
    setState('loading');
    try {
      await onSubmit(event);
      setState('success');
    } catch {
      setState('error');
    }
  }

  const statusText = state === 'loading'
    ? loadingLabel
    : state === 'success'
      ? successMessage
      : state === 'error'
        ? errorMessage
        : '';

  return (
    <form
      className={[styles.form, className].filter(Boolean).join(' ')}
      onSubmit={handleSubmit}
      aria-busy={state === 'loading'}
      aria-describedby={state === 'idle' ? undefined : statusId}
    >
      {children}
      <button className={styles.submit} type="submit" disabled={disabled || state === 'loading'}>
        {state === 'loading' ? loadingLabel : submitLabel}
      </button>
      <p
        className={state === 'error' ? styles.error : styles.status}
        id={statusId}
        role={state === 'error' ? 'alert' : 'status'}
        aria-live={state === 'error' ? 'assertive' : 'polite'}
        hidden={state === 'idle'}
      >
        {statusText}
      </p>
    </form>
  );
}
