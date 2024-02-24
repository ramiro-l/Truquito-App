import type { Metadata } from "next";
import Title from "@/components/ui/title";
import content from "@/data/content.json";
import ButtonLink from "@/components/ui/button";

export const metadata: Metadata = {
  title: content.name,
  description: content.description,
};

export default function Home() {
  return (
    <main className="flex w-[100vw] h-[100vh]  flex-col items-center px-8 py-10">
      <Title title={content.name} subtitle={content.description} />
      <div className="flex flex-col h-[50vh] justify-center items-center gap-8">
        <ButtonLink text="Inicio" href="/" />
        <ButtonLink text="Contador de puntos" href="/contador-de-puntos" />
      </div>
    </main>
  );
}
