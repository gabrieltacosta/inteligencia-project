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
        src: "icons/launchericon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "icons/launchericon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "icons/launchericon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "icons/launchericon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "icons/launchericon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/launchericon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    lang: "pt-BR",
    categories: ["personalization", "productivity"],
    screenshots: [
      {
        src: "screenshots/desktop.png",
        sizes: "1920x911",
        type: "image/png",
        form_factor: "wide",
        label: "Desktop View",
      },
      {
        src: "screenshots/mobile.png",
        sizes: "378x1210",
        type: "image/png",
        form_factor: "narrow",
        label: "Mobile View",
      },
    ],
    orientation: "any",
  };
}
