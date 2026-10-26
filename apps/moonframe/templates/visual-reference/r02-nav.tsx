import styles from './r02-nav.module.css';

export type R02NavigationLink = {
  href: string;
  label: string;
};

export type R02NavigationGroup = {
  label: string;
  links: R02NavigationLink[];
};

export type R02NavigationProps = {
  groups: R02NavigationGroup[];
  label?: string;
};

/** Editorial public navigation with link groups that stay available without script. */
export function R02Navigation({
  groups,
  label = 'Editorial navigation',
}: R02NavigationProps) {
  return (
    <nav className={styles.navigation} aria-label={label}>
      <details className={styles.disclosure} open>
        <summary className={styles.trigger}>Explore</summary>
        <div className={styles.groups}>
          {groups.map((group) => (
            <section className={styles.group} aria-label={group.label} key={group.label}>
              <h2 className={styles.groupLabel}>{group.label}</h2>
              <ul className={styles.links}>
                {group.links.map((link) => (
                  <li key={`${link.href}:${link.label}`}>
                    <a className={styles.link} href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </details>
    </nav>
  );
}
