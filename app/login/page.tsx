import LoginForm from "@/components/login-form";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

const ConsultaCpf = async () => {
  const session = await (await cookies()).get("access_token");

  if (session) {
    redirect("/cpf");
  }
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-6 mb-20">
      <h2 className="font-bold text-3xl">Consulta telefones por CPF.</h2>
      <div>
        <Button
          asChild
          variant={"default"}
          className="text-black font-medium hover:font-bold bg-[#FFFE03] hover:bg-[#FFFE03]"
        >
          <Link href="/">Voltar</Link>
        </Button>
      </div>
      <div className="flex max-w-7xl w-full p-5">
        <LoginForm />
      </div>
    </div>
  );
};

export default ConsultaCpf;