"use client"; // Necessário para usar hooks como useState em App Router

import { formSchema, FormSchema, Passagem } from "../types/iPlaca";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { formatDate } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";

const PassagemForm = () => {
  const [passagens, setPassagens] = useState<Passagem[]>([]);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      placaVeiculo: "",
      dataInicial: "",
      dataFinal: "",
    },
  });

  const onSubmit = async (data: FormSchema) => {
    const dataInicial = formatDate(data.dataInicial);
    const dataFinal = formatDate(data.dataFinal);
    const placaVeiculo = data.placaVeiculo;
    const url = "https://spmar.hawkdev.cloud/api/consultar";

    setPassagens([]);

    try {
      const response = await axios.post(url, {
        dataInicial,
        dataFinal,
        placaVeiculo,
      });

      toast.success(
        `Passagens encontradas para a placa ${placaVeiculo.toUpperCase()}`,
      );
      setPassagens(response.data.data);
    } catch (error) {
      let errorMessage = "Erro ao buscar passagens";

      if (axios.isAxiosError(error)) {
        errorMessage =
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    }
  };

  const passagensOrdenadas = [...passagens].sort((a, b) => {
    const dataA = new Date(a.dataOcorrencia).getTime();
    const dataB = new Date(b.dataOcorrencia).getTime();
    return dataB - dataA; // Retorna a ordem decrescente
  });

  return (
    <div className="w-full max-w-sm md:max-w-md p-4 dark">
      <Card className="rounded-lg">
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-xl md:text-2xl">Consultar</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="placaVeiculo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Placa</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Digite a placa"
                        maxLength={7}
                        className="uppercase"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dataInicial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data Inicial</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Digite a data inicial"
                        type="date"
                        max={new Date().toISOString().split("T")[0]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dataFinal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data Final</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Digite a data final"
                        type="date"
                        max={new Date().toISOString().split("T")[0]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Buscar"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="mt-4 space-y-3">
        {passagens.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Resultados da Busca
            </h2>
            <p className="text-center text-lg mb-4">
              Placa:{" "}
              <span className="font-bold underline">
                {passagensOrdenadas[0]?.placaOperador}
              </span>
            </p>
          </>
        ) : (
          ""
        )}
        {passagensOrdenadas.map((p) => (
          <Card
            key={p.idTransacao}
            className="flex flex-col items-start pt-6 rounded-lg shadow-sm"
          >
            <CardContent>
              <p>Praça: {p.praca}</p>
              <p>Data: {new Date(p.dataOcorrencia).toLocaleDateString()}</p>
              <p>Cabine: {p.numeroCabine}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PassagemForm;
