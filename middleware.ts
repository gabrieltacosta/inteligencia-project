import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Ignora Server Actions (Next.js 15 usa muito para mutações)
  if (request.headers.has("next-action")) {
    return NextResponse.next();
  }

  const sessionToken = request.cookies.get("access_token");

  // 2. Verifica se a rota atual é a /cpf ou alguma sub-rota dela (ex: /cpf/editar)
  const isProtectedRoute = pathname.startsWith("/cpf");
  const isAuthRoute = pathname.startsWith("/login");

  // REGRA: Se tentar acessar /cpf SEM token, manda para o login
  if (isProtectedRoute && !sessionToken) {
    const loginUrl = new URL("/login", request.url);
    // Opcional: salva a intenção de ir para /cpf para voltar depois do login
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // REGRA: Se JÁ TEM token e tenta ir para o login, manda para /cpf
  if (isAuthRoute && sessionToken) {
    return NextResponse.redirect(new URL("/cpf", request.url));
  }

  // Para todo o resto (Home, Sobre, Contato, etc), permite o acesso
  return NextResponse.next();
}

export const config = {
  // Mantemos o matcher para não rodar em arquivos de imagem, css e js
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public|api).*)"],
};
