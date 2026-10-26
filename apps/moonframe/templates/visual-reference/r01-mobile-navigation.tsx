import styles from './r01-mobile-navigation.module.css';

export type R01NavigationItem = {
  href: string;
  label: string;
};

export type R01MobileNavigationProps = {
  items: R01NavigationItem[];
  label?: string;
};

/** Responsive command rail; the native disclosure preserves keyboard behavior. */
export function R01MobileNavigation({
  items,
  label = 'Workspace navigation',
}: R01MobileNavigationProps) {
  return (
    <nav className={styles.navigation} aria-label={label}>
      <details className={styles.disclosure}>
        <summary className={styles.trigger}>Workspace menu</summary>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={`${item.href}:${item.label}`}>
              <a className={styles.link} href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
