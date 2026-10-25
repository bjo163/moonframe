'use client';

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Tabs,
  Button,
  Callout,
  Badge,
  PricingCard,
  AuthCard,
  CodeBlock,
  Field,
  Input,
  Select,
  SegmentedControl,
  Slider,
  Switch,
  SkinBrandMark,
  SkinArtwork,
  SFXProvider,
  useSFX,
  skins,
  type SkinId,
  type Variant,
} from '@moonwitness/moonframe';

type ComponentSize = 'sm' | 'md' | 'lg';

function PropsPlayground() {
  const [targetComp, setTargetComp] = useState<'Button' | 'Callout' | 'Badge' | 'PricingCard' | 'AuthCard'>('Button');
  const [variant, setVariant] = useState<Variant>('primary');
  const [size, setSize] = useState<ComponentSize>('md');
  const [skin, setSkin] = useState<SkinId>('classic');
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [label, setLabel] = useState('Explore Moonframe');

  let generatedCode = '';
  switch (targetComp) {
    case 'Button':
      generatedCode = `<Button variant="${variant}" size="${size}">\n  ${label}\n</Button>`;
      break;
    case 'Callout':
      generatedCode = `<Callout title="${label}" variant="${variant}">\n  Interactive callout content with live skin styling.\n</Callout>`;
      break;
    case 'Badge':
      generatedCode = `<Badge variant="${variant}">\n  ${label}\n</Badge>`;
      break;
    case 'PricingCard':
      generatedCode = `<PricingCard\n  name="${label}"\n  price="$49/mo"\n  badge="Popular"\n  featured={${variant === 'primary'}}\n  features={['15 Distinct Skins', '43 Next.js Templates', '0 Runtime Dependencies']}\n/>`;
      break;
    case 'AuthCard':
      generatedCode = `<AuthCard\n  eyebrow="Security"\n  title="${label}"\n  description="Zero-FOUC Next.js SSR authentication card"\n>\n  <Button variant="${variant}" style={{ width: '100%' }}>Continue</Button>\n</AuthCard>`;
      break;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Field label="Component Primitive">
          <Select value={targetComp} onChange={e => setTargetComp(e.currentTarget.value as any)}>
            <option value="Button">Button</option>
            <option value="Callout">Callout</option>
            <option value="Badge">Badge</option>
            <option value="PricingCard">PricingCard</option>
            <option value="AuthCard">AuthCard</option>
          </Select>
        </Field>

        <Field label="Label / Title Text">
          <Input value={label} onChange={e => setLabel(e.currentTarget.value)} />
        </Field>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <Field label="Variant">
            <Select value={variant} onChange={e => setVariant(e.currentTarget.value as Variant)}>
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
              <option value="ghost">ghost</option>
              <option value="danger">danger</option>
            </Select>
          </Field>

          <Field label="Size">
            <Select value={size} onChange={e => setSize(e.currentTarget.value as ComponentSize)}>
              <option value="sm">sm (compact)</option>
              <option value="md">md (standard)</option>
              <option value="lg">lg (prominent)</option>
            </Select>
          </Field>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <Field label="Preview Skin">
            <Select value={skin} onChange={e => setSkin(e.currentTarget.value as SkinId)}>
              {skins.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </Select>
          </Field>

          <Field label="Appearance Mode">
            <SegmentedControl
              label="Mode"
              size="sm"
              value={mode}
              onValueChange={v => setMode(v as 'light' | 'dark')}
              items={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
              ]}
            />
          </Field>
        </div>

        <div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Generated TSX</span>
          <CodeBlock language="tsx" code={generatedCode} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Live Themed Sandbox</span>
        <div
          data-skin={skin}
          data-mode={mode}
          style={{
            flex: 1,
            minHeight: '280px',
            padding: '2rem',
            background: 'var(--mf-bg)',
            color: 'var(--mf-text)',
            border: 'var(--mf-border-width, 1px) solid var(--mf-border)',
            borderRadius: 'var(--mf-radius)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--mf-shadow)',
            transition: 'background-color 0.15s ease',
          }}
        >
          {targetComp === 'Button' && <Button variant={variant} size={size}>{label}</Button>}
          {targetComp === 'Callout' && (
            <Callout title={label} variant={variant} style={{ maxWidth: '420px', width: '100%' }}>
              Interactive callout dynamically responding to <code>{skin}</code> tokens in <code>{mode}</code> mode.
            </Callout>
          )}
          {targetComp === 'Badge' && <Badge variant={variant}>{label}</Badge>}
          {targetComp === 'PricingCard' && (
            <div style={{ maxWidth: '340px', width: '100%' }}>
              <PricingCard
                name={label}
                price="$49/mo"
                badge="Popular"
                featured={variant === 'primary'}
                features={['15 Distinct Skins', '43 Next.js Templates', '0 Runtime Dependencies']}
              />
            </div>
          )}
          {targetComp === 'AuthCard' && (
            <div style={{ maxWidth: '360px', width: '100%' }}>
              <AuthCard
                eyebrow="Security"
                title={label}
                description="Zero-FOUC Next.js SSR authentication card"
              >
                <Button variant={variant} style={{ width: '100%' }}>Continue</Button>
              </AuthCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function VectorBrandGallery() {
  const [decorationsOff, setDecorationsOff] = useState(false);
  const [selectedSkin, setSelectedSkin] = useState<SkinId>('moonpunk');

  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h4 style={{ margin: 0, fontSize: '1rem' }}>M10 Geometric Brand Marks (15 Skins)</h4>
          <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--mf-muted)' }}>
            Each skin possesses a distinct, copyright-clean geometric mark that scales losslessly and adapts to CSS <code>currentColor</code>.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Switch
            label='Simulate data-decorations="off"'
            checked={decorationsOff}
            onCheckedChange={setDecorationsOff}
          />
        </div>
      </div>

      <div
        data-decorations={decorationsOff ? 'off' : undefined}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
          gap: '0.75rem',
        }}
      >
        {skins.map(s => {
          const isSelected = selectedSkin === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedSkin(s.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 0.5rem',
                borderRadius: 'var(--mf-radius)',
                border: isSelected ? '2px solid var(--mf-accent)' : '1px solid var(--mf-border)',
                background: isSelected ? 'color-mix(in srgb, var(--mf-accent) 8%, var(--mf-surface))' : 'var(--mf-surface)',
                cursor: 'pointer',
                color: 'inherit',
                textAlign: 'center',
              }}
            >
              <SkinBrandMark skin={s.id} size={36} decorative={false} label={s.name} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{s.name}</span>
            </button>
          );
        })}
      </div>

      <div
        data-decorations={decorationsOff ? 'off' : undefined}
        style={{
          padding: '1.5rem',
          border: '1px solid var(--mf-border)',
          borderRadius: 'var(--mf-radius)',
          background: 'var(--mf-surface)',
        }}
      >
        <h5 style={{ margin: '0 0 1rem', fontSize: '0.9rem' }}>
          Selected Skin Artwork Specimen: <strong>{selectedSkin}</strong>
        </h5>
        {decorationsOff ? (
          <Callout title='Decorations Suppressed (data-decorations="off")' variant="secondary">
            Per <code>MF-BRAND-BRIEFS-001</code>, decorative artwork containers are hidden when <code>data-decorations="off"</code> or reduced-stimulation modes are active. Functional brand marks remain visible.
          </Callout>
        ) : (
          <SkinArtwork
            skin={selectedSkin}
            title={`${selectedSkin.toUpperCase()} Visual Grammar`}
            caption="Geometric brand mark container rendered via SkinArtwork with semantic figure/figcaption layout"
          />
        )}
      </div>
    </div>
  );
}

