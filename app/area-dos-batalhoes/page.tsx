import VoltarButton from "@/components/voltar-button";

const area = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-6 mb-20">
      <div className="items-center justify-center">
        <h2 className="text-center text-3xl font-bold">
          Limites de área dos Batalhões e DP
        </h2>
      </div>
      <VoltarButton />
      <div className="flex max-w-7xl w-full items-center justify-center">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1IZQYhjM25zcrjnTEByfibpcDAE59r9o&ehbc=2E312F"
          width="1920"
          height="540"
        ></iframe>
      </div>
    </div>
  );
};

export default area;
