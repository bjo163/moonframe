import type { ReactNode } from 'react';
import styles from './r04-layout.module.css';

export type R04LayoutProps = {
  /** The sign-in flow stays first in DOM/reading order and occupies the first responsive panel. */
  form: ReactNode;
  /** Optional consumer supplied scene or brand content; compact on mobile and full-height on desktop. */
  artwork?: ReactNode;
  /** Provide a concise label only when the artwork conveys information; otherwise it stays hidden from assistive technology. */
  artworkLabel?: string;
  className?: string;
};

/** Responsive two-panel sign-in composition; artwork is compact below 48rem and follows the form. */
export function R04Layout({ form, artwork, artworkLabel, className }: R04LayoutProps) {
  const rootClassName = [styles.layout, className].filter(Boolean).join(' ');

  return (
    <main className={rootClassName}>
      <section className={styles.formPanel} aria-label="Sign in">
        {form}
      </section>
      {artwork ? (
        <aside
          className={styles.artworkPanel}
          aria-hidden={artworkLabel ? undefined : true}
          aria-label={artworkLabel}
        >
          {artwork}
        </aside>
      ) : null}
    </main>
  );
}
