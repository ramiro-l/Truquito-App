import CardPoints from "@/components/CardPoints";
import Title from "@/components/ui/title";
import { home } from "@/data/content.json";

export default function Home() {
  return (
    <main className="flex w-[100vw] h-[100vh]  flex-col items-center px-8 py-10">
      <Title title={home.title} subtitle={home.subtitle} />
      <CardPoints />
    </main>
  );
}
