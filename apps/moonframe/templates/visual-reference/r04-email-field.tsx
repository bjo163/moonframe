import { useId, type InputHTMLAttributes } from 'react';
import styles from './r04-email-field.module.css';

export type R04EmailFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type' | 'autoComplete'> & {
  id?: string;
  label?: string;
  helpText?: string;
  error?: string;
};

/** Consumer-configurable email field; validation and authentication stay with the consumer. */
export function R04EmailField({
  id,
  label = 'Email address',
  helpText,
  error,
  className,
  ...inputProps
}: R04EmailFieldProps) {
  const generatedId = useId();
  const inputId = id ?? `r04-email-${generatedId}`;
  const helpId = helpText ? `${inputId}-help` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [helpId, errorId, inputProps['aria-describedby']].filter(Boolean).join(' ') || undefined;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={inputId}>{label}</label>
      <input
        {...inputProps}
        id={inputId}
        className={[styles.input, className].filter(Boolean).join(' ')}
        type="email"
        autoComplete="email"
        aria-invalid={error ? true : inputProps['aria-invalid']}
        aria-describedby={describedBy}
      />
      {helpText ? <p className={styles.help} id={helpId}>{helpText}</p> : null}
      {error ? <p className={styles.error} id={errorId}>{error}</p> : null}
    </div>
  );
}
