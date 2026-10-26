import styles from './r01-project-covers.module.css';

export type R01ProjectCoverProps = {
  /** Consumer supplied or separately licensed cover image. */
  src: string;
  /** Describe the cover for users who cannot see the image. */
  alt: string;
  /** Landscape project thumbnails use 4:3; poster covers use 2:3. */
  ratio?: 'landscape' | 'poster';
};

/** Content image slot for a project cover; no reference artwork is bundled. */
export function R01ProjectCover({ src, alt, ratio = 'landscape' }: R01ProjectCoverProps) {
  return (
    <figure className={styles.cover} data-ratio={ratio}>
      {/* eslint-disable-next-line @next/next/no-img-element -- consumer supplied image slot */}
      <img className={styles.image} src={src} alt={alt} loading="lazy" />
    </figure>
  );
}
