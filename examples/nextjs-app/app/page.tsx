'use client';

import Link from 'next/link';
import {
  AppShell,
  Sidebar,
  Main,
  Header,
  Nav,
  NavItem,
  SkinSelector,
  ModeSelector,
  Button,
  DataTable,
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  useTheme,
  useToast,
} from '@moonframe/ui';

export default function HomePage() {
  const { skin, mode } = useTheme();
  const { toast } = useToast();

  return (
    <AppShell>
      <Sidebar>
        <div style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.2rem' }}>
          Orbit Workspace
        </div>
        <Nav aria-label="Workspace Navigation">
          <NavItem asChild active>
            <Link href="/">Dashboard</Link>
          </NavItem>
          <NavItem asChild>
            <Link href="/projects">Projects</Link>
          </NavItem>
        </Nav>
        <div style={{ marginTop: '2rem', display: 'grid', gap: '0.75rem' }}>
          <SkinSelector label="Theme skin" />
          <ModeSelector variant="segmented" />
        </div>
      </Sidebar>

      <Main>
        <Header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h1 style={{ margin: 0, fontSize: '1.75rem' }}>Next.js Workspace</h1>
            <Badge variant="primary">{skin}</Badge>
            <Badge variant="secondary">{mode}</Badge>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button
              variant="secondary"
              onClick={() => toast({ title: 'Notification', description: 'Next.js App Router toast works!' })}
            >
              Test Toast
            </Button>
            <Button asChild>
              <Link href="/projects">Manage Projects</Link>
            </Button>
          </div>
        </Header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '1.5rem 0' }}>
          <StatCard label="Total Skins" value="15" detail="30 Appearances" />
          <StatCard label="Next.js Mode" value="SSR Ready" detail="React 19 Server Components" />
          <StatCard label="FOUC Prevention" value="Active" detail="Synchronous ThemeScript" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Consumer Smoke Test</CardTitle>
            <CardDescription>
              This page confirms @moonframe/ui works seamlessly in Next.js with App Router, Link navigation via asChild, SSR ThemeScript, and live theme switching.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              searchable
              caption="Next.js Deployments"
              columns={[
                { key: 'name', header: 'Project Name', sortable: true },
                { key: 'framework', header: 'Framework' },
                { key: 'status', header: 'Status' },
              ]}
              data={[
                { id: '1', name: 'Moonframe Core', framework: 'React 19', status: 'Active' },
                { id: '2', name: 'MoonWitness XIV', framework: 'Next.js 16', status: 'Ready' },
                { id: '3', name: 'Orbit Studio', framework: 'Next.js 16', status: 'Verified' },
              ]}
            />
          </CardContent>
        </Card>
      </Main>
    </AppShell>
  );
}
