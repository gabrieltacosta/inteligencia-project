"use client"; // Necessário para usar hooks como useState

import { useState } from "react";
import SearchForm from "@/components/SearchForm";
import ResultsDisplay from "@/components/ResultsDisplay";
import { Passagem } from "@/types/iPlaca";
import VoltarButton from "@/components/voltar-button";

export default function HomePage() {
    const [passagens, setPassagens] = useState<Passagem[]>([]);
    const [placaConsultada, setPlacaConsultada] = useState<string>("");

    const handleSearchResults = (results: Passagem[], placa: string) => {
        setPassagens(results);
        setPlacaConsultada(placa);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-10 p-6 mb-20">
            <h2 className="font-bold text-3xl">
                Consulta de Passagens Rodoanel SPMAR
            </h2>
            <div>
                <VoltarButton />
            </div>
            <div className="flex max-w-7xl w-full items-center justify-center md:p-5">
                <SearchForm onSearch={handleSearchResults} />
            </div>
            <ResultsDisplay
                passagens={passagens}
                placaConsultada={placaConsultada}
            />

        </div>
    );
}
