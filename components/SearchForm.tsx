"use client"; // Necessário para usar hooks como useState em App Router

import { useState, FormEvent } from "react";
import { Passagem } from "../types/iPlaca";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SearchFormProps {
    onSearch: (passagens: Passagem[], placa: string) => void;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
    const [placa, setPlaca] = useState<string>("");
    const [dataInicial, setDataInicial] = useState<string>("");
    const [dataFinal, setDataFinal] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        onSearch([], placa);

        const [anoInicial, mesInicial, diaInicial] = dataInicial.split("-");
        const dataInicialFormatada = `${diaInicial}/${mesInicial}/${anoInicial}`;

        const [anoFinal, mesFinal, diaFinal] = dataFinal.split("-");
        const dataFinalFormatada = `${diaFinal}/${mesFinal}/${anoFinal}`;

        try {
            const url = `/api/buscapassagens?dataInicial=${dataInicialFormatada}&dataFinal=${dataFinalFormatada}&placaVeiculo=${placa}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Falha ao buscar dados.");
            }

            const data: Passagem[] = await response.json();
            onSearch(data, placa);
        } catch (e: unknown) {
            let errorMessage = "Ocorreu um erro desconhecido.";
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-10 pb-10 dark">
            <Card className="rounded-lg">
                <CardHeader className="pb-3 md:pb-6">
                    <CardTitle className="text-xl md:text-2xl">
                        Passagens
                    </CardTitle>
                </CardHeader>
                <CardContent>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="placa"
                        className="block font-medium mb-1"
                    >
                        Placa do Veículo:
                    </label>
                    <input
                        id="placa"
                        type="text"
                        value={placa}
                        onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                        required
                        autoFocus
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="dataInicial"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Data Inicial:
                    </label>
                    <input
                        id="dataInicial"
                        type="date"
                        value={dataInicial}
                        onChange={(e) => setDataInicial(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="dataFinal"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Data Final:
                    </label>
                    <input
                        id="dataFinal"
                        type="date"
                        value={dataFinal}
                        onChange={(e) => setDataFinal(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full"
                >
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Consultar"}
                </Button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default SearchForm;
