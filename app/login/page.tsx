import LoginForm from "@/components/login-form";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import VoltarButton from "@/components/voltar-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const ConsultaCpf = async () => {
  const session = await (await cookies()).get("access_token");

  if (session) {
    redirect("/cpf");
  }
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-6 mb-20">
      <h2 className="font-bold text-3xl">Consulta telefones por CPF.</h2>
      <div>
        <VoltarButton />
      </div>
      <div className="flex max-w-7xl w-full items-center justify-center md:p-5">
        <LoginForm />
      </div>
    </div>
  );
};

export default ConsultaCpf;