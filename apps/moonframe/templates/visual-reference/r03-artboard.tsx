import styles from './r03-artboard.module.css';

export type R03ArtboardProps = {
  /** CSS aspect-ratio value. Defaults to a portrait 2:3 poster. */
  aspectRatio?: number | string;
  label?: string;
  children?: React.ReactNode;
  controls?: React.ReactNode;
};

/** Responsive poster preview with editor controls kept outside the artwork frame. */
export function R03Artboard({
  aspectRatio = '2 / 3',
  label = 'Poster preview',
  children,
  controls,
}: R03ArtboardProps) {
  return (
    <section className={styles.wrapper} aria-label={label}>
      <div className={styles.frame} style={{ aspectRatio }}>
        {children}
      </div>
      {controls ? <div className={styles.controls} aria-label="Poster controls">{controls}</div> : null}
    </section>
  );
}
