import type { ReactNode } from 'react';
import styles from './r04-layout.module.css';

export type R04LayoutProps = {
  /** The sign-in flow stays first in DOM/reading order and occupies the first responsive panel. */
  form: ReactNode;
  /** Optional consumer supplied scene or brand content; compact on mobile and full-height on desktop. */
  artwork?: ReactNode;
  className?: string;
};

/** Responsive two-panel sign-in composition; artwork is compact below 48rem and follows the form. */
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
