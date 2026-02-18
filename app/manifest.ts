import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Inteligência - 6ºBPRv",
    short_name: "Inteligência - 6ºBPRv",
    description:
      "Aplicação com links de ferramentas de inteligência do 6º BPRv.",
    start_url: "/",
    display: "standalone",
    background_color: "#c9c9c9",
    theme_color: "#464646",
    icons: [
      {
        src: "/rodoviaria-192.png",
        sizes: "192x84",
        type: "image/png",
      },
      {
        src: "/rodoviaria-512.png",
        sizes: "512x223",
        type: "image/png",
      },
    ],
  };
}
