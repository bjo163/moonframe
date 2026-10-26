import styles from './r02-crew-map.module.css';

export type R02CrewMember = {
  id: string;
  name: string;
  role: string;
  /** Optional normalized position from 0 to 100 for the decorative graph. */
  position?: { x: number; y: number };
};

export type R02CrewConnection = {
  id: string;
  from: string;
  to: string;
};

export type R02CrewMapProps = {
  members: R02CrewMember[];
  connections?: R02CrewConnection[];
  label?: string;
};

const defaultPosition = (index: number, count: number) => {
  const angle = (index / Math.max(count, 1)) * Math.PI * 2 - Math.PI / 2;
  return { x: 50 + Math.cos(angle) * 34, y: 50 + Math.sin(angle) * 34 };
};

/** Consumer-controlled graph with an equivalent semantic list of crew members. */
export function R02CrewMap({ members, connections = [], label = 'Crew map' }: R02CrewMapProps) {
  const memberById = new Map(members.map((member) => [member.id, member]));
  const positioned = members.map((member, index) => ({
    ...member,
    position: member.position ?? defaultPosition(index, members.length),
  }));

  if (members.length === 0) return null;

  return (
    <section className={styles.section} aria-label={label}>
      <div className={styles.graph} aria-hidden="true">
        <svg className={styles.connections} viewBox="0 0 100 100" preserveAspectRatio="none">
          {connections.map(({ id, from, to }) => {
            const start = memberById.get(from);
            const end = memberById.get(to);
            if (!start || !end) return null;
            const startPosition = start.position ?? defaultPosition(members.indexOf(start), members.length);
            const endPosition = end.position ?? defaultPosition(members.indexOf(end), members.length);
            return <line key={id} x1={startPosition.x} y1={startPosition.y} x2={endPosition.x} y2={endPosition.y} />;
          })}
        </svg>
        {positioned.map(({ id, name, role, position }) => (
          <div className={styles.node} key={id} style={{ left: `${position.x}%`, top: `${position.y}%` }}>
            <span className={styles.pin} />
            <span className={styles.nodeName}>{name}</span>
            <span className={styles.nodeRole}>{role}</span>
          </div>
        ))}
      </div>
      <ul className={styles.list}>
        {members.map(({ id, name, role }) => <li key={id}><strong>{name}</strong><span>{role}</span></li>)}
      </ul>
    </section>
  );
}
