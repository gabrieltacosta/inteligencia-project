import LoginForm from "@/components/login-form"
import Link from "next/link"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ConsultaCpf= async () => {
  const session = await (await cookies()).get("access_token");

  if (session) {
    redirect("/cpf");
  }
    return (
        <div className="flex flex-col justify-center items-center gap-10 pb-10">
      <h2 className="font-bold text-3xl">Consulta telefones por CPF.</h2>
      <div>
        <Link
          href="/"
          className="text-black hover:font-bold bg-[#FFFE03] px-6 py-1 rounded-lg"
        >
          Voltar
        </Link>
      </div>
      <div className="flex max-w-7xl w-full p-5">
        <LoginForm />
      </div>
    </div>
    );
}

export default ConsultaCpf