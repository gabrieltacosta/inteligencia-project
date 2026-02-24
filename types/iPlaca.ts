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
  
  export const formSchema = z.object({
    placa: z.string().trim().min(1, "A placa é obrigatória").length(7, "A placa deve ter exatamente 7 dígitos"),
  })

  export type FormSchema = z.infer<typeof formSchema>