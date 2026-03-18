import ConsultaForm from "@/components/consulta-form";
import { Button } from "@/components/ui/button";
import VoltarButton from "@/components/voltar-button";
import { Metadata } from "next";
import { handleLogout } from "./actions";

export const metadata: Metadata = {
  title: "Consulta telefones por CPF",
};

const consultaCpfPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-20">
      <div className="flex items-center justify-between gap-10">
        <div>
          <VoltarButton />
        </div>
        <div>
          <Button variant={"destructive"} onClick={handleLogout}>
            Sair
          </Button>
        </div>
      </div>
      <div className="w-full">
        <ConsultaForm />
      </div>
    </div>
  );
};

export default consultaCpfPage;
