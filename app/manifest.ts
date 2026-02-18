import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Inteligência - 6ºBPRv",
    short_name: "Inteligência - 6ºBPRv",
    description:
      "Aplicação com links de ferramentas de inteligência do 6º BPRv.",
    start_url: "/",
    display: "standalone",
    background_color: "#272727",
    theme_color: "#464646",
    icons: [
      {
        src: "/coruja-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/coruja-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
