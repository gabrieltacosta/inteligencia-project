import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dataInicial = searchParams.get("dataInicial");
  const dataFinal = searchParams.get("dataFinal");
  const placaVeiculo = searchParams.get("placaVeiculo");

  if (!dataInicial || !dataFinal || !placaVeiculo) {
    return NextResponse.json(
      { error: "Parâmetros de busca incompletos." },
      { status: 400 }
    );
  }

  try {
    const externalApiUrl = `http://10.5.27.114:9005/buscapassagens?dataInicial=${dataInicial}&dataFinal=${dataFinal}&placaVeiculo=${placaVeiculo}`;

    // A requisição para a API externa é feita no servidor, resolvendo o problema de CORS
    const response = await axios.get(externalApiUrl);

    if (!response) {
      return NextResponse.json(
        { error: "Erro ao buscar dados na API externa." },
        { status: response }
      );
    }

    const data = await response;
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
