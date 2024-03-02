import content from '@/data/content.json';
export default function createTitle(pageName: string): string {
  return `${content.name} | ${pageName}`;
}
