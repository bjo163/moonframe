import type { CSSProperties, ReactNode } from 'react';
import styles from './r02-world-scene.module.css';

export type R02WorldSceneProps = {
  /** Consumer supplied or separately licensed city and moon scenery. */
  src?: string;
  /** Describe meaningful scenery; pass an empty string when it is decorative. */
  alt?: string;
  /** Responsive image focal point, independent of foreground text placement. */
  objectPosition?: string;
  children?: ReactNode;
};

/** R02 scenery seam; image and live editorial content scale independently. */
export function R02WorldScene({
  src,
  alt = '',
  objectPosition = '50% 50%',
  children,
}: R02WorldSceneProps) {
  const imageStyle: CSSProperties = { objectPosition };

  return (
    <section className={styles.scene} aria-label={alt ? undefined : 'Editorial scene'}>
      {src ? (
        <div className={styles.art} aria-hidden={alt.length === 0 ? true : undefined}>
          {/* eslint-disable-next-line @next/next/no-img-element -- consumer supplied art slot */}
          <img className={styles.image} src={src} alt={alt} style={imageStyle} loading="lazy" />
        </div>
      ) : null}
      {children ? <div className={styles.content}>{children}</div> : null}
    </section>
  );
}
