'use client';

import { useState } from 'react';
import { R02Masthead } from '../../../../templates/visual-reference/r02-masthead';
import { R02Navigation } from '../../../../templates/visual-reference/r02-nav';
import { R02StoryGrid } from '../../../../templates/visual-reference/r02-story-grid';
import { R01ActionTiles } from '../../../../templates/visual-reference/r01-action-tiles';
import { R03Artboard } from '../../../../templates/visual-reference/r03-artboard';
import { R03Layout } from '../../../../templates/visual-reference/r03-layout';
import { R04EmailField } from '../../../../templates/visual-reference/r04-email-field';
import { R04Form } from '../../../../templates/visual-reference/r04-form';
import { R04Layout } from '../../../../templates/visual-reference/r04-layout';
import { R04PasswordField } from '../../../../templates/visual-reference/r04-password-field';
import { r03PerformanceCopy } from '../../../../templates/visual-reference/r03-copy';

const screens = ['Mission dashboard', 'Editorial landing', 'Campaign poster', 'Sign in'] as const;

/** Fixed four-screen fixture for checking that optional artwork can be removed safely. */
export default function ReferenceArtOffFixturePage() {
  const [artOff, setArtOff] = useState(false);
  const art = (id: string, label: string) => artOff ? null : (
    <div data-reference-art={id} aria-label={label} role="img" className="reference-art-placeholder">
      {label}
    </div>
  );

  return (
    <main className="reference-art-off-fixture">
      <h1>Reference screens: artwork on and off</h1>
      <label>
        <input type="checkbox" checked={artOff} onChange={(event) => setArtOff(event.target.checked)} />
        Hide reference artwork
      </label>
      <section aria-label={screens[0]}>
        <h2>{screens[0]}</h2>
        {art('r01', 'Mission scene artwork')}
        <h3>Northstar Studio operations</h3>
        <R01ActionTiles label="Mission metrics" tiles={[
          { id: 'active', title: 'Active signals', value: '12', detail: 'Across 4 workstreams' },
          { id: 'queued', title: 'Queued actions', value: '03', detail: 'Next review at 14:30' },
        ]} />
        <p>Signal summary: 4 workstreams are stable; one review is due next.</p>
      </section>
      <section aria-label={screens[1]}>
        <h2>{screens[1]}</h2>
        <R02Navigation groups={[{ label: 'Stories', links: [{ label: 'Latest', href: '#latest' }] }]} />
        <R02Masthead eyebrow="Field notes" title="A city after the rain" description="Stories from the neighborhood." />
        {art('r02', 'Editorial scene artwork')}
        <R02StoryGrid stories={[{ id: 'market', title: 'The night market returns', summary: 'The riverside arcade opens for a new season.', href: '#market', featured: true }]} />
      </section>
      <section aria-label={screens[2]}>
        <h2>{screens[2]}</h2>
        <R03Artboard>
          <R03Layout
            title={<><span>{r03PerformanceCopy.eyebrow}</span><h3>{r03PerformanceCopy.title}</h3></>}
            artwork={art('r03', 'Campaign illustration') ?? <div data-reference-art-fallback="r03" aria-hidden="true" />}
            body={<p>{r03PerformanceCopy.description}</p>}
            tags={<p>{r03PerformanceCopy.date} · {r03PerformanceCopy.venue}</p>}
            callToAction={<a href="#event">{r03PerformanceCopy.callToAction}</a>}
          />
        </R03Artboard>
      </section>
      <section aria-label={screens[3]}>
        <h2>{screens[3]}</h2>
        <R04Layout
          form={<>
            <h3>Welcome back</h3>
            <R04Form onSubmit={() => undefined}>
              <R04EmailField label="Email address" defaultValue="reader@example.test" />
              <R04PasswordField label="Password" defaultValue="example-password" />
            </R04Form>
          </>}
          artwork={art('r04', 'Sign-in scene artwork')}
        />
      </section>
    </main>
  );
}
