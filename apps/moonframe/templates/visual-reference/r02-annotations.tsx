import styles from './r02-annotations.module.css';

export type R02Annotation = {
  id: string;
  content: React.ReactNode;
  placement?: 'start' | 'end';
};

export type R02AnnotationsProps = {
  /** Caller supplied artwork or marks; no consumer brand symbols are bundled. */
  annotations?: R02Annotation[];
};

/** Optional decorative accents kept separate from the page's semantic content. */
export function R02Annotations({ annotations = [] }: R02AnnotationsProps) {
  if (annotations.length === 0) return null;

  return (
    <div className={styles.annotations} aria-hidden="true">
      {annotations.map(({ id, content, placement = 'end' }) => (
        <span className={`${styles.annotation} ${styles[placement]}`} key={id}>
          {content}
        </span>
      ))}
    </div>
  );
}
