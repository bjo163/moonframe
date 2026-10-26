import type { ReactNode } from 'react';
import styles from './r04-layout.module.css';

export type R04LayoutProps = {
  /** The sign-in flow stays first in both DOM and reading order. */
  form: ReactNode;
  /** Optional consumer supplied scene or brand content. */
  artwork?: ReactNode;
  className?: string;
};

/** Responsive two-panel authentication composition with form-first semantics. */
export function R04Layout({ form, artwork, className }: R04LayoutProps) {
  const rootClassName = [styles.layout, className].filter(Boolean).join(' ');

  return (
    <main className={rootClassName}>
      <section className={styles.formPanel} aria-label="Sign in">
        {form}
      </section>
      {artwork ? (
        <aside className={styles.artworkPanel} aria-label="Illustration">
          {artwork}
        </aside>
      ) : null}
    </main>
  );
}
