import React from 'react';

export type SignalHubNode = {
  id: string;
  label: string;
  value: string;
  x: number;
  y: number;
};

export type SignalHubRelationship = {
  from: string;
  to: string;
  label?: string;
};

type SignalHubProps = {
  title: string;
  nodes: SignalHubNode[];
  relationships: SignalHubRelationship[];
  className?: string;
};

/** Consumer supplied relationships rendered as a simple, accessible hub map. */
export function SignalHub({ title, nodes, relationships, className }: SignalHubProps) {
  const nodeById = new Map(nodes.map(node => [node.id, node]));
  const safeId = (id: string) => id.replace(/[^a-zA-Z0-9_-]/g, '-');
  const headingId = `signal-hub-${safeId(title)}-title`;

  return (
    <section className={className} aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      <div className="r01-signal-hub-visual" aria-hidden="true">
        <svg viewBox="0 0 100 100" role="presentation" focusable="false">
          {relationships.map((relationship, index) => {
            const from = nodeById.get(relationship.from);
            const to = nodeById.get(relationship.to);
            if (!from || !to) return null;
            return <line key={`${relationship.from}-${relationship.to}-${index}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />;
          })}
          {nodes.map(node => <circle key={node.id} cx={node.x} cy={node.y} r="3" />)}
        </svg>
      </div>
      <ul className="r01-signal-hub-relationships">
        {relationships.map((relationship, index) => {
          const from = nodeById.get(relationship.from);
          const to = nodeById.get(relationship.to);
          if (!from || !to) return null;
          return <li key={`${relationship.from}-${relationship.to}-${index}`}>
            <span>{from.label}</span> <span>{relationship.label || 'connected to'}</span> <span>{to.label}</span>
          </li>;
        })}
      </ul>
      <table className="r01-signal-hub-data">
        <caption>{title} node values</caption>
        <thead><tr><th scope="col">Node</th><th scope="col">Value</th></tr></thead>
        <tbody>{nodes.map(node => <tr key={node.id}><th scope="row">{node.label}</th><td>{node.value}</td></tr>)}</tbody>
      </table>
    </section>
  );
}
