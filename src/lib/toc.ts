import type { MarkdownHeading } from 'astro';

export interface TocItem extends MarkdownHeading {}

export function extractToc(headings: MarkdownHeading[] | MarkdownHeading | undefined): TocItem[] {
  if (!headings) {
    console.warn('No headings provided to extractToc');
    return [];
  }

  if (!Array.isArray(headings)) {
    console.warn('Headings provided to extractToc is not an array');
    headings = [headings];
  }

  return headings.map(heading => ({
    ...heading,
    text: heading.text,
  }));
}