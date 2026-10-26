import { useId, type AnchorHTMLAttributes, type InputHTMLAttributes } from 'react';
import styles from './r04-form-options.module.css';

export type R04FormOptionsProps = {
  rememberMe?: Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type' | 'checked' | 'defaultChecked'> & {
    label?: string;
  };
  recoveryHref: string;
  recoveryLabel?: string;
  recoveryLinkProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>;
  className?: string;
};

/** Accessible remember-me and recovery affordances; the link destination is consumer-owned. */
export function R04FormOptions({
  rememberMe,
  recoveryHref,
  recoveryLabel = 'Forgot password?',
  recoveryLinkProps,
  className,
}: R04FormOptionsProps) {
  const generatedId = useId();
  const checkboxId = `r04-remember-${generatedId}`;

  return (
    <div className={[styles.options, className].filter(Boolean).join(' ')}>
      {rememberMe ? (
        <label className={styles.remember} htmlFor={checkboxId}>
          <input {...rememberMe} id={checkboxId} className={styles.checkbox} type="checkbox" />
          <span>{rememberMe.label ?? 'Remember me'}</span>
        </label>
      ) : <span aria-hidden="true" />}
      <a {...recoveryLinkProps} className={styles.recovery} href={recoveryHref}>
        {recoveryLabel}
      </a>
    </div>
  );
}
