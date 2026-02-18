import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  // 1. Pegar o parâmetro 'city' da URL
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const key = process.env.OPENWEATHER_API_KEY;

  let url = `${process.env.OPENWEATHER_API_URL}?appid=${key}&lang=pt_br&units=metric`;

  // Define a URL baseada nos parâmetros recebidos
  if (lat && lon) {
    url += `&lat=${lat}&lon=${lon}`;
  } else if (city) {
    url += `&q=${city}`;
  } else {
    return NextResponse.json(
      { error: "Informe a cidade ou as coordenadas" },
      { status: 400 },
    );
  }

  try {
    const response = await axios.get(url);
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    let status = 500;
    if (typeof error === "object" && error !== null && "response" in error) {
      const resp = (error as { response?: { status?: number } }).response;
      if (resp && typeof resp.status === "number") status = resp.status;
    }
    return NextResponse.json({ error: "Erro ao buscar dados" }, { status });
  }
}
