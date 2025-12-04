"use client"; // Indica que é um Componente Cliente (Client Component)

import React, { useState, useEffect } from "react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "./ui/item";

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

interface BalanceData {
  balance: number | null;
  error: string | null;
  loading: boolean;
}

const initialBalanceState: BalanceData = {
  balance: null,
  error: null,
  loading: true,
};

export function BalanceDisplay() {
  const [state, setState] = useState<BalanceData>(initialBalanceState);

  useEffect(() => {
    async function fetchBalance() {
      try {
        // **1. CHAMADA SEGURA:** Chama sua API Route interna
        const res = await fetch("/api/check-balance");

        if (!res.ok) {
          // Captura erros retornados pela sua API Route
          const errData = await res.json();
          throw new Error(
            errData.error || "Erro desconhecido ao buscar saldo."
          );
        }

        // **2. TRATAMENTO TIPADO:** Tipa a resposta da sua API Route
        const data: DeskDataBalanceResponse = await res.json();

        if (data.status.code !== 3000) {
          throw new Error(
            `API retornou status code ${data.status.code}: ${data.status.message}`
          );
        }

        setState({
          balance: data.data.balance,
          error: null,
          loading: false,
        });
      } catch (e) {
        setState({
          balance: null,
          error: (e as Error).message,
          loading: false,
        });
      }
    }

    fetchBalance();
  }, []);

  if (state.loading) return <p>🔄 Carregando saldo...</p>;
  if (state.error) return <p>❌ Erro ao carregar saldo: **{state.error}**</p>;

  return (
    <div className="w-full">
      <Item className="w-full flex flex-row items-center justify-between">
        <ItemContent>
          <ItemTitle>Saldo restante</ItemTitle>
          <ItemDescription>Cada consulta consome 1 crédito</ItemDescription>
        </ItemContent>
        <ItemActions className="text-2xl font-bold">
          {state.balance}
        </ItemActions>
      </Item>
    </div>
  );
}
