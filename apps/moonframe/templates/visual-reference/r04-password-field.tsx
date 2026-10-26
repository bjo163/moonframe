'use client';

import { useId, useState, type InputHTMLAttributes } from 'react';
import styles from './r04-password-field.module.css';

export type R04PasswordFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type' | 'autoComplete'> & {
  id?: string;
  label?: string;
  helpText?: string;
  error?: string;
};

/** Password entry affordance for a consumer-owned sign-in flow; it does not authenticate. */
export function R04PasswordField({
  id,
  label = 'Password',
  helpText,
  error,
  className,
  ...inputProps
}: R04PasswordFieldProps) {
  const generatedId = useId();
  const inputId = id ?? `r04-password-${generatedId}`;
  const helpId = helpText ? `${inputId}-help` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [helpId, errorId, inputProps['aria-describedby']].filter(Boolean).join(' ') || undefined;
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={inputId}>{label}</label>
      <div className={styles.control}>
        <input
          {...inputProps}
          id={inputId}
          className={[styles.input, className].filter(Boolean).join(' ')}
          type={revealed ? 'text' : 'password'}
          autoComplete="current-password"
          aria-invalid={error ? true : inputProps['aria-invalid']}
          aria-describedby={describedBy}
        />
        <button
          className={styles.reveal}
          type="button"
          aria-controls={inputId}
          aria-pressed={revealed}
          onClick={() => setRevealed((value) => !value)}
        >
          {revealed ? 'Hide password' : 'Show password'}
        </button>
      </div>
      {helpText ? <p className={styles.help} id={helpId}>{helpText}</p> : null}
      {error ? <p className={styles.error} id={errorId}>{error}</p> : null}
    </div>
  );
}
