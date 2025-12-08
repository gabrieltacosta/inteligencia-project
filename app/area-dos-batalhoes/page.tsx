import { Button } from "@/components/ui/button";
import Link from "next/link";

const area = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-6">
      <div className="items-center justify-center">
        <h2 className="text-center text-3xl font-bold">
          Limites de área dos Batalhões e DP
        </h2>
      </div>
     <Button asChild variant={"default"} className="text-black font-medium hover:font-bold bg-[#FFFE03] hover:bg-[#FFFE03]">
          <Link
            href="/"
          >
            Voltar
          </Link>
        </Button>
      <div className="flex max-w-7xl w-full pb-10 items-center justify-center">
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
