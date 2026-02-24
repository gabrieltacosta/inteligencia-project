import { Passagem } from "../types/iPlaca";

interface ResultsDisplayProps {
    passagens: Passagem[];
    placaConsultada: string; // Adiciona a placa como uma nova prop
}

const ResultsDisplay = ({
    passagens,
    placaConsultada,
}: ResultsDisplayProps) => {
    if (passagens.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-4">
                Nenhuma passagem encontrada.
            </p>
        );
    }

    const passagensOrdenadas = [...passagens].sort((a, b) => {
        const dataA = new Date(a.dataOcorrencia).getTime();
        const dataB = new Date(b.dataOcorrencia).getTime();
        return dataB - dataA; // Retorna a ordem decrescente
    });

    return (
        <div className="flex flex-col mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Resultados da Busca
            </h2>
            <p className="text-center text-lg text-gray-600 mb-4">
                Placa: <span className="font-bold underline">{placaConsultada}</span>
            </p>
            <ul className="space-y-4">
                {passagensOrdenadas.map((passagem) => (
                    <li
                        key={passagem.idTransacao}
                        className="p-4 bg-gray-100 rounded-lg shadow-sm"
                    >
                        <p className="font-bold text-lg text-gray-700">
                            Praça: {passagem.praca}
                        </p>
                        <p className="text-sm text-gray-500">
                            Data: {new Date(passagem.dataOcorrencia).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">
                            Cabine: {passagem.numeroCabine}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsDisplay;