function SFXStudioInner() {
  const sfx = useSFX();
  const [log, setLog] = useState<string[]>([]);

  function triggerSFX(eventId: any) {
    const res = sfx.play(eventId);
    const timestamp = new Date().toLocaleTimeString();
    if (res.played) {
      setLog(prev => [`[${timestamp}] Played event: "${eventId}" (AudioContext synthesized)`, ...prev.slice(0, 7)]);
    } else {
      setLog(prev => [`[${timestamp}] Silenced event: "${eventId}" (reason: ${res.reason})`, ...prev.slice(0, 7)]);
    }
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Callout title="MF-SFX-001 Contract Guarantees" variant="primary">
          Sound effects are <strong>100% opt-in</strong>, <strong>muted by default</strong>, rate-limited to 1 sound per 1000ms, and deduplicated per-event for 2000ms. Audio is synthesized in-memory via the WebAudio API without external audio files.
        </Callout>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Badge variant={sfx.consentGranted ? 'primary' : 'danger'}>
            Consent: {sfx.consentGranted ? 'Granted' : 'Not Granted'}
          </Badge>
          <Badge variant={sfx.muted ? 'secondary' : 'primary'}>
            Status: {sfx.muted ? 'Muted' : 'Unmuted'}
          </Badge>
          <Badge variant="secondary">Volume: {Math.round(sfx.volume * 100)}%</Badge>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {!sfx.consentGranted || sfx.muted ? (
            <Button size="sm" variant="primary" onClick={() => sfx.grantConsent()}>
              🔊 Grant Consent &amp; Unmute
            </Button>
          ) : (
            <Button size="sm" variant="secondary" onClick={() => sfx.revokeConsent()}>
              🔇 Mute / Revoke Consent
            </Button>
          )}
        </div>

        <div>
          <Slider
            label="Playback Volume"
            value={Math.round(sfx.volume * 100)}
            onChange={e => sfx.setVolume(Number(e.currentTarget.value) / 100)}
            min={0}
            max={100}
            showValue
          />
        </div>

        <div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
            Trigger 6 Canonical Audio Events:
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
            <Button size="sm" variant="secondary" onClick={() => triggerSFX('success')}>
              🔔 success
            </Button>
            <Button size="sm" variant="secondary" onClick={() => triggerSFX('warning')}>
              ⚠️ warning
            </Button>
            <Button size="sm" variant="secondary" onClick={() => triggerSFX('error')}>
              ❌ error
            </Button>
            <Button size="sm" variant="secondary" onClick={() => triggerSFX('notification')}>
              💬 notification
            </Button>
            <Button size="sm" variant="secondary" onClick={() => triggerSFX('confirmation')}>
              ✅ confirmation
            </Button>
            <Button size="sm" variant="secondary" onClick={() => triggerSFX('quest-reward')}>
              💎 quest-reward
            </Button>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Audio Runtime Event Log</span>
        <div
          style={{
            flex: 1,
            minHeight: '220px',
            padding: '1rem',
            background: 'var(--mf-surface)',
            border: '1px solid var(--mf-border)',
            borderRadius: 'var(--mf-radius)',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            overflowY: 'auto',
          }}
        >
          {log.length === 0 ? (
            <p style={{ color: 'var(--mf-muted)', margin: 0 }}>
              No audio events triggered yet. Click "Grant Consent &amp; Unmute" above and test an event button.
            </p>
          ) : (
            log.map((entry, idx) => (
              <div key={idx} style={{ marginBottom: '0.35rem', color: entry.includes('Silenced') ? 'var(--mf-muted)' : 'var(--mf-accent)' }}>
                {entry}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export function InteractivePlayground() {
  return (
    <SFXProvider defaultEnabled={false} defaultMuted={true} defaultVolume={0.35}>
      <Card style={{ margin: '1.5rem 0' }}>
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <CardTitle>Moonframe Interactive Studio &amp; Playground</CardTitle>
            <Badge variant="primary">M10 Live Studio</Badge>
          </div>
          <CardDescription>
            Live props configurator, 15-skin geometric vector catalog, and opt-in WebAudio synthesizer simulator.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            items={[
              {
                value: 'props',
                label: '1. Live Props & JSX Generator',
                content: <PropsPlayground />,
              },
              {
                value: 'vectors',
                label: '2. 15-Skin Vector Marks (M10)',
                content: <VectorBrandGallery />,
              },
              {
                value: 'sfx',
                label: '3. Opt-In WebAudio SFX Studio (M10)',
                content: <SFXStudioInner />,
              },
            ]}
          />
        </CardContent>
      </Card>
    </SFXProvider>
  );
}
