import { name } from "@/data/content.json";
export default function createTitle(pageName: string): string {
  return `${name} | ${pageName}`;
}
