'use client';

import Link from 'next/link';
import {
  AppShell,
  Sidebar,
  Main,
  Header,
  Nav,
  NavItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Field,
  Input,
  Select,
  RadioGroup,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  useToast,
} from '@moonframe/ui';

export default function ProjectsPage() {
  const { toast } = useToast();

  return (
    <AppShell>
      <Sidebar>
        <div style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.2rem' }}>
          Orbit Workspace
        </div>
        <Nav aria-label="Workspace Navigation">
          <NavItem asChild>
            <Link href="/">Dashboard</Link>
          </NavItem>
          <NavItem asChild active>
            <Link href="/projects">Projects</Link>
          </NavItem>
        </Nav>
      </Sidebar>

      <Main>
        <Header>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink current>New Project</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Header>

        <Card style={{ maxWidth: '600px', margin: '2rem 0' }}>
          <CardHeader>
            <CardTitle>Create Project</CardTitle>
            <CardDescription>
              Demonstrating Moonframe Form & Field primitives inside Next.js App Router.
            </CardDescription>
          </CardHeader>
          <CardContent style={{ display: 'grid', gap: '1.25rem' }}>
            <Field label="Project Name" description="What are you building?" required>
              <Input placeholder="e.g. MoonWitness Dashboard" />
            </Field>

            <Field label="Target Environment" description="Deployment tier">
              <Select defaultValue="production">
                <option value="development">Development</option>
                <option value="staging">Staging</option>
                <option value="production">Production</option>
              </Select>
            </Field>

            <RadioGroup
              label="Visibility"
              defaultValue="private"
              items={[
                { value: 'public', label: 'Public (Open Source)' },
                { value: 'private', label: 'Private (Internal Team)' },
              ]}
            />
          </CardContent>
          <CardFooter style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <Button asChild variant="ghost">
              <Link href="/">Cancel</Link>
            </Button>
            <Button onClick={() => toast({ title: 'Success', description: 'Project created in Next.js example!' })}>
              Save Project
            </Button>
          </CardFooter>
        </Card>
      </Main>
    </AppShell>
  );
}
