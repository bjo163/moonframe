import type { ReactNode } from 'react';
import styles from './r04-brand.module.css';

export type R04BrandProps = {
  /** Consumer-owned logo or mark. The framework does not supply branded artwork. */
  logo?: ReactNode;
  /** Live, selectable fallback identity for consumers without a logo. */
  name: string;
  /** Optional short context rendered as ordinary text. */
  description?: string;
  className?: string;
};

/** Brand introduction slot with a truthful text fallback and no assumed identity. */
export function R04Brand({ logo, name, description, className }: R04BrandProps) {
  const rootClassName = [styles.brand, className].filter(Boolean).join(' ');

  return (
    <header className={rootClassName}>
      {logo ? <div className={styles.logo}>{logo}</div> : <p className={styles.name}>{name}</p>}
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
