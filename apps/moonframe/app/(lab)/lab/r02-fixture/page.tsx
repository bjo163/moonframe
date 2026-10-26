import { R02Filmstrip } from '../../../../templates/visual-reference/r02-filmstrip';
import { R02Masthead } from '../../../../templates/visual-reference/r02-masthead';
import { R02Navigation } from '../../../../templates/visual-reference/r02-nav';
import { R02StoryGrid } from '../../../../templates/visual-reference/r02-story-grid';

/** Stable rendered fixture used by the responsive R02 screenshot task. */
export default function R02FixturePage() {
  return (
    <main className="mx-auto grid w-full max-w-6xl gap-8 p-6 sm:p-8">
      <R02Navigation groups={[{ label: 'Stories', links: [
        { label: 'Latest', href: '#latest' },
        { label: 'Archive', href: '#archive' },
      ] }]} />
      <R02Masthead
        eyebrow="Field notes · 04"
        title="A city after the rain"
        description="Stories, places, and people shaping the neighborhood."
      />
      <R02StoryGrid stories={[
        { id: 'market', title: 'The night market returns', summary: 'Vendors reopen the riverside arcade for a new season.', href: '#market', featured: true },
        { id: 'studio', title: 'Inside the print studio', summary: 'A small workshop keeps local editions in circulation.', href: '#studio' },
        { id: 'garden', title: 'Gardens above the tracks', summary: 'Residents turn a quiet roof into shared green space.', href: '#garden' },
      ]} />
      <R02Filmstrip label="Story timeline" entries={[
        { id: 'one', title: 'Doors open', time: '09:00', dateTime: '2026-10-26T09:00:00Z' },
        { id: 'two', title: 'Market walk', time: '11:30', dateTime: '2026-10-26T11:30:00Z' },
        { id: 'three', title: 'Evening edition', time: '18:00', dateTime: '2026-10-26T18:00:00Z' },
      ]} />
    </main>
  );
}
