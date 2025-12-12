import DejemForm from "@/components/dejem-form";
import VoltarButton from "@/components/voltar-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultas de Escalas",
};

const Consulta = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-6 mb-20">
      <div className="items-center justify-center">
        <h2 className="text-center text-3xl font-bold">Consultas de Escalas</h2>
        <p className="text-center text-sm">
          Atividade DEJEM e Atividade DELEGADA
        </p>
      </div>
      <VoltarButton />
      <DejemForm />
    </div>
  );
};

export default Consulta;
