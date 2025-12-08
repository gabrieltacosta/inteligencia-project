import { Button } from "@/components/ui/button";
import Link from "next/link";

const Formulario = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 pb-10">
      <h2 className="text-center text-3xl font-bold">Previsão do Almoço</h2>
      <div>
        <Button asChild variant={"default"} className="text-black font-medium hover:font-bold bg-[#FFFE03] hover:bg-[#FFFE03]">
          <Link
            href="/"
          >
            Voltar
          </Link>
        </Button>
      </div>
      <div className="flex max-w-7xl w-full p-5">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdrpbwVLxoiJEE7NwVY-kAAZU2KcMNZIgYBm5O5HQ-v1wdbOA/viewform"
          width="540px"
          height="800px"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Formulario;
