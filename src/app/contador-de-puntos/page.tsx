import CardPoints from "@/components/CardPoints";
import Title from "@/components/ui/title";
import { contador_de_puntos, name } from "@/data/content.json";
import createTitle from "@/tools/createTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: createTitle(contador_de_puntos.title),
  description: contador_de_puntos.description,
};

export default function ContadorDePuntos() {
  return (
    <div className="flex w-[100vw] h-[100vh]  flex-col items-center px-8 py-10">
      <Title title={name} subtitle={contador_de_puntos.title} />
      <CardPoints />
    </div>
  );
}
