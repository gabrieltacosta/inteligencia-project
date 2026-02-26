import PassagemForm from "@/components/Passagem-form";
import VoltarButton from "@/components/voltar-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulta de Passagens Rodoanel SPMAR",
};

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-6 mb-20">
      <h2 className="font-bold text-3xl">
        Consulta de Passagens Rodoanel SPMAR
      </h2>
      <div>
        <VoltarButton />
      </div>
      <div className="flex max-w-7xl w-full items-center justify-center md:p-5">
        <PassagemForm />
      </div>
    </div>
  );
}
