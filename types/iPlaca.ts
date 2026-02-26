import z from "zod";

export interface Passagem {
  idTransacao: string;
  idOrigem: number;
  praca: string;
  numeroCabine: number;
  dataOcorrencia: string;
  placaOperador: string;
  seqTransacao: number;
  fotos: null | object[]; // ajuste o tipo se souber a estrutura das fotos
  tipoCorrecao: string;
}

export const formSchema = z
  .object({
    placaVeiculo: z
      .string()
      .trim()
      .min(1, "A placa é obrigatória")
      .length(7, "A placa deve ter exatamente 7 dígitos"),

    dataInicial: z
      .string()
      .min(1, "A data inicial é obrigatória")
      .refine((date) => !isNaN(Date.parse(date)), "Data inicial inválida"),

    dataFinal: z
      .string()
      .min(1, "A data final é obrigatória")
      .refine((date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        // Zeramos as horas para comparar apenas os dias
        today.setHours(0, 0, 0, 0);
        return selectedDate <= today;
      }, "A data final não pode ser futura"),
  })
  .refine(
    (data) => {
      // Validação cruzada: dataInicial não pode ser depois da dataFinal
      const inicio = new Date(data.dataInicial);
      const fim = new Date(data.dataFinal);

      return inicio <= fim;
    },
    {
      message: "A data inicial não pode ser posterior à data final",
      path: ["dataInicial"], // Define em qual campo o erro vai aparecer no formulário
    },
  );

export type FormSchema = z.infer<typeof formSchema>;
