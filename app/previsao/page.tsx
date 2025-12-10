import VoltarButton from "@/components/voltar-button";

const Formulario = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-6 mb-20">
      <h2 className="text-center text-3xl font-bold">Previsão do Almoço</h2>
      <div>
        <VoltarButton />
      </div>
      <div className="flex max-w-7xl w-full items-center justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdrpbwVLxoiJEE7NwVY-kAAZU2KcMNZIgYBm5O5HQ-v1wdbOA/viewform"
          className="rounded-lg h-[500px] md:w-[540px] md:h-[800px]"
        />
      </div>
    </div>
  );
};

export default Formulario;
