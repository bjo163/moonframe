import type { CSSProperties } from 'react';
import styles from './r01-scene-slot.module.css';

export type R01SceneSlotProps = {
  /** Consumer supplied or separately licensed scene artwork. */
  src: string;
  /** Describe meaningful scene content; use an empty string only when decorative. */
  alt: string;
  /** Optional focal point for responsive cropping (for example, "60% 40%"). */
  objectPosition?: string;
};

/** Optional cinematic scene seam. Operational content must remain in DOM outside this figure. */
export function R01SceneSlot({ src, alt, objectPosition = '50% 50%' }: R01SceneSlotProps) {
  const imageStyle: CSSProperties = { objectPosition };

  return (
    <figure className={styles.scene} aria-hidden={alt.length === 0 ? true : undefined}>
      {/* eslint-disable-next-line @next/next/no-img-element -- consumer supplied art, kept as a plain optional slot */}
      <img className={styles.image} src={src} alt={alt} style={imageStyle} loading="lazy" />
    </figure>
  );
}
