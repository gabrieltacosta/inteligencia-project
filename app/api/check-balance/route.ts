// app/api/check-balance/route.ts

import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";

interface DeskDataBalanceResponse {
  status: {
    code: number; // Esperado: 3000
    message: string;
    details: string;
  };
  data: {
    balance: number;
  };
}

/**
 * Endpoint de API para consultar o saldo usando Axios.
 * Roda no servidor para proteger o token.
 */
export async function GET() {
  const DESKDATA_TOKEN = (await cookies()).get("access_token")?.value;

  if (!DESKDATA_TOKEN) {
    return NextResponse.json(
      { error: "Token da DeskData API não configurado." },
      { status: 500 }
    );
  }

  const options = {
    method: "GET",
    url: `${process.env.DESKDATA_URL}/credits`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${DESKDATA_TOKEN}`,
    },
    // Com axios no Next.js (Node.js), o cache é desligado por padrão,
    // mas se estivesse usando fetch, seria cache: 'no-store'
  };

  try {
    // ⚠️ Importante: o axios é importado e usado aqui, no lado do servidor.
    const response = await axios.request<DeskDataBalanceResponse>(options);

    // O status HTTP 200 do Axios indica sucesso (response.status)
    if (response.status !== 200) {
      // Isso normalmente seria tratado no bloco catch, mas é bom verificar.
      return NextResponse.json(
        { error: `Erro inesperado: status ${response.status}` },
        { status: response.status }
      );
    }

    // O retorno tipado é `response.data`
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;

    // Tratamento de erro específico do Axios
    if (axiosError.response) {
      // A API externa respondeu com um código de status fora da faixa 2xx
      console.error(
        "DeskData API responded with error:",
        axiosError.response.status,
        axiosError.response.data
      );
      return NextResponse.json(
        {
          error: "Falha na consulta à API DeskData.",
          details: axiosError.message,
        },
        { status: axiosError.response.status }
      );
    } else if (axiosError.request) {
      // A requisição foi feita, mas nenhuma resposta foi recebida
      console.error("No response received from DeskData:", axiosError.message);
      return NextResponse.json(
        { error: "Nenhuma resposta recebida da API DeskData." },
        { status: 504 } // Gateway Timeout
      );
    } else {
      // Erro na configuração ou outra coisa
      console.error("Axios setup error:", axiosError.message);
      return NextResponse.json(
        { error: "Erro ao configurar a requisição." },
        { status: 500 }
      );
    }
  }
}
