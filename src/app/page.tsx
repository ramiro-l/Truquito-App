import type { Metadata } from "next";
import Title from "@/components/ui/title";
import content from "@/data/content.json";
import ButtonLink from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: content.name,
  description: content.description,
};

export default function Home() {
  return (
    <main className="flex w-[100vw] h-[100vh]  flex-col items-center px-8 py-10">
      <Title title={content.name} subtitle={content.description} />
      <div className="flex flex-col h-[50vh]  justify-center items-center gap-2">
        <div className="flex flex-col gap-2 mt-10">
          <p className="text-center uppercase text-2xl">Utilidades</p>
          <ButtonLink text="Cotador de puntos" href="/contador-de-puntos" />
        </div>

        <div className="flex flex-col gap-2 mt-10">
          <p className="text-center uppercase text-2xl">Próximamente</p>
          <ButtonLink text="Valores de las cartas" href="/" />
          <ButtonLink text="Calculadora del envido" href="/" />
        </div>
      </div>
      <p className="mt-20 text-center">
        Podés contribuir a este proyecto{" "}
        <Link
          className="underline"
          target="_blank"
          href="https://github.com/ramiro-l/truquito-app"
        >
          en este repositorio
        </Link>
        .
      </p>
    </main>
  );
}
