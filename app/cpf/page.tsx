import ConsultaForm from "@/components/consulta-form";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link"

const Dashboard = async () => {
  const session = await (await cookies()).get("access_token");

  if (!session) {
    redirect("/login");
  }

  async function handleLogout() {
    "use server";

    (await cookies()).delete("access_token");
    redirect("/login");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10 pb-10">
      <div className="flex items-center justify-between gap-10">
        <div>
        <Button asChild variant={"default"} className="text-black font-medium hover:font-bold bg-[#FFFE03] hover:bg-[#FFFE03]">
          <Link
            href="/"
          >
            Voltar
          </Link>
        </Button>
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

export default Dashboard;