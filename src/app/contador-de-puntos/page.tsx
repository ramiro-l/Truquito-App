import CardPoints from "./CardPoints";
import Title from "@/components/ui/title";
import content from "@/data/content.json";
import createTitle from "@/tools/createTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: createTitle(content.contador_de_puntos.title),
  description: content.contador_de_puntos.description,
};

export default function ContadorDePuntos() {
  return (
    <div className="flex  flex-col items-center px-8 py-10">
      <Title title={content.name} subtitle={content.contador_de_puntos.title} />
      <CardPoints />
    </div>
  );
}
