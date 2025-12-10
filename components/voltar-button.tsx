import Link from "next/link";
import { Button } from "./ui/button";

const VoltarButton = () => {
    return ( 
        <Button
          asChild
          variant={"default"}
          className="text-black font-medium hover:font-bold bg-[#FFFE03] hover:bg-[#FFFE03]"
        >
          <Link href="/">Voltar</Link>
        </Button>
     );
}
 
export default VoltarButton;